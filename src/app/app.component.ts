import { Component, OnInit } from '@angular/core';
import { ServiceService } from './service.service';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ToDoList';
  items = [];
  myForm: FormGroup;
  selectIndex = null;
  valueEidt = '';
  constructor(private list: ServiceService, private fb: FormBuilder) {}
  ngOnInit() {
    this.myForm = this.fb.group({
      content: ['', Validators.required],
      edit: [this.valueEidt, Validators.required],
    });
    this.list.getToDo().onSnapshot((doc) => {
      this.items = [];
      doc.forEach((item) => {
        this.items.unshift({
          content: item.data()['content'],
          id: item.id,
          date: item.data()['date'],
        });
      });
    });
  }
  deleteData(id, content, date) {
    this.list
      .deleteToDo(id)
      .then((res) => {
        this.list.addHistory(content, date);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  editShow(i) {
    this.selectIndex = i;
    this.valueEidt = this.items[i]['content'];
  }
  addElement() {
    let content = this.myForm.value['content'];
    let date = new Date();
    let data = this.items.find((ob) => ob.content === content);
    if (data === undefined) {
      if (content != '') {
        this.list
          .addToDo(content, date)
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
        this.myForm.controls.content.setValue('');
      }
    }
  }
  submitEdit(id) {
    let date = new Date();
    let content = this.myForm.value['edit'];
    this.list.updateToDo(id, content, date);
    this.selectIndex = null;
    this.valueEidt = '';
  }
}
