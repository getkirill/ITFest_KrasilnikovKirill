import { useState } from 'react'
import { Carousel } from 'react-responsive-carousel'
import './App.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Button from './Button'
import { ModCard } from './ModCard'
import { curseForgeMinecraftMod as curseForge } from './utils';

function App() {
    return (
        <>
            <div className="header_placeholder"></div>
            <header>
                <a href="#features">Особенности</a>
                <a href="#mods">Модификации</a>
                <a href="#gallery">Галлерея</a>
                <a href="#rating">Рейтинг</a>
                <a href="#contacts">Контакты</a>
            </header>
            <main>
                <section className='no_padding'> {/* Info */}
                    <div className="heading">
                        <h1 className='heading_caption'>
                            Первый сервер Minecraft для технического творчества при
                            поддержке Федерального центра дополнительного образования
                        </h1>
                        <div className="heading_bg_cover"></div>
                        <video className='heading_bg' src="mc_footage.mp4" controls={false} muted autoPlay loop></video>
                    </div>
                    <div id='features' className="padding">
                        <h2>Особенности сервера</h2>
                        <ol type='1'>
                            <li>
                                Карта игровой зоны соответствует карте территорий Российской
                                Федерации и включает все регионы Страны. Каждый игровой
                                регион будет содержать определенный тип ресурсов, а
                                участникам игрового сервера будет необходимо налаживать
                                торговые отношения и выстраивать договоренности для
                                взаимовыгодного сотрудничества
                            </li>
                            <li>
                                Игровые модификации добавляют в игру новые технологические
                                элементы и позволяют участникам находить новые типы
                                ресурсов, необходимые для развития важных отраслей
                                современной жизни (энергетика, космонавтика, биологические
                                виды новых сельскохозяйственных культур и многое другое)
                            </li>
                            <li>
                                Команда организаторов систематически проводит
                                образовательные и развлекательные события (Ивенты): кейскарты, jumping пазлы, королевские битвы, командные
                                головоломки и многое другое
                            </li>
                        </ol>
                        <div className="attention">
                            <p>
                                В 2023 году сервер откроет свои двери для всех желающих, но уже
                                сейчас самые преданные любители кубической песочницы могут
                                подать заявку на beta-тестирование. Торопитесь!
                            </p>
                        </div>
                    </div>
                </section>
                <section id="mods"> {/* Mods */}
                    <h2>Модификации</h2>
                    <div className="flex">
                        <ModCard
                            modImage={'https://minecraft-tutos.com/wp-content/uploads/2022/02/assembly-create-mod-minecraft.jpg'}
                            modName={'Create'}
                            modDescription={'Добавляет в игру механизмы, такие как конвейеры, и способы автоматизации.'}
                            downloadLink={curseForge('create', 3737418)}
                            modVersion={'0.4.1'}
                            mcVersion={'1.18.x'}
                            guideLink={'javascript:alert("Разработчики, пожалуйста, вставьте ссылку на инструкцию по установке!")'}
                        />
                        <ModCard
                            modImage={'https://i0.wp.com/minecraftmod.org/wp-content/uploads/2017/10/9.-Applied-Energistics-2-Mod-2.png?fit=841%2C467&ssl=1'}
                            modName={'Applied Energistics 2'}
                            modDescription={'Улучшенное хранилище предметов, с почти неограниченным пространством.'}
                            downloadLink={curseForge('applied-energistics-2', 3615156)}
                            modVersion={'10.0.1'}
                            mcVersion={'1.18.x'}
                            guideLink={'javascript:alert("Разработчики, пожалуйста, вставьте ссылку на инструкцию по установке!")'}
                        />
                        <ModCard
                            modImage={'http://i.imgur.com/NCRED.png'}
                            modName={'Mouse Tweaks'}
                            modDescription={'Горячие клавиши для более приятного управления.'}
                            downloadLink={curseForge('mouse-tweaks', 3601896)}
                            modVersion={'[Fabric] 2.22'}
                            mcVersion={'1.18.x'}
                            guideLink={'javascript:alert("Разработчики, пожалуйста, вставьте ссылку на инструкцию по установке!")'}
                        />
                        <ModCard
                            modImage={'https://i.imgur.com/YTuxxOL.png'}
                            modName={'Just Enough Items'}
                            modDescription={'Номер 1 мод для любого модпака! Добавляет просмотр способов крафта предметов.'}
                            downloadLink={curseForge('jei', 3601896)}
                            modVersion={'9.5.5'}
                            mcVersion={'1.18.x'}
                            guideLink={'javascript:alert("Разработчики, пожалуйста, вставьте ссылку на инструкцию по установке!")'}
                        />
                        <ModCard
                            modImage={'https://camo.githubusercontent.com/a74d56cac12573e9a3527021d0d8d0489daf90c344708d3725fbcdc43d40b032/68747470733a2f2f692e696d6775722e636f6d2f614866315178512e676966'}
                            modName={'AppleSkin'}
                            modDescription={'Добавляет шкале голода насыщеность, истощение, а также индикатор сытости к пище'}
                            downloadLink={curseForge('jei', 3601896)}
                            modVersion={'2.4.0'}
                            mcVersion={'1.18.x'}
                            guideLink={'javascript:alert("Разработчики, пожалуйста, вставьте ссылку на инструкцию по установке!")'}
                        />
                    </div>
                </section>
                <section id="gallery"> {/* Gallery */}
                    <h2>Галлерея</h2>
                    <Carousel showStatus={false} infiniteLoop={true} autoPlay interval={3000} transitionTime={500}>
                        <div>
                            <img src="https://assets2.rockpapershotgun.com/minecraft-medieval-castle.jpg/BROK/resize/1920x1920%3E/format/jpg/quality/80/minecraft-medieval-castle.jpg" alt="Castle" />
                        </div>
                        <div>
                            <img src="https://preview.redd.it/43lodnt9vnj51.png?width=1600&format=png&auto=webp&s=2ed6e8cc0b615c346b1d88f58f3dcb1aaf4eea8c" alt="" />
                        </div>
                        <div>
                            <img src="https://cdn.exputer.com/wp-content/uploads/2021/10/Minecraft-Castle-Ideas-3.png" alt="" />
                        </div>
                        <div>
                            <img src="https://cdn.mos.cms.futurecdn.net/qAkSrfvdpWmRNiFWw4CC9T-1200-80.jpg" alt="" />
                        </div>
                        <div>
                            <img src="https://xforgeassets002.xboxlive.com/pf-title-b63a0803d3653643-20ca2/70eb96d0-9355-4252-ad46-35518182c8b5/NetheriteCastle_Thumbnail_0.jpg" alt="" />
                        </div>
                    </Carousel>
                </section>
                <section id="rating"> {/* Rating (or leaderboard) */}
                    <h2>Рейтинг</h2>
                    <iframe referrerPolicy="no-referrer-when-downgrade"
                        height="600px" width="100%" style={{ border: 'none' }}
                        src="https://view-awesome-table.com/-MzoEn9T56hH-3NIavai/view"></iframe>
                </section>
                <section id="contacts"> {/* Contacts */}
                    <h2>Контакты</h2>
                    <p>
                        Команда-организатор сервера: Федеральное государственное
                        бюджетное образовательное учреждение дополнительного образования
                        «Федеральный центр дополнительного образования и организации
                        отдыха и оздоровления детей» (ФГБОУ ДО ФЦДО)
                    </p>
                    <div className="flex flex-nowrap">
                        <Button href="#" full>Запись на бета-тест</Button>
                    </div>
                    <div className="flex flex-nowrap">
                        <Button href="#" color='vk' full>VK</Button>
                        <Button href="#" color='telegram' full>Telegram</Button>
                        <Button href="#" color='discord' full>Discord</Button>
                    </div>
                </section>
            </main>
            <footer>
                Вебсайт был сделан by <a href='https://kirill.krasilnikoff.ru/'>Kraskaska</a> для конкурса IT-FEST 2022 IT-BASIC.
            </footer>
        </>
    )
}

export default App
