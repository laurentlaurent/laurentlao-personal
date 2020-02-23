import { Component, OnInit } from '@angular/core';
import {WorkExperience} from '../../interface-types/work-experience';
import {WORK_EXPERIENCE} from '../../content/WorkExperience/WorkExperience.content';

@Component({
  selector: 'app-workexperience-viewer',
  templateUrl: './workexperience-viewer.component.html',
  styleUrls: ['./workexperience-viewer.component.scss']
})
export class WorkexperienceViewerComponent implements OnInit {

  workExperiences: WorkExperience[] = WORK_EXPERIENCE;

  constructor() { }

  ngOnInit() {
  }

}
