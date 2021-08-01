import { HeaderComponent } from './components/header/header.component';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsUtilService } from './services/forms-util.service';
import { LoaderComponent } from './components/loader/loader.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [HeaderComponent, LoaderComponent],
  providers: [FormsUtilService],
  exports: [HeaderComponent, LoaderComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}
