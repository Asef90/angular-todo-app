import { Expose } from 'class-transformer';

export class Todo {
  id: number;
  text: string;

  @Expose({ name: 'is_completed' })
  isCompleted: boolean;

  @Expose({ name: 'project_id' })
  projectId: number;
}
