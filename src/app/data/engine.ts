import * as util from '../util';
import { Dataset } from './dataset';
import { FieldTrait, VlType } from './field';
import { assert, assertIn } from './assert';
import {
    AccumulatorTrait, AccumulatedResponseDictionary,
    PartialResponse
} from './accumulator';
import { Query } from './query';
import { Queue } from './queue';
import { Scheduler } from './scheduler';

export class Engine {
    rows: any[];
    dataset: Dataset;
    scheduler: Scheduler = new Scheduler();
    queue: Queue = new Queue(this.scheduler);

    constructor(private uri: string) {

    }

    /**
     * This will take long. For real datasets, use `sampleRows` instead.
     */
    load(): Promise<Dataset> {
        if (this.dataset) {
            return Promise.resolve(this.dataset);
        }

        return util.get(this.uri, "json").then(rows => {
            this.rows = rows;
            this.dataset = new Dataset(this.rows);

            return this.dataset;
        })
    }

    request(query: Query) {
        query.jobs().forEach(job => this.queue.append(job));
        this.queue.reschedule();
    }

    run() {
        if(this.queue.empty()) return;

        const job = this.queue.pop();

        job.query.progress.ongoing = 1;
        const partialResponses = job.run();

        job.query.progress.ongoing = 0;

        job.query.accumulate(job, partialResponses);
    }

    empty() {
        return this.queue.empty();
    }

    sampleRows() {
        // return this.http
        //     .get('./assets/movies.json')
        //     .pipe(
        //         map(res => {
        //             return res.filter(() => Math.random() < 0.1);
        //         })
        //     )
    }
}
