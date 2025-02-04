import { NgModule } from '@angular/core'
import { TradeCompanionModule } from '@modules/trade-companion/trade-companion.module'
import { SharedModule } from '@shared/shared.module'
import {
  UserSettingsFeatureContainerComponent,
  UserSettingsFormComponent,
  UserSettingsHelpComponent,
} from './component'
import { ResizeDirective } from './directive/resize.directive'
import { OverlayComponent, UserSettingsComponent } from './page'

@NgModule({
  declarations: [
    // components
    UserSettingsFeatureContainerComponent,
    UserSettingsFormComponent,
    UserSettingsHelpComponent,
    // directives
    ResizeDirective,
    // pages
    OverlayComponent,
    UserSettingsComponent,
  ],
  imports: [SharedModule, TradeCompanionModule],
})
export class LayoutModule {}
