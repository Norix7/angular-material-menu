import { Component } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";

/**
 * @title Basic menu
 */
@Component({
  selector: "menu-overview-example",
  templateUrl: "menu-overview-example.html"
})
export class MenuOverviewExample {
  constructor(private snackBar: MatSnackBar) {}

  
  item(num: number) {
    switch (num) {
      case 1:
        this.snackBar.open("item1が押されました", "", { duration: 2000 });
        break;
      case 2:
        this.snackBar.open("item2が押されました", "", { duration: 2000 });
        break;
      default:
        this.snackBar.open("処理が存在しないボタンです", "", {
          duration: 2000
        });
    }
  }
}

/**  Copyright 2020 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
