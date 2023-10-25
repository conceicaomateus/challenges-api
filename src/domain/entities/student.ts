import { Entity } from "../../core/domain/Entity";

type StudentProps = {
  name: string;
  email: string;
};

export class Student extends Entity<StudentProps> {
  constructor(props: StudentProps, id?: string) {
    super(props, id);
  }

  get id() {
    return this._id;
  }

  public static create(props: StudentProps, id?: string): Student {
    const student = new Student(props, id);

    return student;
  }
}
