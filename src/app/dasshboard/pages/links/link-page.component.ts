import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsUtilService } from '../../../shared/services/forms-util.service';
import { ILink } from '../../interfaces/i-link';
import { LinkStorageService } from '../../services/link.storage';
import { LinkService } from '../../services/link.service';

@Component({
  selector: 'app-page-login',
  templateUrl: './link-page.component.html',
  styleUrls: [],
})
export class LinkPageComponent implements OnInit {
  public linksForm: FormGroup;
  public requestIsLoading: boolean = false;
  public links: Array<ILink> = [];

  constructor(
    private fb: FormBuilder,
    public formUtils: FormsUtilService,
    private linkStorageService: LinkStorageService,
    private linkService: LinkService
  ) {
    this.linksForm = this.fb.group({
      url: ['', [Validators.required]],
      name: ['', Validators.required],
    });
    this.initDataLinks();
  }

  ngOnInit() {
    this.linkService.list().subscribe();
  }

  private initDataLinks() {
    this.linkStorageService.getLinks().subscribe((links) => {
      this.links = links;
    });
  }

  public onSubmit() {
    if (!this.linksForm.invalid) {
      this.requestIsLoading = true;
      console.log(this.linksForm.value);
      this.linkService.create(this.linksForm.value).subscribe((responseCreated) => {
        console.log(responseCreated, 'responseCreated');
        this.requestIsLoading = false;
        this.links.push(responseCreated);
      });
    }
  }

  public remove(link: ILink) {
    this.linkService.delete(link.id).subscribe((responseDeleted) => {
      const newDataLinks = this.links.filter((link) => responseDeleted.id !== link.id);
      this.links = newDataLinks;
    });
  }
}
