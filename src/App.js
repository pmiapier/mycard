export default function App() {
  return (
    <div className='card'>
      <Avatar />
      <Data />
      <SkillList />
    </div>
  );
}

function Avatar() {
  return <img className='avatar' src='Panalee.jpg' alt='Panalee Pierce' />;
}

function Data() {
  return (
    <div className='data'>
      <h1>My name is Panalee Pierce</h1>
      <p>
        Full Stack web developer and kindergarten assistant teacher at No
        school. When I do not study programming, I like to knit, bake and cook.
        I like to be go hiking as well as camping
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className='skill-list'>
      <Skill mySkill='Java Script' emoji='&#128509;' color='green' />
      <Skill mySkill='React' emoji='&#128512;' color='yellow' />
      <Skill mySkill='Prisma Script' emoji='	&#128517;' color='orange' />
      <Skill mySkill='HTML+CSS' emoji='	&#128517;' color='purple' />
    </div>
  );
}

function Skill(props) {
  return (
    <div className='skill' style={{ backgroundColor: props.color }}>
      <span> {props.mySkill} </span>
      <span>{props.emoji} </span>
    </div>
  );
}
