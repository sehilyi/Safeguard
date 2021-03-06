import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProgressRingComponent } from './exploration/progress-ring.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { MetadataEditorComponent } from './metadata-editor/metadata-editor.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QueueViewComponent } from './queue-view/queue-view.component';
import { VisComponent } from './vis/vis.component';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { TooltipComponent } from './tooltip/tooltip.component';
import { HorizontalBarsTooltipComponent } from './vis/renderers/horizontal-bars-tooltip.component';
import { PunchcardTooltipComponent } from './vis/renderers/punchcard-tooltip.component';
import { TooltipHostDirective } from './tooltip/tooltip-host.directive';
import { FieldBadgeComponent } from './field-badge/field-badge.component';
import { SortablejsModule } from 'angular-sortablejs';
import { ProgressMiniRingComponent } from './exploration/progress-mini-ring.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { PIndicatorComponent } from './display/p-indicator/p-indicator.component';
import { VariableIndicatorComponent } from './display/variable-indicator.component';
import { SgPointComponent } from './display/point/sg-point.component';
import { SgComparativeComponent } from './display/comparative/sg-comparative.component';
import { SgDistributiveComponent } from './display/distributive/sg-distributive.component';
import { SgRangeComponent } from './display/range/sg-range.component';
import { SgDisplayComponent } from './display/sg-display.component';
import { TruthinessIndicatorComponent } from './display/truthiness-indicator/truthiness-indicator.component';

import { MomentModule } from 'ngx-moment';
import { SgListItemComponent } from './display/sg-list-item/sg-list-item.component';
import { QualityIndicatorComponent } from './display/quality-indicator/quality-indicator.component';
import { ErrorIndicatorComponent } from './display/error-indicator/error-indicator.component';
import { SgHistoryComponent } from './display/history/sg-history.component';
import { QueryIndicatorComponent } from './query-indicator/query-indicator.component';
import { SmartNumberPipe } from './smart-number.pipe';
import { QueryCreatorComponent } from './query-creator/query-creator.component';
import { PredicateIndicatorComponent } from './display/predicate-indicator/predicate-indicator.component';
import { DataViewerComponent } from './data-viewer/data-viewer.component';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FieldGroupedValueIndicatorComponent } from './display/field-grouped-value-indicator/field-grouped-value-indicator.component';

library.add(fas, far);

@NgModule({
    declarations: [
        AppComponent,
        ProgressRingComponent,
        MetadataEditorComponent,
        QueueViewComponent,
        VisComponent,
        TooltipComponent,
        HorizontalBarsTooltipComponent,
        TooltipHostDirective,
        FieldBadgeComponent,
        ProgressMiniRingComponent,
        PIndicatorComponent,
        VariableIndicatorComponent,
        SgPointComponent,
        SgComparativeComponent,
        SgDistributiveComponent,
        SgRangeComponent,
        SgDisplayComponent,
        TruthinessIndicatorComponent,
        SgListItemComponent,
        QualityIndicatorComponent,
        ErrorIndicatorComponent,
        SgHistoryComponent,
        PunchcardTooltipComponent,
        QueryIndicatorComponent,
        SmartNumberPipe,
        QueryCreatorComponent,
        PredicateIndicatorComponent,
        DataViewerComponent,
        FieldGroupedValueIndicatorComponent
    ],
    imports: [
        NgbModule.forRoot(),
        SortablejsModule.forRoot({ animation: 150 }),
        BrowserModule,
        HttpClientModule,
        FontAwesomeModule,
        FormsModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot(),
        MomentModule,
        RouterModule.forRoot([])
    ],
    providers: [],
    bootstrap: [AppComponent],
    entryComponents: [ HorizontalBarsTooltipComponent, PunchcardTooltipComponent ]
})
export class AppModule { }
