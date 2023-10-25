import { Entity } from "../../core/domain/Entity";

type ChallengeProps = {
  title: string;
  instructionsUrl: string;
};

export class Challenge extends Entity<ChallengeProps> {
  constructor(props: ChallengeProps, id?: string) {
    super(props, id);
  }

  get id() {
    return this._id;
  }

  public static create(props: ChallengeProps, id?: string): Challenge {
    const challenge = new Challenge(props, id);

    return challenge;
  }
}
