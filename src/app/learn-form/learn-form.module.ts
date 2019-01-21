import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


import { NameEditorComponent } from './name-editor/name-editor.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { DynamicFormQuestionComponent } from './dynamic-form-question/dynamic-form-question.component';

@NgModule({
  declarations: [
    HeroFormComponent,
    NameEditorComponent,
    ProfileEditorComponent,
    DynamicFormComponent,
    DynamicFormQuestionComponent],
  exports: [
    HeroFormComponent,
    NameEditorComponent,
    ProfileEditorComponent,
    DynamicFormComponent,
    DynamicFormQuestionComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class LearnFormModule { }
