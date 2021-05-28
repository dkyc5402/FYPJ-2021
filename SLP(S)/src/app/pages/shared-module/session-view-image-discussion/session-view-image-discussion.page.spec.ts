import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SessionViewImageDiscussionPage } from './session-view-image-discussion.page';

describe('SessionViewImageDiscussionPage', () => {
  let component: SessionViewImageDiscussionPage;
  let fixture: ComponentFixture<SessionViewImageDiscussionPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionViewImageDiscussionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SessionViewImageDiscussionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
