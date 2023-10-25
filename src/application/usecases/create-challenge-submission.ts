import { Submission } from "../../domain/entities/submission";
import { ChallengesRepository } from "../repositories/ChallengesRepository";
import { StudentsRepository } from "../repositories/StudentsRepository";

type CreateChallengeSubmissionRequest = {
  studentId: string;
  challengeId: string;
};

export class CreateChallengeSubmission {
  constructor(
    private readonly studentsRepository: StudentsRepository,
    private readonly challengesRepository: ChallengesRepository
  ) {}

  public async execute({
    challengeId,
    studentId,
  }: CreateChallengeSubmissionRequest) {
    const student = await this.studentsRepository.findById(studentId);

    if (!student) {
      throw new Error("Student not found");
    }

    const challenge = await this.challengesRepository.findById(challengeId);

    if (!challenge) {
      throw new Error("Challenge not found");
    }

    const submission = Submission.create({
      challengeId,
      studentId,
    });

    return submission;
  }
}
