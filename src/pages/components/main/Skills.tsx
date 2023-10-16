import styled from "styled-components";
import Text from "../../../components/Text";
import SkillTag from "./SkillTag";

const Skills = () => {
  const skills: string[] = [
    "TypeScript",
    "Python",
    "C++",
    "Rust",
    "Golang",
    "Java",
    "SQL",
    "HTML/CSS",
  ];

  const technologies: string[] = [
    "Docker",
    "AWS",
    "Kuberenetes",
    "PostgreSQL",
    "NoSQL",
    "React",
    "Node.js",
    "Spring Boot",
    "Kafka",
    "REST",
    "GraphQL",
    "Linux",
    "Bash",
    "Git",
    "NestJS",
  ];

  // const currentInterests = [
  //   "• Microservice architectures.",
  //   "• Event-driven architectures.",
  //   "• Learning Rust, Go, and Kafka.",
  // ];

  const hobbies: string[] = [
    "Exercising",
    "Basketball",
    "Competitive programming",
    "Nature",
    "Golf",
    "Chess",
  ];

  return (
    <>
      <SkillsContainer>
        <Text type="h2">Programming skills 👨‍💻</Text>
        <br />
        <Text type="psmall" style={{ paddingTop: ".8rem" }}>
          I like to think I am language agnostic, but listed here are some of
          the languages I have experience with.
        </Text>
        <SkillsContent>
          {skills.map((skill) => (
            <SkillTag name={skill} />
          ))}
        </SkillsContent>
      </SkillsContainer>
      <SkillsContainer>
        <Text type="h2">Other technology I am familiar with</Text>
        <SkillsContent>
          {technologies.map((skill) => (
            <SkillTag name={skill} />
          ))}
        </SkillsContent>
      </SkillsContainer>
      {/* <SkillsContainer>
        <Text type="h2">What I am currently interested in</Text>
        <ListContent>
          {currentInterests.map((interest) => (
            <Text type="psmall">{interest}</Text>
          ))}
        </ListContent>
      </SkillsContainer> */}
      <SkillsContainer>
        <Text type="h2">Some of my hobbies🚶‍♂️</Text>
        <SkillsContent>
          {hobbies.map((hobby) => (
            <SkillTag name={hobby} />
          ))}
        </SkillsContent>
      </SkillsContainer>
    </>
  );
};

export default Skills;

const SkillsContainer = styled.div`
  margin-bottom: 2.5rem;
`;
const SkillsContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0.8rem 0;
  > * {
    margin-right: 0.6rem;
    margin-bottom: 0.6rem;
  }
`;
// const ListContent = styled.div`
//   display: flex;
//   flex-direction: column;
//   flex-wrap: wrap;
//   margin: 0.4rem 0.6rem;
// `;
