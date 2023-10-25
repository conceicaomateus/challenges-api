import { InMemoryChallengesRepository } from "../../../tests/repositories/in-memory-challenges-repository";
import { InMemoryStudentsRepository } from "../../../tests/repositories/in-memory-students-repository";
import { Challenge } from "../../domain/entities/challenge";
import { Student } from "../../domain/entities/student";
import { CreateChallengeSubmission } from "./create-challenge-submission";

describe("CreateChallengeSubmission", () => {
  it("should be able to create a new challenge submission", async () => {
    const studentsRepository = new InMemoryStudentsRepository();
    const challengesRepository = new InMemoryChallengesRepository();

    const student = Student.create({
      name: "Fake Student",
      email: "fake@example.com",
    });

    const challenge = Challenge.create({
      title: "Fake Challenge",
      instructionsUrl: "https://fake-url.com",
    });

    studentsRepository.students.push(student);
    challengesRepository.challenges.push(challenge);

    const sut = new CreateChallengeSubmission(
      studentsRepository,
      challengesRepository
    );

    const res = await sut.execute({
      studentId: student.id,
      challengeId: challenge.id,
    });

    expect(res).toBeTruthy();
  });
});
