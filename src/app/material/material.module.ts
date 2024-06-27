import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatTableModule } from '@angular/material/table';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio'
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatListModule} from '@angular/material/list';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';













const material = [MatCardModule, MatButtonModule, MatSliderModule, MatBadgeModule,
  MatButtonToggleModule, MatTableModule, MatChipsModule, MatFormFieldModule,
  MatInputModule, DragDropModule, ScrollingModule, MatToolbarModule, MatIconModule, MatDialogModule,
  MatRadioModule, MatSelectModule,
  MatSnackBarModule,MatListModule,MatSlideToggleModule,CKEditorModule,MatProgressSpinnerModule]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    material

  ], exports: [material]
})
export class MaterialModule { }
