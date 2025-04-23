function toggleMenu() {
    const navMenu = document.getElementById("navMenu");
    navMenu.classList.toggle("active");
}

function toggleDropdown(event) {
    event.preventDefault();

    // Close any other open dropdowns
    const allDropdowns = document.querySelectorAll('.language-dropdown');
    allDropdowns.forEach(dropdown => {
        if (dropdown !== event.target.closest('.language-dropdown')) {
            dropdown.classList.remove('open');
        }
    });

    // Toggle current dropdown
    const dropdown = event.target.closest('.language-dropdown');
    dropdown.classList.toggle('open');
}

document.addEventListener('click', function(event) {
    const isClickInside = event.target.closest('.language-dropdown');
    if (!isClickInside) {
        document.querySelectorAll('.language-dropdown').forEach(drop => drop.classList.remove('open'));
    }
});

function setLanguage(language) {
    localStorage.setItem("language", language);

    // Highlight selected language
    const allLangOptions = document.querySelectorAll('.language-options a');
    allLangOptions.forEach(link => link.classList.remove('active-lang'));
    const selectedLink = Array.from(allLangOptions).find(link =>
        link.textContent.toLowerCase().includes(language === 'az' ? 'azer' : 'english')
    );
    if (selectedLink) selectedLink.classList.add('active-lang');

    const translations = {
        nav: {
            en: {
                home: "Home",
                about: "About Us",
                contact: "Contact",
                language: "Language"
            },
            az: {
                home: "Ana Səhifə",
                about: "Haqqımızda",
                contact: "Əlaqə",
                language: "Dil"
            }
        },
        about: {
            en: {
                title: "Meet Our Team",
                maryam: {
                    name: "Maryam Valiyeva",
                    role: "Student of ADA University<br>Bachelor of Arts in Public Affairs"
                },
                zahra: {
                    name: "Zahra Asgarova",
                    role: "Student of ADA University<br>Bachelor of Science in Computer Engineering"
                },
                zhala: {
                    name: "Zhala Rasulova",
                    role: "Student of ADA University<br>Bachelor of Science in Finance"
                },
                aisha: {
                    name: "Aisha Yagubova",
                    role: "Student of ADA University<br>Bachelor of Science in Finance"
                },
                fuad: {
                    name: "Fuad Abbaszada",
                    role: "Student of ADA University<br>Bachelor of Science in Information Technologies"
                },
                jeyhun: {
                    name: "Jeyhun Mirzayev",
                    role: "Student of ADA University<br>Bachelor of Science in Economics"
                },
                nihad: {
                    name: "Nihad Ganbarov",
                    role: "Student of ADA University<br>Bachelor of Science in Finance"
                }
            },
            az: {
                title: "Komandamızla Tanış Olun",
                maryam: {
                    name: "Məryəm Vəliyeva",
                    role: "ADA Universiteti Tələbəsi<br>İctimai İşlər üzrə Bakalavr"
                },
                zahra: {
                    name: "Zəhra Əsgərova",
                    role: "ADA Universiteti Tələbəsi<br>Kompüter Mühəndisliyi üzrə Bakalavr"
                },
                zhala: {
                    name: "Zhala Rəsulova",
                    role: "ADA Universiteti Tələbəsi<br>Maliyyə üzrə Bakalavr"
                },
                aisha: {
                    name: "Aişə Yaqubova",
                    role: "ADA Universiteti Tələbəsi<br>Maliyyə üzrə Bakalavr"
                },
                fuad: {
                    name: "Fuad Abbaszadə",
                    role: "ADA Universiteti Tələbəsi<br>İnformasiya Texnologiyaları üzrə Bakalavr"
                },
                jeyhun: {
                    name: "Ceyhun Mirzəyev",
                    role: "ADA Universiteti Tələbəsi<br>İqtisadiyyat üzrə Bakalavr"
                },
                nihad: {
                    name: "Nihad Qəmbərov",
                    role: "ADA Universiteti Tələbəsi<br>Maliyyə üzrə Bakalavr"
                }
            }
        },
        
        sdg1: {
            en: {
                intro: "Poverty remains one of the most pressing global challenges. While progress has been made, millions still struggle to meet basic needs and live with dignity. Ending poverty means more than increasing income—it requires access to education, healthcare, social protection, and equal opportunities. By creating inclusive systems and supporting the most vulnerable, we can build a future where no one is left behind.",
                title: "No Poverty",
                description: "Sustainable Development Goal 1 (SDG 1) aims to end poverty in all its forms everywhere. While global poverty rates have declined over the years, millions of people still live in extreme poverty, struggling to meet basic needs such as food, shelter, and healthcare. SDG 1 targets include eradicating extreme poverty, ensuring access to social protection systems, and building resilience to economic, social, and environmental shocks. Poverty is not just about lack of income—it’s also about exclusion, inequality, and vulnerability. Achieving this goal means investing in education, job opportunities, and fair economic growth. It also requires coordinated action from governments, businesses, and communities to create inclusive systems that leave no one behind. Ending poverty is the first step toward a more equitable and sustainable world."
            },
            az: {
                intro: "Yoxsulluq bu gün də ən ciddi qlobal problemlərdən biridir. İrəliləyişlərə baxmayaraq, milyonlarla insan hələ də əsas ehtiyaclarını ödəmək və ləyaqətli həyat yaşamaq uğrunda mübarizə aparır. Yoxsulluğun aradan qaldırılması təkcə gəlirlərin artırılması deyil, həm də təhsil, səhiyyə, sosial müdafiə və bərabər imkanlara çıxışın təmin olunması deməkdir. Ən həssas təbəqələri dəstəkləməklə və inklüziv sistemlər yaratmaqla, heç kəsin geridə qalmadığı bir gələcək qurmaq mümkündür.",
                title: "Yoxsulluğa Son",
                description: "Dayanıqlı İnkişaf Məqsədi 1 (SDG 1) yoxsulluğun bütün formalarına hər yerdə son qoymağı qarşısına məqsəd qoyur. Qlobal yoxsulluq səviyyəsi illər ərzində azalsa da, milyonlarla insan hələ də ekstremal yoxsulluq şəraitində yaşayır və qida, yaşayış yeri, tibbi yardım kimi əsas ehtiyaclarını qarşılamada çətinlik çəkir. SDG 1-in hədəfləri arasında ekstremal yoxsulluğun tamamilə aradan qaldırılması, sosial müdafiə sistemlərinə çıxışın təmin olunması və iqtisadi, sosial və ekoloji sarsıntılara qarşı dayanıqlığın gücləndirilməsi yer alır. Yoxsulluq yalnız gəlirin olmaması deyil, eyni zamanda bərabərsizlik, təcridolunma və zəiflik deməkdir. Bu məqsədə çatmaq üçün təhsilə, məşğulluq imkanlarına və ədalətli iqtisadi inkişafa sərmayə yatırmaq vacibdir. Həmçinin, hökumətlər, bizneslər və cəmiyyətlər arasında koordinasiyalı fəaliyyətlər aparılmalı və heç kəsin geridə qalmadığı inklüziv sistemlər qurulmalıdır. Yoxsulluğun aradan qaldırılması daha bərabər və dayanıqlı bir dünyanın qurulmasına doğru ilk addımdır."
            }
        },
        sdg2: {
            en: {
                intro: "Hunger and malnutrition continue to affect millions of people worldwide, undermining health, development, and well-being. Ending hunger is not just about providing food—it’s about ensuring access to safe, nutritious, and sufficient food for everyone. Achieving zero hunger requires resilient food systems, support for small-scale farmers, and sustainable agricultural practices that protect both people and the planet. By tackling food insecurity and promoting nutrition, we can build healthier, stronger, and more resilient communities.",
                title: "Zero Hunger",
                description: "Sustainable Development Goal 2 (SDG 2) seeks to end hunger, achieve food security, improve nutrition, and promote sustainable agriculture. Despite progress, hunger and malnutrition still affect millions of people, particularly in developing countries. SDG 2 targets include ensuring access to safe, nutritious food for all, ending all forms of malnutrition, and supporting small-scale farmers with resources and fair markets. It also emphasizes the importance of sustainable food production systems and resilient agricultural practices that adapt to climate change. Achieving zero hunger means more than just feeding people—it’s about empowering communities, protecting the environment, and building strong, local food systems. A well-nourished world is healthier, more productive, and better equipped to face future challenges."
            },
            az: {
                intro: "Aclıq və qeyri-kafi qidalanma bu gün də milyonlarla insanın sağlamlığına, inkişafına və rifahına ciddi təsir göstərir. Aclığa son qoymaq təkcə qida təminatı deyil, hər kəsin təhlükəsiz, qidalandırıcı və yetərli qidaya çıxışını təmin etməkdir. Bu məqsədə çatmaq üçün dayanıqlı ərzaq sistemləri qurmaq, kiçik təsərrüfat sahiblərini dəstəkləmək və ətraf mühiti qoruyan davamlı kənd təsərrüfatı metodlarını tətbiq etmək vacibdir. Qida təhlükəsizliyini təmin etməklə və düzgün qidalanmanı təşviq etməklə sağlam, güclü və davamlı icmalar qurmaq mümkündür.",
                title: "Aclığa Son",
                description: "Dayanıqlı İnkişaf Məqsədi 2 (SDG 2) aclığın aradan qaldırılması, ərzaq təhlükəsizliyinin təmin olunması, düzgün qidalanmanın yaxşılaşdırılması və davamlı kənd təsərrüfatının təşviqi məqsədini daşıyır. Əldə olunan irəliləyişlərə baxmayaraq, aclıq və qidalanma çatışmazlığı xüsusilə inkişaf etməkdə olan ölkələrdə milyonlarla insanı təsirləndirir. SDG 2-nin hədəfləri arasında hər kəs üçün təhlükəsiz və qidalandırıcı ərzağa çıxışın təmin olunması, bütün növ qidalanma problemlərinin aradan qaldırılması və kiçik fermerlərin resurslara və ədalətli bazarlara çıxışının dəstəklənməsi yer alır. Bu məqsəd həm də iqlim dəyişikliklərinə uyğunlaşa bilən davamlı ərzaq istehsalı sistemlərinin və kənd təsərrüfatı təcrübələrinin əhəmiyyətini vurğulayır. Aclığa son qoymaq sadəcə insanları doyurmaq deyil – icmaları gücləndirmək, ətraf mühiti qorumaq və yerli ərzaq sistemlərini möhkəmləndirmək deməkdir. Yaxşı qidalanmış bir dünya daha sağlam, məhsuldar və gələcək çağırışlara daha hazırlıqlı olar."
            }
        },
        sdg3: {
            en: {
                intro: "Ensuring healthy lives and promoting well-being for all is fundamental to sustainable development. Health challenges such as pandemics, maternal and child mortality, and mental health disorders continue to strain communities and systems. Universal access to quality healthcare, essential medicines, and preventive services is crucial. Building resilient health systems and promoting mental and physical well-being are key steps toward achieving equity and enabling individuals to thrive in all aspects of life.",
                title: "Good Health and Well-being",
                description: "Sustainable Development Goal 3 (SDG 3) aims to ensure healthy lives and promote well-being for all at all ages. While significant progress has been made in reducing child mortality and fighting diseases, challenges like healthcare access, pandemics, and mental health issues persist. SDG 3 targets include reducing maternal and child mortality, combating epidemics, ensuring universal health coverage, and promoting mental health and well-being. It also stresses the importance of access to essential medicines, vaccines, and healthcare services. Good health is foundational to personal and societal development. By investing in strong health systems, education, and preventive care, communities can thrive and individuals can reach their full potential."
            },
            az: {
                intro: "Hamı üçün sağlam həyatın təmin edilməsi və rifahın təşviqi dayanıqlı inkişafın əsas şərtidir. Pandemiyalar, ana və uşaq ölümü, həmçinin psixi sağlamlıqla bağlı problemlər cəmiyyətləri və səhiyyə sistemlərini hələ də sınağa çəkir. Keyfiyyətli səhiyyə xidmətlərinə, vacib dərmanlara və profilaktik tədbirlərə universal çıxış həyati əhəmiyyət daşıyır. Davamlı səhiyyə sistemlərinin qurulması və fiziki-psixi rifahın təşviqi bərabərliyi təmin etməyə və insanların hərtərəfli inkişafına imkan yaradan əsas addımlardandır.",
                title: "Sağlam Həyat və Rifah",
                description: "Dayanıqlı İnkişaf Məqsədi 3 (SDG 3) bütün yaş qrupları üçün sağlam həyatın təmin edilməsini və rifahın təşviqini hədəfləyir. Bu məqsəd ana və uşaq ölümü hallarının azaldılması, yoluxucu xəstəliklərin epidemiyalarına son qoyulması və psixi sağlamlıqla bağlı problemlərin həlli kimi mühüm prioritetləri əhatə edir. SDG 3 həmçinin universal səhiyyə təminatını, vacib dərman və peyvəndlərə çıxışı və güclü səhiyyə maliyyələşdirilməsi və insan resurslarını vurğulayır. Məqsəd profilaktik tibbi yardımın, sağlamlıq maarifləndirilməsinin və vaxtında müdaxilənin vacibliyini xüsusi qeyd edir – xüsusilə də həssas əhali qrupları üçün. Güclü səhiyyə sistemi təkcə həyatları xilas etmir, həm də insanlara cəmiyyətə mənalı töhfə verməyə imkan yaradır. Sağlamlıq nəticələrinin yaxşılaşdırılması və səhiyyə xidmətlərinə çıxışdakı bərabərsizliyin azaldılması SDG 3-ün daha dayanıqlı, firavan və inklüziv cəmiyyətlər üçün möhkəm təməl yaratmasına şərait yaradır."
            }
        },
        sdg4: {
            en: {
                intro: "Inclusive and equitable quality education is essential for sustainable development. Around the world, many children and adults still lack access to basic education, limiting their potential and opportunities. Ensuring free, inclusive, and high-quality learning environments helps break the cycle of poverty and supports social mobility. By promoting lifelong learning, improving literacy and skills, and addressing inequality, we can empower individuals and build stronger, more just societies.",
                title: "Quality Education",
                description: "Sustainable Development Goal 4 (SDG 4) seeks to ensure inclusive and equitable quality education and promote lifelong learning opportunities for all. Education is a powerful tool for breaking the cycle of poverty and creating opportunities. SDG 4 targets include universal access to free primary and secondary education, equal access to affordable technical, vocational, and higher education, and improvement in literacy and numeracy skills. It also focuses on eliminating gender disparities and promoting education for sustainable development. Quality education fosters innovation, civic engagement, and economic growth. By empowering learners of all ages, this goal helps build resilient, inclusive societies where everyone has the tools to succeed."
            },
            az: {
                intro: "Əhatəli və bərabər imkanlara əsaslanan keyfiyyətli təhsil dayanıqlı inkişaf üçün vacibdir. Dünyanın bir çox yerində uşaqlar və böyüklər hələ də əsas təhsildən məhrumdur ki, bu da onların potensialını və imkanlarını məhdudlaşdırır. Pulsuz, inklüziv və yüksək keyfiyyətli təhsil mühitlərinin yaradılması yoxsulluq dövrünü qırmağa və sosial irəliləyişi təşviq etməyə kömək edir. Ömürboyu öyrənmənin təşviqi, savadlılıq və bacarıqların artırılması və bərabərsizliyin aradan qaldırılması fərdləri gücləndirərək daha möhkəm və ədalətli cəmiyyətlərin qurulmasına zəmin yaradır.",
                title: "Keyfiyyətli Təhsil",
                description: "Dayanıqlı İnkişaf Məqsədi 4 (SDG 4) inklüziv və bərabər imkanlara əsaslanan keyfiyyətli təhsilin təmin edilməsini və hər kəs üçün ömürboyu öyrənmə imkanlarının təşviqini hədəfləyir. Təhsil yoxsulluq dövrünü qırmaq və yeni imkanlar yaratmaq üçün güclü vasitədir. SDG 4-ün hədəfləri arasında hər kəs üçün pulsuz ibtidai və orta təhsilə universal çıxış, texniki, peşə və ali təhsilə bərabər və sərfəli çıxış, eləcə də savadlılıq və hesab bacarıqlarının artırılması yer alır. Bu məqsəd həmçinin gender bərabərsizliyinin aradan qaldırılması və dayanıqlı inkişaf naminə təhsilin təşviqinə diqqət yetirir. Keyfiyyətli təhsil innovasiyanı, vətəndaş fəallığını və iqtisadi artımı dəstəkləyir. Bu məqsəd müxtəlif yaş qruplarından olan öyrənənləri gücləndirməklə, hər kəsin uğur qazanması üçün lazım olan bilik və bacarıqlara sahib olduğu dözümlü və inklüziv cəmiyyətlərin formalaşmasına töhfə verir."
            }
        },
        sdg5: {
            en: {
                intro: "Achieving gender equality is key to building fair and thriving societies. Discrimination and unequal access to opportunities hold women and girls back worldwide. Promoting equal rights, safety, and representation helps unlock the full potential of every individual.",
                title: "Gender Equality",
                description: "Sustainable Development Goal 5 (SDG 5) aims to achieve gender equality and empower all women and girls. Despite progress in recent years, gender discrimination remains deeply rooted in many societies, limiting access to education, employment, and decision-making roles. SDG 5 targets include eliminating gender-based violence, ensuring equal opportunities in leadership, and recognizing unpaid care work. Additionally, it seeks to end child marriage and female genital mutilation while promoting reproductive rights. Gender equality is not just a fundamental human right but also essential for sustainable development. When women and girls have equal access to resources and opportunities, economies grow, and communities thrive. Achieving this goal requires strong policies, social change, and collaboration across governments, organizations, and individuals. By fostering an inclusive society where everyone—regardless of gender—can reach their full potential, SDG 5 paves the way for a more just and prosperous world."
            },
            az: {
                intro: "Gender bərabərliyinin təmin edilməsi ədalətli və inkişaf edən cəmiyyətlərin qurulmasında əsas rol oynayır. Ayrı-seçkilik və qeyri-bərabər imkanlar qadın və qızların potensialını məhdudlaşdırır. Bərabər hüquqların, təhlükəsizliyin və təmsilçiliyin təşviqi hər kəsin tam potensialını üzə çıxarmağa imkan verir.",
                title: "Gender Bərabərliyi",
                description: "Dayanıqlı İnkişaf Məqsədi 5 (SDG 5) gender bərabərliyinə nail olmağı və bütün qadın və qızların gücləndirilməsini hədəfləyir. Son illərdə irəliləyişlər olsa da, gender ayrı-seçkiliyi bir çox cəmiyyətdə hələ də dərin kök salıb və qadınların təhsil, məşğulluq və qərarvermə imkanlarına çıxışını məhdudlaşdırır. SDG 5-in hədəfləri arasında gender əsaslı zorakılığın aradan qaldırılması, liderlik sahəsində bərabər imkanların təmin olunması və ödənişsiz qulluq işlərinin tanınması yer alır. Bundan əlavə, erkən nikah və qadın cinsiyyət orqanlarının zədələnməsi kimi zərərli təcrübələrin qarşısını almaq və reproduktiv hüquqları təşviq etmək məqsəd qoyulur. Gender bərabərliyi yalnız əsas insan hüququ deyil, həm də dayanıqlı inkişaf üçün vacib şərtdir. Qadın və qızlara resurslara və imkanlara bərabər çıxış imkanı verildikdə, iqtisadiyyatlar inkişaf edir və cəmiyyətlər çiçəklənir. Bu məqsədə nail olmaq güclü siyasət, ictimai dəyişiklik və hökumətlər, təşkilatlar və fərdlər arasında əməkdaşlıq tələb edir. Hər kəsin – cinsindən asılı olmayaraq – tam potensialına çatdığı inklüziv cəmiyyətin qurulması SDG 5-in daha ədalətli və firavan bir dünya üçün yol açmasına imkan verir."
            }
        },
        sdg6: {
            en: {
                intro: "Access to clean water and proper sanitation is vital for public health, human dignity, and environmental sustainability. Yet, billions of people still live without safe drinking water and basic hygiene services. Achieving SDG 6 means building resilient water systems, improving sanitation infrastructure, and protecting water-related ecosystems. Clean water is not only a basic human right—it is also key to health, education, gender equality, and sustainable development. With innovation, investment, and cooperation, a future with safe water for all is possible.",
                title: "Clean Water and Sanitation",
                description: "Sustainable Development Goal 6 (SDG 6) aims to ensure availability and sustainable management of water and sanitation for all. Clean water is essential for health, survival, and dignity, yet billions still lack safe water and proper sanitation. SDG 6 targets include achieving universal access to safe drinking water, improving water quality, increasing water-use efficiency, and protecting water-related ecosystems. It also promotes the importance of hygiene and equitable sanitation facilities. Water is a human right and a cornerstone of public health. Ensuring clean and accessible water for all supports better health, gender equality, and sustainable development. Reaching this goal requires infrastructure, innovation, and global cooperation."
            },
            az: {
                intro: "Təmiz suya və sanitariya xidmətlərinə çıxış ictimai sağlamlıq, insan ləyaqəti və ekoloji dayanıqlılıq üçün həyati əhəmiyyət daşıyır. Buna baxmayaraq, milyardlarla insan hələ də təhlükəsiz içməli sudan və əsas gigiyena xidmətlərindən məhrumdur. SDG 6-ya nail olmaq dayanıqlı su sistemlərinin qurulması, sanitariya infrastrukturunun yaxşılaşdırılması və su ilə bağlı ekosistemlərin qorunması deməkdir. Təmiz su yalnız əsas insan hüququ deyil – həm də sağlamlığın, təhsilin, gender bərabərliyinin və dayanıqlı inkişafın təməlidir. İnnovasiya, investisiya və beynəlxalq əməkdaşlıqla hər kəs üçün təhlükəsiz suya çıxış təmin oluna bilər.",
                title: "Təmiz Su və Sanitariya",
                description: "Dayanıqlı İnkişaf Məqsədi 6 (SDG 6) hər kəs üçün su ehtiyatlarının əlçatanlığı və davamlı idarə olunması, həmçinin sanitariya xidmətlərinin təmin olunmasını hədəfləyir. Təmiz su sağlamlıq, həyat və insan ləyaqəti üçün vacibdir, lakin hələ də milyardlarla insan təhlükəsiz suya və sanitariya xidmətlərinə çıxışdan məhrumdur. SDG 6-nın məqsədlərinə təhlükəsiz içməli suya ümumi çıxışın təmin olunması, suyun keyfiyyətinin yaxşılaşdırılması, su resurslarının səmərəli istifadəsinin artırılması və su ilə bağlı ekosistemlərin qorunması daxildir. Bu məqsəd həm də gigiyena və ədalətli sanitariya şəraitinin vacibliyini vurğulayır. Su insan hüququdur və ictimai sağlamlığın əsas sütunlarından biridir. Təmiz və əlçatan suyun təmin olunması daha sağlam cəmiyyətlər, gender bərabərliyi və davamlı inkişaf üçün zəmin yaradır. Bu məqsədə çatmaq üçün infrastruktur, innovasiya və qlobal əməkdaşlıq vacibdir."
            }
        },
        sdg7: {
            en: {
                intro: "Energy is at the heart of development—it powers homes, schools, hospitals, and industries. Yet millions still live without electricity or rely on polluting energy sources. Clean and affordable energy not only improves daily life but also supports innovation and reduces environmental impact. Achieving SDG 7 means increasing the use of renewable energy, improving efficiency, and ensuring that everyone, everywhere, can access reliable and modern energy.",
                title: "Affordable and Clean Energy",
                description: "Sustainable Development Goal 7 (SDG 7) seeks to ensure access to affordable, reliable, sustainable, and modern energy for all. Energy powers economies, supports healthcare and education, and improves quality of life. Yet, many people still lack access to electricity or rely on harmful cooking methods. SDG 7 targets include expanding renewable energy use, improving energy efficiency, and enhancing international cooperation on clean energy technologies. Clean energy reduces environmental harm and fosters economic growth. Achieving this goal means transitioning to low-carbon systems, supporting innovation, and making energy solutions accessible and affordable worldwide."
            },
            az: {
                intro: "Enerji inkişafın əsasını təşkil edir – evləri, məktəbləri, xəstəxanaları və sənayeni gücləndirir. Lakin milyonlarla insan hələ də elektrik enerjisindən məhrumdur və ya zərərli enerji mənbələrindən istifadə edir. Təmiz və əlçatan enerji gündəlik həyatı yaxşılaşdırmaqla yanaşı, innovasiyaları dəstəkləyir və ətraf mühitə təsiri azaldır. SDG 7-yə nail olmaq üçün bərpa olunan enerjidən istifadənin artırılması, enerjidən səmərəli istifadə və hər kəsin müasir, etibarlı enerji mənbələrinə çıxışının təmin edilməsi vacibdir.",
                title: "Əlçatan və Təmiz Enerji",
                description: "Dayanıqlı İnkişaf Məqsədi 7 (SDG 7) hər kəs üçün əlçatan, etibarlı, davamlı və müasir enerji təmin olunmasını hədəfləyir. Enerji iqtisadiyyatları irəli aparır, səhiyyə və təhsili dəstəkləyir, həyat keyfiyyətini artırır. Buna baxmayaraq, bir çox insan hələ də elektrik enerjisinə çıxışdan məhrumdur və ya sağlamlığa zərərli üsullarla bişirməyə məcburdur. SDG 7-nin məqsədləri arasında bərpa olunan enerji istifadəsinin genişləndirilməsi, enerji səmərəliliyinin artırılması və təmiz enerji texnologiyaları sahəsində beynəlxalq əməkdaşlığın gücləndirilməsi var. Təmiz enerji ətraf mühitə ziyanı azaldır və iqtisadi artımı təşviq edir. Bu məqsədə çatmaq az karbonlu sistemlərə keçid, innovasiyaların dəstəklənməsi və enerji həllərinin dünya üzrə əlçatan və münasib qiymətə olması deməkdir."
            }
        },
        sdg8: {
            en: {
                intro: "Work is more than a source of income—it brings dignity, purpose, and a path to a better life. Yet, many people around the world face unemployment, job insecurity, or unsafe conditions. SDG 8 focuses on promoting inclusive economic growth by ensuring decent work, supporting innovation, and creating opportunities for all. Sustainable economies depend on productive jobs, fair wages, and safe workplaces. When people have access to meaningful employment, communities thrive and prosperity becomes possible for everyone.",
                title: "Decent Work and Economic Growth",
                description: "Sustainable Development Goal 8 (SDG 8) promotes sustained, inclusive, and sustainable economic growth, full and productive employment, and decent work for all. In a rapidly changing global economy, many face unemployment, underemployment, or poor working conditions. SDG 8 targets include promoting youth employment, ensuring safe work environments, supporting entrepreneurship, and reducing the informal labor market. It also emphasizes sustainable tourism, innovation, and fair global labor practices. Decent work empowers individuals and drives economic resilience. By creating job opportunities and fostering inclusive economic policies, SDG 8 supports prosperity that benefits everyone."
            },
            az: {
                intro: "Əmək yalnız gəlir mənbəyi deyil – həm də ləyaqət, məqsəd və daha yaxşı həyata aparan bir yoldur. Buna baxmayaraq, dünyada milyonlarla insan işsizlik, qeyri-sabit və ya təhlükəli iş şəraiti ilə üzləşir. SDG 8 layiqli işin təmin olunması, innovasiyaların dəstəklənməsi və hamı üçün imkanların yaradılması yolu ilə inklüziv iqtisadi artımı təşviq edir. Dayanıqlı iqtisadiyyatlar məhsuldar işlərə, ədalətli əməkhaqqına və təhlükəsiz iş yerlərinə əsaslanır. İnsanlar mənalı iş imkanlarına sahib olduqda, cəmiyyətlər inkişaf edir və hər kəs üçün firavanlıq mümkün olur.",
                title: "Layiqli Əmək və İqtisadi Artım",
                description: "Dayanıqlı İnkişaf Məqsədi 8 (SDG 8) davamlı, inklüziv və dayanıqlı iqtisadi artımı, tam və məhsuldar məşğulluğu, həmçinin hamı üçün layiqli əmək imkanlarını təşviq edir. Qlobal iqtisadiyyat sürətlə dəyişdikcə, bir çox insan işsizlik, qeyri-kafi məşğulluq və ya pis iş şəraiti ilə qarşılaşır. SDG 8-in məqsədləri gənclərin məşğulluğunun təşviqi, təhlükəsiz iş mühitlərinin təmin olunması, sahibkarlığın dəstəklənməsi və qeyri-rəsmi əmək bazarının azaldılmasını əhatə edir. Eyni zamanda bu məqsəd davamlı turizmi, innovasiyanı və ədalətli qlobal əmək təcrübələrini önə çıxarır. Layiqli iş insanlar üçün güc, cəmiyyətlər üçün isə iqtisadi davamlılıq yaradır. İş imkanlarının artırılması və inklüziv iqtisadi siyasətlərin təşviqi ilə SDG 8 hamının faydalana biləcəyi firavanlığı dəstəkləyir."
            }
        },
        sdg9: {
            en: {
                intro: "Modern infrastructure, strong industries, and innovation are key to a thriving economy. Yet, many regions face outdated systems and limited technology access. SDG 9 promotes sustainable industrialization and innovation to drive inclusive growth, empower communities, and build a resilient, future-ready world.",
                title: "Industry, Innovation, and Infrastructure",
                description: "Sustainable Development Goal 9 (SDG 9) focuses on building resilient infrastructure, promoting inclusive and sustainable industrialization, and fostering innovation. Strong infrastructure and industrial development are key drivers of economic growth and technological progress. SDG 9 targets include upgrading infrastructure, supporting sustainable industries, increasing access to information and communication technology, and enhancing scientific research. Innovation and reliable infrastructure open doors to opportunities, reduce inequalities, and boost competitiveness. This goal highlights the importance of investing in forward-thinking solutions to power inclusive and sustainable development. "
            },
            az: {
                intro: "Müasir infrastruktur, güclü sənaye və innovasiya inkişaf edən iqtisadiyyatın əsas sütunlarıdır. Lakin bir çox bölgələrdə köhnəlmiş sistemlər və texnologiyaya məhdud çıxış var. SDG 9 dayanıqlı sənayeləşməni və innovasiyanı təşviq etməklə inklüziv inkişafı sürətləndirməyi, cəmiyyətləri gücləndirməyi və dayanıqlı gələcək qurmağı hədəfləyir.",
                title: "Sənaye, İnnovasiya və İnfrastruktur",
                description: "Dayanıqlı İnkişaf Məqsədi 9 (SDG 9) dayanıqlı infrastrukturun qurulması, inklüziv və davamlı sənayeləşmənin təşviqi və innovasiyanın inkişaf etdirilməsinə yönəlib. Güclü infrastruktur və sənaye inkişafı iqtisadi artımın və texnoloji tərəqqinin əsas mühərrikləridir. SDG 9-un məqsədləri infrastrukturun yenilənməsi, dayanıqlı sənaye sahələrinin dəstəklənməsi, informasiya və kommunikasiya texnologiyalarına çıxışın artırılması və elmi tədqiqatların gücləndirilməsini əhatə edir. İnnovasiya və etibarlı infrastruktur imkanların artırılmasına, bərabərsizliyin azaldılmasına və rəqabət qabiliyyətinin yüksəldilməsinə şərait yaradır. Bu məqsəd inklüziv və dayanıqlı inkişafı təmin etmək üçün irəlini düşünən həll yollarına sərmayə qoymağın vacibliyini vurğulayır."
            }
        },
        sdg10: {
            en: {
                intro: "Inequality remains a major challenge, with disparities in income, opportunities, and access to basic services widening globally. SDG 10 aims to reduce these inequalities by promoting social, economic, and political inclusion. It targets discrimination based on age, gender, race, and migration status while ensuring fair wages and equal access to education and healthcare. By addressing inequalities, SDG 10 creates a more stable, prosperous world where no one is left behind.",
                title: "Reduced Inequalities",
                description: "Sustainable Development Goal 10 (SDG 10) focuses on reducing inequalities within and among countries, addressing disparities in income, opportunities, and access to essential services. Economic inequality has widened globally, with wealth concentrated in the hands of a few while marginalized communities struggle with poverty and exclusion. SDG 10 aims to promote social, economic, and political inclusion by tackling discrimination based on age, gender, disability, race, and migration status. It also emphasizes the importance of fair wages, equal access to education and healthcare, and financial policies that support lower-income populations. Beyond national efforts, the goal highlights the need for improved representation of developing countries in global decision-making. By ensuring fair and equitable systems, SDG 10 helps create a more stable and prosperous world where no one is left behind. Reducing inequality leads to stronger societies, greater innovation, and more inclusive economic growth."
            },
            az: {
                intro: "Bərabərsizlik hələ də əsas bir problem olaraq qalır, gəlir, imkanlar və əsas xidmətlərə çıxış arasında fərqlər dünyada genişlənib. SDG 10 bu bərabərsizlikləri aradan qaldırmaq üçün sosial, iqtisadi və siyasi inklüzivluğu təşviq edir. O, yaş, cins, irqi və miqrasiya statusuna əsaslanan ayrı-seçkiliklə mübarizə aparır və ədalətli əmək haqqı, bərabər təhsil və səhiyyə imkanı təmin edir. Bərabərsizlikləri aradan qaldırmaqla, SDG 10 daha sabit və firavan bir dünya yaradır, burada heç kim arxada qalmır.",
                title: "Bərabərsizliklərin Azaldılması",
                description: "Dayanıqlı İnkişaf Məqsədi 10 (SDG 10) ölkələr arasında və daxilində bərabərsizlikləri azaltmağa yönəlir, gəlir, imkanlar və əsas xidmətlərə çıxış arasındakı fərqləri həll edir. İqtisadi bərabərsizlik dünya miqyasında genişlənib, sərvət bir neçə nəfərin əlinə cəmləşib, kənarda qalan cəmiyyətlər yoxsulluq və xaric edilmə ilə mübarizə aparır. SDG 10 yaş, cinsiyyət, əlillik, irq və miqrasiya statusuna əsaslanan ayrı-seçkiliklə mübarizə edərək sosial, iqtisadi və siyasi inklüzivluğu təşviq etməyi hədəfləyir. O, həmçinin ədalətli əmək haqqı, təhsil və səhiyyəyə bərabər çıxışı və aşağı gəlirli əhalini dəstəkləyən maliyyə siyasətlərinin vacibliyini vurğulayır. Milli səylərdən kənarda, bu məqsəd inkişaf edən ölkələrin qlobal qərar qəbul etmə proseslərində daha yaxşı təmsil olunmasını tələb edir. Ədalətli və bərabər sistemləri təmin etməklə, SDG 10 daha sabit və firavan bir dünya yaradır, burada heç kim arxada qalmır. Bərabərsizlikləri azaltmaq daha güclü cəmiyyətlərə, daha böyük yeniliyə və daha inklüziv iqtisadi artıma gətirib çıxarır."
            }
        },
        sdg11: {
            en: {
                intro: "Cities are centers of culture, innovation, and economic growth—but they also face rising challenges like overcrowding, pollution, and inequality. SDG 11 aims to create urban spaces that are safe, inclusive, and environmentally responsible. By promoting sustainable infrastructure and accessible public services, it improves the lives of city residents. Well-planned cities build stronger communities and help ensure a better future for all.",
                title: "Sustainable Cities and Communities",
                description: "Sustainable Development Goal 11 (SDG 11) seeks to make cities and human settlements inclusive, safe, resilient, and sustainable. As urban areas grow, challenges like overcrowding, pollution, and inadequate infrastructure arise. SDG 11 targets include ensuring access to affordable housing, sustainable transport, green public spaces, and disaster-resilient buildings. It also emphasizes participatory urban planning and reducing the environmental impact of cities. Sustainable cities foster better quality of life, economic opportunity, and environmental stewardship. By designing inclusive and forward-looking urban spaces, we create vibrant communities for current and future generations."
            },
            az: {
                intro: "Şəhərlər mədəniyyətin, innovasiyanın və iqtisadi inkişafın mərkəzləridir, lakin onlar artan sıxlıq, çirklənmə və bərabərsizlik kimi çətinliklərlə də üzləşirlər. SDG 11 təhlükəsiz, inklüziv və ekoloji cəhətdən məsuliyyətli şəhər məkanları yaratmağı hədəfləyir. Davamlı infrastrukturun və əlçatan ictimai xidmətlərin təşviqi şəhər sakinlərinin həyat keyfiyyətini yaxşılaşdırır. Yaxşı planlaşdırılmış şəhərlər güclü icmalar qurur və hər kəs üçün daha yaxşı gələcəyi təmin edir.",
                title: "Davamlı Şəhərlər və Cəmiyyət",
                description: "Dayanıqlı İnkişaf Məqsədi 11 (SDG 11) şəhərləri və insan məskənlərini inklüziv, təhlükəsiz, dayanıqlı və davamlı etmək məqsədi daşıyır. Şəhərləşmə artdıqca sıxlıq, çirklənmə və qeyri-kafi infrastruktur kimi problemlər ortaya çıxır. SDG 11 məqsədləri arasında münasib qiymətli yaşayış sahələrinə çıxışın təmin edilməsi, davamlı nəqliyyat, yaşıl ictimai məkanlar və təbii fəlakətlərə davamlı binaların inkişafı yer alır. Eyni zamanda şəhərlərin ətraf mühitə təsirinin azaldılması və ictimai iştirakı olan şəhər planlaşdırılması vurğulanır. Davamlı şəhərlər daha yüksək həyat keyfiyyəti, iqtisadi imkanlar və ətraf mühitə qayğı ilə nəticələnir. İnklüziv və gələcəyə yönəlmiş şəhər məkanları dizayn etməklə, həm indiki, həm də gələcək nəsillər üçün canlı icmalar yaradırıq."
            }
        },
        sdg12: {
            en: {
                intro: "The way we consume and produce shapes the future of our planet. SDG 12 focuses on using resources wisely, reducing waste, and promoting sustainability in every step of production and consumption. From individuals to industries, everyone plays a role in protecting the environment through responsible choices.",
                title: "Responsible Consumption and Production",
                description: "Sustainable Development Goal 12 (SDG 12) aims to ensure sustainable consumption and production patterns. Our current use of resources is putting immense pressure on the planet. SDG 12 targets include reducing waste, improving resource efficiency, encouraging sustainable business practices, and raising consumer awareness. It also promotes responsible food systems and sustainable public procurement. By changing the way we produce and consume, we can reduce environmental degradation, save resources, and foster sustainable growth. This goal calls on everyone—governments, businesses, and individuals—to make choices that protect the Earth and support future well-being."
            },
            az: {
                intro: "Bizim istehlak və istehsal tərzimiz planetimizin gələcəyini müəyyən edir. SDG 12 resursların ağıllı istifadəsinə, tullantıların azaldılmasına və istehsal-istehlak proseslərində davamlılığa diqqət yetirir. Fərdlərdən tutmuş sənayelərə qədər hər kəs məsuliyyətli seçimlərlə ətraf mühiti qorumağa töhfə verə bilər.",
                title: "Məsuliyyətli İstehlak və İstehsal",
                description: "Dayanıqlı İnkişaf Məqsədi 12 (SDG 12) davamlı istehlak və istehsal nümunələrinin təmin edilməsini hədəfləyir. Hazırkı resurs istifadəmiz planetimizə böyük təzyiq göstərir. SDG 12-nin məqsədləri arasında tullantıların azaldılması, resursların səmərəli istifadəsi, davamlı biznes təcrübələrinin təşviqi və istehlakçılarda maarifləndirmənin artırılması yer alır. Həmçinin məsuliyyətli ərzaq sistemləri və davamlı ictimai satınalmalar da bu məqsədə daxildir. İstehsal və istehlak üsullarımızı dəyişməklə ətraf mühitin deqradasiyasını azalda, resurslara qənaət edə və davamlı inkişafa təkan verə bilərik. Bu məqsəd hökumətləri, biznesləri və fərdləri Yer kürəsini qorumaq və gələcək rifahı dəstəkləmək üçün məsuliyyətli seçimlər etməyə çağırır."
            }
        },
        sdg13: {
            en: {
                intro: "Climate change is a global crisis that threatens our environment, health, and future. SDG 13 focuses on urgent action to reduce emissions, strengthen resilience, and support climate solutions. Tackling climate change requires global cooperation, innovation, and bold commitment from all levels of society.",
                title: "Climate Action",
                description: "Sustainable Development Goal 13 (SDG 13) urges urgent action to combat climate change and its impacts. Climate change affects every aspect of life, from health and food security to migration and economic stability. SDG 13 targets include strengthening resilience to climate-related hazards, integrating climate action into national policies, and improving education on climate issues. It also calls for international cooperation and financial support for developing countries. Climate action is essential for protecting our planet and securing a sustainable future. By reducing emissions, transitioning to clean energy, and building resilient communities, we can tackle one of the greatest challenges of our time."
            },
            az: {
                intro: "İqlim dəyişikliyi ətraf mühitimizi, sağlamlığımızı və gələcəyimizi təhdid edən qlobal bir böhrandır. SDG 13 emissiyaların azaldılması, davamlılıq imkanlarının gücləndirilməsi və iqlim həllərinin dəstəklənməsi üçün təcili fəaliyyətə çağırır. Bu çağırışa cavab vermək üçün qlobal əməkdaşlıq, yenilik və cəmiyyətin bütün səviyyələrində qətiyyətli addımlar tələb olunur.",
                title: "İqlim Dəyişməsinə Qarşı Fəaliyyət",
                description: "Dayanıqlı İnkişaf Məqsədi 13 (SDG 13) iqlim dəyişikliyi və onun təsirləri ilə mübarizə aparmaq üçün təcili tədbirlər görməyə çağırır. İqlim dəyişikliyi sağlamlıqdan və ərzaq təhlükəsizliyindən tutmuş miqrasiya və iqtisadi sabitliyə qədər həyatın bütün sahələrinə təsir edir. SDG 13-in məqsədlərinə iqlimlə bağlı təhlükələrə qarşı davamlılığın gücləndirilməsi, iqlim tədbirlərinin milli siyasətlərə inteqrasiyası və bu sahədə maarifləndirmənin artırılması daxildir. Həmçinin bu məqsəd inkişaf etməkdə olan ölkələrə beynəlxalq əməkdaşlıq və maliyyə dəstəyi göstərilməsini nəzərdə tutur. İqlim dəyişikliyi ilə mübarizə planetimizi qorumaq və davamlı gələcəyi təmin etmək üçün həyati əhəmiyyət daşıyır. Emissiyaların azaldılması, təmiz enerjiyə keçid və dayanıqlı icmaların qurulması ilə biz zamanımızın ən böyük problemlərindən birini aradan qaldıra bilərik."
            }
        },
        sdg14: {
            en: {
                intro: "Oceans are essential to life on Earth, influencing the climate, food chains, and global ecosystems. Despite their importance, human activities are putting marine environments at serious risk. SDG 14 focuses on protecting ocean life and using marine resources in a sustainable way.",
                title: "Life Below Water",
                description: "Sustainable Development Goal 14 (SDG 14) aims to conserve and sustainably use the oceans, seas, and marine resources. Oceans regulate the climate, provide food, and support biodiversity, yet they face threats from pollution, overfishing, and climate change. SDG 14 targets include reducing marine pollution, protecting marine ecosystems, ending harmful fishing practices, and increasing scientific knowledge. Healthy oceans are vital for the planet's well-being and human livelihoods. Achieving this goal means adopting sustainable practices, enforcing laws, and working together to safeguard marine life and the communities that depend on it."
            },
            az: {
                intro: "Okeanlar Yer üzündəki həyat üçün vacibdir — iqlimə, qida zəncirlərinə və qlobal ekosistemlərə təsir göstərir. Onların bu əhəmiyyətinə baxmayaraq, insan fəaliyyəti dəniz mühitini ciddi təhlükə altına alır. SDG 14 okean həyatını qorumağa və dəniz resurslarından davamlı şəkildə istifadə etməyə yönəlib.",
                title: "Su Altında Həyat",
                description: "Dayanıqlı İnkişaf Məqsədi 14 (SDG 14) okeanların, dənizlərin və dəniz resurslarının qorunması və onlardan davamlı istifadəyə yönəlib. Okeanlar iqlimi tənzimləyir, qida mənbəyi yaradır və bioloji müxtəlifliyi dəstəkləyir, lakin çirklənmə, həddindən artıq balıq ovlama və iqlim dəyişikliyi səbəbilə təhlükə altındadır. SDG 14-in məqsədləri dəniz çirklənməsinin azaldılması, dəniz ekosistemlərinin qorunması, zərərli balıqçılıq təcrübələrinin dayandırılması və elmi biliklərin artırılmasını əhatə edir. Sağlam okeanlar həm planetin rifahı, həm də insanların dolanışıqları üçün həyati əhəmiyyət daşıyır. Bu məqsədə çatmaq üçün davamlı yanaşmalar qəbul edilməli, qanunlar tətbiq edilməli və dəniz həyatını və ona bağlı icmaları qorumaq üçün birlikdə hərəkət edilməlidir."
            }
        },
        sdg15: {
            en: {
                intro: "Land ecosystems are home to most of the planet’s biodiversity and are essential for human life. Forests, soil, and wildlife play a key role in climate balance, food security, and health. SDG 15 aims to protect these natural systems and ensure their sustainable use.",
                title: "Life on Land",
                description: "Sustainable Development Goal 15 (SDG 15) focuses on protecting, restoring, and promoting sustainable use of terrestrial ecosystems, forests, and biodiversity. Forests and land ecosystems provide vital services such as air purification, climate regulation, and food resources. However, they are threatened by deforestation, desertification, and loss of biodiversity. SDG 15 targets include halting deforestation, restoring degraded land, combating desertification, and protecting endangered species. Life on land is deeply interconnected with human survival and well-being. Preserving nature ensures a balanced, thriving planet for future generations."
            },
            az: {
                intro: "Quru ekosistemləri Yer üzündəki bioloji müxtəlifliyin böyük hissəsini özündə cəmləyir və insan həyatı üçün vacibdir. Meşələr, torpaq və vəhşi təbiət iqlim tarazlığı, qida təhlükəsizliyi və sağlamlıq baxımından əsas rol oynayır. SDG 15 bu təbii sistemlərin qorunması və davamlı istifadəsini hədəfləyir.",
                title: "Quru Ekosistemləri",
                description: "Dayanıqlı İnkişaf Məqsədi 15 (SDG 15) quru ekosistemlərinin, meşələrin və bioloji müxtəlifliyin qorunması, bərpası və davamlı istifadəsinə yönəlib. Meşələr və quru ekosistemləri hava təmizlənməsi, iqlimin tənzimlənməsi və qida mənbələri kimi həyati xidmətlər göstərir. Lakin bu sistemlər meşələrin qırılması, səhralaşma və bioloji müxtəlifliyin itirilməsi ilə təhlükə altındadır. SDG 15-in hədəfləri arasında meşələrin qırılmasının qarşısının alınması, deqradasiyaya uğramış torpaqların bərpası, səhralaşmaya qarşı mübarizə və nəsli kəsilməkdə olan növlərin qorunması yer alır. Quru üzərindəki həyat insanın sağ qalması və rifahı ilə sıx bağlıdır. Təbiətin qorunması gələcək nəsillər üçün balanslı və çiçəklənən bir planet təmin edir."
            }
        },
        sdg16: {
            en: {
                intro: "Promoting peace, justice, and strong institutions is essential for sustainable development. Conflict, corruption, and weak governance threaten human rights and hinder progress. Strengthening the rule of law, ensuring access to justice, and fostering transparent institutions are crucial steps toward building inclusive and equitable societies.",
                title: "Peace, Justice and Strong Institutions",
                description: "Sustainable Development Goal 16 (SDG 16) seeks to promote peaceful and inclusive societies, ensure access to justice, and build strong institutions at all levels. Conflict, corruption, and weak governance undermine human rights and development, making it difficult for communities to thrive. SDG 16 addresses issues such as violence, human trafficking, bribery, and discriminatory laws. It advocates for transparent institutions, accountability, and participatory decision-making, ensuring that governments serve their people fairly and effectively. A key aspect of this goal is strengthening the rule of law so that individuals and businesses can operate in a just environment. Peace and stability are crucial for economic growth and human well-being, as societies free from violence and corruption offer better opportunities for education, healthcare, and innovation. By fostering strong institutions and promoting justice for all, SDG 16 lays the foundation for a safer and more equitable world."
            },
            az: {
                intro: "Sülh, ədalət və güclü institutların təşviqi dayanıqlı inkişaf üçün vacibdir. Münaqişə, korrupsiya və zəif idarəçilik insan hüquqlarını təhlükəyə atır və irəliləyişi əngəlləyir. Hüququn aliliyinin möhkəmləndirilməsi, ədalətə çıxışın təmin olunması və şəffaf institutların qurulması inklüziv və ədalətli cəmiyyətlərin qurulmasında mühüm addımlardır.",
                title: "Sülh, Ədalət və Güclü İnstitutlar",
                description: "Dayanıqlı İnkişaf Məqsədi 16 (SDG 16) sülhsevər və inklüziv cəmiyyətlərin təşviqi, ədalətə çıxışın təmin olunması və bütün səviyyələrdə güclü institutların qurulmasına yönəlib. Münaqişələr, korrupsiya və zəif idarəetmə insan hüquqlarını və inkişafı pozur, icmaların inkişafını çətinləşdirir. SDG 16 zorakılıq, insan alveri, rüşvətxorluq və ayrı-seçkilik yaradan qanunlar kimi məsələləri əhatə edir. Bu məqsəd şəffaf institutları, məsuliyyətliliyi və iştirakçılığa əsaslanan qərar qəbuletməni təşviq edir ki, hökumətlər vətəndaşlarına ədalətli və effektiv şəkildə xidmət göstərə bilsin. Bu məqsədin əsas elementlərindən biri hüququn aliliyinin gücləndirilməsidir ki, insanlar və bizneslər ədalətli bir mühitdə fəaliyyət göstərə bilsin. Sülh və sabitlik iqtisadi inkişaf və insan rifahı üçün həyati əhəmiyyət daşıyır, çünki zorakılıq və korrupsiyadan azad cəmiyyətlər təhsil, səhiyyə və innovasiya üçün daha yaxşı imkanlar təqdim edir. Güclü institutlar yaratmaq və hər kəs üçün ədaləti təşviq etməklə SDG 16 daha təhlükəsiz və ədalətli bir dünyanın təməlini qoyur."
            }
        },
        sdg17: {
            en: {
                intro: "Tackling the world’s greatest challenges requires global unity. SDG 17 emphasizes the vital role of partnerships in achieving all other Sustainable Development Goals. From sharing knowledge to providing resources, collaboration strengthens progress. Only through joint efforts can we create a fair and sustainable future for all.",
                title: "Partnership for the Goals",
                description: "Sustainable Development Goal 17 (SDG 17) emphasizes the importance of global partnerships to achieve the SDGs. No single country or organization can tackle global challenges alone. SDG 17 targets include enhancing international cooperation, supporting capacity-building in developing countries, promoting fair trade, and improving access to technology and innovation. It also encourages mobilizing financial resources, sharing knowledge and expertise, and improving policy coherence among nations. Strong partnerships between governments, private sectors, civil society, and individuals are essential to drive progress. Building inclusive alliances based on trust and mutual goals ensures that development efforts are effective and far-reaching. This goal reminds us that collaboration, solidarity, and shared responsibility are key to building a sustainable future for all."
            },
            az: {
                intro: "Dünyanın ən böyük problemlərinin öhdəsindən gəlmək üçün qlobal birlik vacibdir. DİM 17 bütün digər Dayanıqlı İnkişaf Məqsədlərinə nail olmaqda tərəfdaşlıqların əsas rolunu vurğulayır. Biliklərin paylaşılması və resursların təmin edilməsi kimi əməkdaşlıqlar inkişafı gücləndirir. Yalnız birgə səylər sayəsində hamı üçün ədalətli və dayanıqlı gələcək qura bilərik.",
                title: "Məqsədlər naminə tərəfdaşlıq",
                description: "Dayanıqlı İnkişaf Məqsədi 17 (DİM 17) dayanıqlı inkişaf məqsədlərinə nail olmaq üçün qlobal tərəfdaşlığın vacibliyini vurğulayır. Heç bir ölkə və ya təşkilat bu qlobal çağırışların öhdəsindən təkbaşına gələ bilməz. DİM 17 beynəlxalq əməkdaşlığın gücləndirilməsini, inkişaf etməkdə olan ölkələrdə potensialın artırılmasını, ədalətli ticarətin təşviqini və texnologiya ilə innovasiyalara çıxışın yaxşılaşdırılmasını hədəfləyir. Bu məqsəd həmçinin maliyyə resurslarının səfərbər edilməsini, bilik və təcrübənin paylaşılmasını və siyasətlərin uyğunlaşdırılmasını dəstəkləyir. Hökumətlər, özəl sektor, vətəndaş cəmiyyəti və fərdlər arasında güclü tərəfdaşlıqlar irəliləyişin əsasını təşkil edir. Güvən və ortaq məqsədlər üzərində qurulan inklüziv ittifaqlar inkişaf səylərinin daha təsirli və genişmiqyaslı olmasını təmin edir. Bu məqsəd bizə xatırladır ki, əməkdaşlıq, həmrəylik və ortaq məsuliyyət hamı üçün dayanıqlı gələcəyin qurulmasında əsas amillərdir."
            }
        }
        
    };

    // Apply navbar text
    const navTexts = translations.nav[language];
    const navItems = document.querySelectorAll("#navMenu > li > a");
    if (navItems.length >= 4) {
        navItems[0].textContent = navTexts.home;
        navItems[1].textContent = navTexts.about;
        navItems[2].textContent = navTexts.contact;
        navItems[3].textContent = navTexts.language;
    }

    // Handle all page translations
    const main = document.querySelector("main");
    if (main) {
        const pageId = main.id;

        if (pageId === "about") {
            const aboutContent = translations.about[language];
            document.getElementById("about-title").textContent = aboutContent.title;
            document.getElementById("maryam-role").textContent = aboutContent.maryam;
            document.getElementById("zahra-role").textContent = aboutContent.zahra;
            document.getElementById("zhala-role").textContent = aboutContent.zhala;
            document.getElementById("aisha-role").textContent = aboutContent.aisha;
            document.getElementById("fuad-role").textContent = aboutContent.fuad;
            document.getElementById("jeyhun-role").textContent = aboutContent.jeyhun;
            document.getElementById("nihad-role").textContent = aboutContent.nihad;
        } else {
            const sdgContent = translations[pageId];
            if (sdgContent) {
                const content = sdgContent[language];
                document.getElementById(`${pageId}-intro`).textContent = content.intro;
                document.getElementById(`${pageId}-title`).textContent = content.title;
                document.getElementById(`${pageId}-description`).textContent = content.description;
            }
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem("language") || "en";
    setLanguage(savedLang);
});