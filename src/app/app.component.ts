import {Component, OnInit} from '@angular/core';
import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import MathType from '@wiris/mathtype-ckeditor5';

ClassicEditor
.create(document.querySelector('#editor'), {
    plugins: [MathType],
    toolbar: ['MathType']
  }).then(editor => {
  console.log('Editor was initialized', editor);
})
  .catch(error => {
    console.error(error);
  });


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
    public Editor = ClassicEditor;

}
