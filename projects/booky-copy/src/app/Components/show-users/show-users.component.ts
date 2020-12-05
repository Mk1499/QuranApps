import { Apollo } from 'apollo-angular';
import { Component, OnInit } from '@angular/core';
import { getUsers } from '../../Queries/getUsers.query';


@Component({
  selector: 'app-show-users',
  templateUrl: './show-users.component.html',
  styleUrls: ['./show-users.component.css']
})
export class ShowUsersComponent implements OnInit {

  loading: boolean = true;
  users: any[];


  constructor(private apollo: Apollo) { }

  ngOnInit(): void {

    this.apollo.watchQuery<any>({
      query: getUsers
    }).valueChanges.subscribe(({ data, loading }) => {
      this.loading = loading;
      this.users = data?.users;
    })
  }

}
