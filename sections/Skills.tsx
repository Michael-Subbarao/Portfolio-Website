/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router'
import Button from "../components/Button"
const skills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "TypeScript",
    "React",
    "Redux",
    "NextJS",
    "TailwindCSS",
    "NodeJS",
    "Express",
    "PostgreSQL",
    "Jest",
    "Sqlite",
    "Cypress",
    "Knex"
]
const Skills = (href) => {
  const router = useRouter();
  const handleClick = (e: any, href: string | null) => {
    e.preventDefault();

    router.push(href);
  };
  return (
    <section className="h-96 mt-4  lg:mt-8">
      <h3 className="text-lg md:text-4x1 lg:text-7xl font-bold text-center transition ease-in-out">
        Click a Skill to see projects I've worked on with that skill
      </h3>
      <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
        {skills.map((skill, index) => {
          return (
            <div className="w-1/2 md:w-1/4 lg:w-1/5 mb-4 w-[160px] items-center justify-center" key={index} onClick = {(e)=>{handleClick(e,'/projects?skill=' + skill.toLowerCase())}}>
              <div className="bg-gray-200 rounded-lg shadow-lg p-4 h-[120px] flex flex-col items-center justify-center">
                <img
                  className="dark:stroke-white dark:stroke-1"
                  width="60px"
                  src={"/design_assets/icons/" + skill.toLowerCase() + ".svg"}
                  alt={skill + " logo"}
                  title={skill + " logo"}
                  key={index}
                />
                <h3 className="text-2xl dark:text-slate-800 font-bold">{skill}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills