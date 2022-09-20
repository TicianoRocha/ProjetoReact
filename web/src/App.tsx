import { MagnifyingGlassPlus } from 'phosphor-react'

import './style/main.css';

import logoImg from './assets/logo-nlw-esports.svg';

function App() {
  return(
    <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20'>
      <img src={logoImg} alt=""/>

      <h1 className="text-6xl text-white font-black mt-20">
        Seu <span className="text-transparent bg-nlw-gradient bg-clip-text">duo</span> está aqui.
      </h1>

      <div className="grid grid-cols-4 gap-6 m-16">
          <a className="relative rounded-lg overflow-hidden" target="_blank" href="https://www.twitch.tv/directory/game/Teamfight%20Tactics"> 
            <img src="https://static-cdn.jtvnw.net/ttv-boxart/513143-188x250.jpg"/>

            <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
              <strong className="text-white font-bold block">Teamfight Tactics</strong>
              <span className="text-zinc-300 text-sm block">4 ads</span>
            </div>
          </a>

          <a className="relative rounded-lg overflow-hidden" target="_blank" href="https://www.twitch.tv/directory/game/League%20of%20Legends"> 
          <img src="https://static-cdn.jtvnw.net/ttv-boxart/21779-188x250.jpg"/>

            <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
              <strong className="text-white font-bold block">League of Legends</strong>
              <span className="text-zinc-300 text-sm block">4 ads</span>
            </div>
          </a>

          <a className="relative rounded-lg overflow-hidden" target="_blank" href="https://www.twitch.tv/directory/game/Lost%20Ark"> 
          <img src="https://static-cdn.jtvnw.net/ttv-boxart/490100-188x250.jpg"/>

            <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
              <strong className="text-white font-bold block">Lost Ark</strong>
              <span className="text-zinc-300 text-sm block">4 ads</span>
            </div>
          </a>

          <a className="relative rounded-lg overflow-hidden" target="_blank" href="https://www.twitch.tv/directory/game/Counter-Strike%3A%20Global%20Offensive"> 
          <img src="https://static-cdn.jtvnw.net/ttv-boxart/32399_IGDB-188x250.jpg"/>

            <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
              <strong className="text-white font-bold block">Counter-Strike</strong>
              <span className="text-zinc-300 text-sm block">4 ads</span>
            </div>
          </a>
        </div>

      <div className="pt-1 bg-nlw-gradient self-stretch rounded-lg overflow-hidden">
        <div className="bg-[#2A2634] px-8 py-6 flex justify-between items-center">
          <div>
            <strong className="text-2xl text-white font-black block">Não encontrou seu duo?</strong>
            <span className="text-zinc-400 block">Publique um anúncio para encontrar novos players!</span>
          </div>

          <button className="py-3 px-4 bg-violet-500 hover:bg-violet-600 text-white rounded flex items-center gap-3">
            <MagnifyingGlassPlus size={24}/>
            Publicar anúncio
          </button>
        </div>
      </div>


    </div>


  )
}

export default App
