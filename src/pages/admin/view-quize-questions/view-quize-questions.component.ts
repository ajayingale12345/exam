import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { QuestionsService } from 'src/app/services/questions.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-view-quize-questions',
  templateUrl: './view-quize-questions.component.html',
  styleUrls: ['./view-quize-questions.component.css']
})
export class ViewQuizeQuestionsComponent implements OnInit {
  qId;
  qTitle;
  questions: any;
  constructor(private _route: ActivatedRoute, private _qustionsService: QuestionsService, private _snack: MatSnackBar) { }

  ngOnInit(): void {
    this.qId = this._route.snapshot.params['qid']
    this.qTitle = this._route.snapshot.params['title']
    this._qustionsService.getQuestionsOfQuize(this.qId).subscribe((data) => {
      console.log(data);
      this.questions = data;
    })

  }
  deleteQuestion(qid) {
    Swal.fire({
      icon: 'info',
      showCancelButton: true,
      confirmButtonText: 'delete',
      title: 'Are you sure you want to delete '
    }).then((result) => {
      if (result.isConfirmed) {
        this._qustionsService.deleteQuestion(qid).subscribe((data) => {
          this._snack.open("Question Deleted ", '', {
            duration: 200
          })
          this.questions = this.questions.filter((q) => q.quesId != qid)
        },
          (error) => {
            this._snack.open("Error deleting Question", '', {
              duration: 200

            });


          });



      }
    });
  }}