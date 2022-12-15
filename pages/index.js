import Head from 'next/head';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import {
  AiFillLinkedin,
  AiFillGithub
} from 'react-icons/ai';
import { SiGmail } from 'react-icons/si'; 
import Image from 'next/image';
import devfacu from '../public/dev-ed-wave.png';
import design from '../public/design.png';
import code from '../public/code.png';
import consulting from '../public/consulting.png';
import web1 from '../public/web1.png';
import web2 from '../public/web2.png';
import web3 from '../public/web3.png';
import web4 from '../public/web4.png';
import web5 from '../public/web5.png';
import web6 from '../public/web6.png';
import { useState } from 'react';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Facundo Suarez</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900'>
        <section className='min-h-screen'>
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-xl font-burtons dark:text-gray-400'>DevelopedByFacu</h1>
            <ul className='flex items-center'>
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className='cursor-pointer text-2xl dark:text-white' />
              </li>
              <li>
                <a
                  className='font-burtons bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8'
                  href="https://github.com/FacundoSuarez-46?tab=repositories"
                >
                  My repos
                </a>
              </li>
            </ul>
          </nav>
          <div className='text-center p-10'>
            <h2 className='font-burtons text-5xl py-2 text-teal-600 font-medium md:text-6xl'>Facundo Suarez</h2>
            <h3 className='text-2xl py-2 md:text-3xl dark:text-gray-400'>Junior developer.</h3>
            <p className='text-md mx-auto py-5 leading-8 text-gray-800 max-w-4xl font-Righteous md:text-xl dark:text-gray-300'>My name is Facundo Suarez. I am a junior software developer. I am passionate about technology. I like to learn new skills every day and develop my personal and team work skills.</p>
          </div>
          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
            <a className='hover:text-red-600' href="Facusuarez3201@gmail.com"><SiGmail /></a> 
            <a className='hover:text-blue-700' href="https://www.linkedin.com/in/facundo-suarez-683046210/"><AiFillLinkedin /></a>
            <a className='hover:text-gray-700' href="https://github.com/FacundoSuarez-46"><AiFillGithub /></a> 
          </div>
          <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96'>
            <Image src={devfacu} layout='fill' objectFit='cover' />
          </div>
        </section>

        <section>
          <div>
            <h3 className='font-burtons text-3xl py-1 font-bold dark:text-teal-600'>Services i offer</h3>
            <p className='text-md py-2 leading-8 text-gray-800 font-Righteous dark:text-gray-300'>Lorem ipsum dolor sit, amet <span className='text-teal-500'>consectetur</span> adipisicing elit. Velit, maiores, illum modi qui quas eaque sequi cupiditate incidunt autem in veniam deleniti sint quasi <span className='text-teal-500'>dolore</span> quidem cumque officiis. Maiores, earum? adipisicing elit. Velit, maiores, illum modi qui quas eaque sequi cupiditate incidunt autem in veniam deleniti sint quasiadipisicing elit. Velit, maiores, illum modi qui quas eaque sequi cupiditate incidunt autem in veniam deleniti sint quasi</p>
            <p className='text-md py-2 leading-8 text-gray-800 font-Righteous dark:text-gray-300'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi recusandae similique culpa fuga aliquam a ipsa, reprehenderit dolorum cumque, voluptate nostrum pariatur natus accusamus consequuntur iusto minus cum numquam dolore.</p>
          </div>
          <div className='lg:flex gap-10'>
            <div className='text-center shadow-lg p-10 rounded-xl my-10'>
              <Image className='mx-auto' src={design} width={100} height={100} />
              <h3 className='text-lg font-medium pt-8 pb-2 dark:text-teal-600'>Beautiful designs</h3>
              <p className='py-2 font-Righteous dark:text-gray-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem aspernatur accusamus eveniet consequatur accusantium eos exercitationem tempora est, cumque explicabo repellendus minus officia reiciendis eligendi, laudantium </p>
              <h4 className=' py-4 text-teal-600'>Design tools i use</h4>
              <p className='text-gray-800 py-1 dark:text-gray-600'>Photoshop</p>
              <p className='text-gray-800 py-1 dark:text-gray-600'>Figma</p>
              <p className='text-gray-800 py-1 dark:text-gray-600'>Illustrator</p>
            </div>

            <div className='text-center shadow-lg p-10 rounded-xl my-10'>
              <Image className='mx-auto' src={consulting} width={100} height={100} />
              <h3 className='text-lg font-medium pt-8 pb-2 dark:text-teal-600'>Always active</h3>
              <p className='py-2 font-Righteous dark:text-gray-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem aspernatur accusamus eveniet consequatur accusantium eos exercitationem tempora est, cumque explicabo repellendus minus officia reiciendis eligendi, laudantium </p>
              <h4 className=' py-4 text-teal-600'>About me</h4>
              <p className='text-gray-800 py-1 dark:text-gray-600'>Responsable</p>
              <p className='text-gray-800 py-1 dark:text-gray-600'>Active</p>
              <p className='text-gray-800 py-1 dark:text-gray-600'>Easy going</p>
            </div>

            <div className='text-center shadow-lg p-10 rounded-xl my-10'>
              <Image className='mx-auto' src={code} width={100} height={100} />
              <h3 className='text-lg font-medium pt-8 pb-2 dark:text-teal-600'>Love coding</h3>
              <p className='py-2 font-Righteous dark:text-gray-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem aspernatur accusamus eveniet consequatur accusantium eos exercitationem tempora est, cumque explicabo repellendus minus officia reiciendis eligendi, laudantium </p>
              <h4 className=' py-4 text-teal-600'>Technologies i use</h4>
              <p className='text-gray-800 py-1 dark:text-gray-600'>ReactJS</p>
              <p className='text-gray-800 py-1 dark:text-gray-600'>Tailwind</p>
              <p className='text-gray-800 py-1 dark:text-gray-600'>NodeJS</p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className='font-burtons text-3xl py-1 font-bold dark:text-teal-600'>Portfolio</h3>
            <p className='text-md py-2 leading-8 text-gray-800 font-Righteous dark:text-gray-300'>This is my <span className='text-teal-500'>portfolio</span> here i share with you all my projects where i was involved, personal ones, and also team <span className='text-teal-500'>projects</span> all of them can be downloaded in mi personal github</p>
            <p className='text-md py-2 leading-8 text-gray-800 font-Righteous dark:text-gray-300'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi recusandae similique culpa fuga aliquam a ipsa, reprehenderit dolorum cumque, voluptate nostrum pariatur natus accusamus consequuntur iusto minus cum numquam dolore.</p>
          </div>
          <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
            <div className='basis-1/3 flex-1'>
              <Image src={web1}
                className='rounded-lg object-cover'
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={web2}
                className='rounded-lg object-cover'
                width={"100%"}
                height={"100%"}
                layout="responsive" />
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={web3}
                className='rounded-lg object-cover'
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={web4}
                className='rounded-lg object-cover'
                width={"100%"}
                height={"100%"}
                layout="responsive"

              />
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={web5}
                className='rounded-lg object-cover'
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={web6}
                className='rounded-lg object-cover'
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
