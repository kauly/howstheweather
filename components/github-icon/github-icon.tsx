import Image from "next/image";
import gitIcon from "./github.svg";

function GithubIcon() {
  return (
    <a
      href="https://github.com/kauly"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image src={gitIcon} alt="Link to my github" width={40} height={40} />
    </a>
  );
}

export { GithubIcon };
