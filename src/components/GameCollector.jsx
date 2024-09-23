import react from 'react';
import Game from './Game';


const GameCollector = () => {
  return (
    <div className="GameCollector">
      <div className='game-card'>
        <Game title='Super Smash Bros Ultimate' genre='Action' pic="src/pictures/smashBros.jpg"
        site="https://www.nintendo.com/us/store/products/super-smash-bros-ultimate-switch/"/>
      </div>
      <div className='game-card'>
       <Game title="Overcooked 2" genre="Casual" pic="src/pictures/overCooked2.jpg"/>
      </div>
      <div className='game-card'>
        <Game title="Sonic Mania" genre="Platformer" pic="src\pictures\SonicMania.jpg"/>
      </div>
      <div className='game-card'>
        <Game title="Mario Kart 8 Deluxe" genre="Racing" pic="src\pictures\MarioKart8Deluxe.jpg"/>
      </div>
      <div className='game-card'>
        <Game title="Legend of Zelda: Echoes of Wisdom" genre="Platformer" pic="src\pictures\LegendofZelda.jpg"/>
      </div>
      <div className='game-card'>
        <Game title="Fortnite" genre="Platformer" pic="src\pictures\Fortnite.jpg"/>
      </div>
      <div className='game-card'>
        <Game title="Grand Theft Auto 5" genre="Platformer" pic="src\pictures\GTAV.png"/>
      </div>
      <div className='game-card'>
        <Game title="God Of War: Ragnarök" genre="Platformer" pic="src\pictures\GOWR.jpg"/>
      </div>
      <div className='game-card'>
        <Game title="Marvel's Spider-Man 2" genre="Action-Adventure" pic="src\pictures\SpiderMan2PS5BoxArt.jpeg"/>
      </div>
      <div className='game-card'>
        <Game title="Sonic X Shadow: Generations" genre="Platformer" pic="src\pictures\SonicXShadow.webp"/>
      </div>
    </div>
  );
}
export default GameCollector;