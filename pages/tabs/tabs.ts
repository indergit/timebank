import { Component } from '@angular/core';

import { ContactPage } from '../contact/contact';
import { EarnPage } from '../earn/earn';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = EarnPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
