import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.css']
})
export class InstructionsComponent implements OnInit {
qid;
quize;
  constructor(private _route:ActivatedRoute,private _quizeService:QuizService,private _router:Router) { }

  ngOnInit(): void {
    this.qid =this._route.snapshot.params['qid'];
      this._quizeService.getQuize(this.qid).subscribe((data)=>{
      this.quize = data;

      },
      (error)=>{
        alert("error");

      })
  }
  startQuize(){
    Swal.fire({
      title: 'Do you want to start the quize?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Start',
      denyButtonText: `Don't start`,
      icon: 'info'
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
   this._router.navigate(['/start/' + this.qid]);
   
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
  }
}
