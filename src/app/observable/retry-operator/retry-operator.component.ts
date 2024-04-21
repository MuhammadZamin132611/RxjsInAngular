import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';
import { HttpClient } from '@angular/common/http';
import { delay, retry, retryWhen, scan } from 'rxjs';
@Component({
  selector: 'app-retry-operator',
  templateUrl: './retry-operator.component.html',
  styleUrls: ['./retry-operator.component.scss']
})
export class RetryOperatorComponent implements OnInit {

  constructor(private design: DesignUtilityService, private http: HttpClient){}

  ngOnInit(): void {
  
  }

  person:any;
  fetching:boolean = false;
  status = 'No Data'
  fetchDetails(){
    this.fetching = true;
    this.status = 'Fetching Data...'
    this.http.get('http://localhost:3000/user').pipe(
      // retry(4)
      retryWhen(err => err.pipe(
        delay(3000),
        scan((retryCount)=>{
          if(retryCount >= 5){
            throw err;
          }else{
            retryCount = retryCount + 1
            console.log(retryCount)
            this.status = 'Retrying Attempt #' + retryCount
            return retryCount;
          }
        },0)
      ))
    )
    .subscribe(res=>{
      console.log(res)
      this.person = res
      this.status = 'Data Fetched'
      this.fetching = false;
    },(err)=>{
      console.log(err)
      this.status = 'Problem Fetching Data'
      this.fetching = false;
    })
  }
}
