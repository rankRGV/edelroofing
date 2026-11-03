# Builds src/data/city/roofing-{harlingen,brownsville}-tx(-es).json for the Edel Astro site.
# Copy is built only from sourced facts in site-rebuild/cameron-county-city-pages-research.md.
import json, re, html
from pathlib import Path

OUT = Path("C:/Users/Eddie/Desktop/RankRGVMarketingTeam/EdelRoofing/src/data/city")
SITE = "https://www.edelroofing.com"
CALL = {"label": "Call (956) 422-3335", "href": "tel:+19564223335"}
CALL_ES = {"label": "Llame al (956) 422-3335", "href": "tel:+19564223335"}


def plain(s):
    return html.unescape(re.sub(r"<[^>]+>", "", s))


def schema(page, crumb_name, area_label, area_href):
    faqs = [f for s in page["sections"] if s["kind"] == "faq" for f in s["faqs"]]
    es = page["lang"] == "es"
    return [{
        "@context": "https://schema.org",
        "@graph": [
            {"@type": "BreadcrumbList", "itemListElement": [
                {"@type": "ListItem", "position": 1, "name": "Inicio" if es else "Home", "item": SITE + ("/es-mx" if es else "/")},
                {"@type": "ListItem", "position": 2, "name": area_label, "item": SITE + area_href},
                {"@type": "ListItem", "position": 3, "name": crumb_name, "item": SITE + page["path"]},
            ]},
            {"@type": "WebPage", "name": page["h1"], "url": SITE + page["path"], "description": page["description"],
             "inLanguage": "es" if es else "en", "about": {"@id": SITE + "/#roofingcontractor"}},
            {"@type": "FAQPage", "mainEntity": [
                {"@type": "Question", "name": plain(f["q"]), "acceptedAnswer": {"@type": "Answer", "text": plain(f["a"])}}
                for f in faqs]},
        ],
    }]


def build(page, crumb_name):
    es = page["lang"] == "es"
    area = ("Áreas de Servicio", "/es-mx/service-areas") if es else ("Service Areas", "/service-areas")
    page["crumbs"] = [{"label": area[0], "href": area[1]}]
    page["schema"] = schema(page, crumb_name, *area)
    page["changes"] = [
        "2026-11-03 new page (not on the live Duda site). Built from sourced facts only; sources in site-rebuild/cameron-county-city-pages-research.md. No Edel office or address in this city is implied (Brownsville office planned 2027, no GBP there). No prices, metal, tile, mobile homes or tarping (unconfirmed by Edel).",
    ]
    (OUT / (page["path"][1:] + ".json")).write_text(json.dumps(page, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    print("wrote", page["path"])


# ------------------------------------------------------------------ HARLINGEN EN
harlingen = {
    "path": "/roofing-harlingen-tx",
    "lang": "en",
    "city": "harlingen",
    "service": "hub",
    "title": "Roofing Contractor in Harlingen, TX | Edel Roofing & Construction",
    "description": "Roof replacement, repairs, commercial roofs and gutters for Harlingen, TX homes and businesses. Rated 4.8 on Google. Free inspection: (956) 422-3335.",
    "alternates": {"en": "/roofing-harlingen-tx", "es": "/roofing-harlingen-tx-es"},
    "h1": "Roofing Contractor in Harlingen, TX",
    "lede": "Edel Roofing &amp; Construction replaces and repairs roofs for Harlingen homes and businesses. We drive over from our Edinburg shop, and the inspection and written estimate are free.",
    "heroCtas": [{"label": "Book a Free Inspection", "href": "/book-an-inspection"}, CALL],
    "sections": [
        {"title": "Roofing in Harlingen from our Edinburg shop", "alt": False, "kind": "text", "paras": [
            "Our shop is at 1815 N Jackson Rd in Edinburg, about 42 miles from Harlingen City Hall. Without traffic that's around 50 minutes down the expressway. We don't have an office in Harlingen. We take Harlingen jobs from Edinburg, the same way we've roofed across the Valley since 2003.",
            "Cameron County isn't new to us. One of our recent jobs is a CertainTeed shingle roof on a home on South Padre Island, and the photos are on our <a href=\"/residential-roofing\">residential roofing page</a>. Harlingen gets the same Gulf storms and falls under the same state windstorm rules, so this page covers both.",
        ]},
        {"title": "Roofing services for Harlingen", "alt": True, "kind": "cards", "cards": [
            {"title": "Roof Replacement", "body": "Full tear off and a new roof with CertainTeed, Owens Corning or GAF shingles. We check the decking once the old roof is off, and you see the price in writing before anything starts.", "href": "/residential-roofing"},
            {"title": "Roof Repairs", "body": "Leaks, blown off shingles and worn flashing. Under Texas rules, a repair smaller than 100 square feet that doesn't touch the decking needs no windstorm inspection.", "href": "/roof-repairs"},
            {"title": "Commercial Roofing", "body": "Flat and low slope roofs for offices, shops and warehouses: TPO, EPDM and modified bitumen, plus leak repair on roofs already in place.", "href": "/commercial-roofing"},
            {"title": "Storm Damage", "body": "After hail or a hard wind, we check the roof and write up what we find so you have something to show your insurance company.", "href": "/storm-damage"},
            {"title": "Gutters", "body": "Seamless gutters and gutter repair, so September rain (Harlingen's wettest month) runs away from the house instead of down the walls.", "href": "/gutters-edinburg-tx"},
            {"title": "Free Roof Inspection", "body": "We walk the roof, write down what we find and tell you plainly what shape it's in. There's no charge.", "href": "/book-an-inspection"},
        ]},
        {"title": "Harlingen homes are older than most in the Valley", "alt": False, "kind": "text", "paras": [
            "The Census puts the median Harlingen home at 1988. About 36% of homes were built before 1980, another 36% between 1980 and 1999, and only 28% in 2000 or later (Census ACS 2020 to 2024). In Edinburg, by comparison, more than half the homes went up in 2000 or later.",
            "That means a lot of Harlingen roofs have been replaced at least once, and some carry patches from past storms. On a roof like that, the real condition shows up when the old shingles come off. Soft or rotted decking has to be replaced before the new roof goes on, and the state's windstorm guidance says the same thing.",
            "The rules changed recently too. The City of Harlingen moved to the 2024 International Residential Code on October 1, 2025, and its permit guide lists roof replacements as work that needs a building permit. Starting without one costs double the normal permit fee.",
        ]},
        {"title": "Steps for a roof replacement in Harlingen", "alt": True, "kind": "cards", "cards": [
            {"title": "1. Free inspection", "body": "We come out from Edinburg, look over the roof from the ground up and write down what we find."},
            {"title": "2. Written estimate", "body": "You get the price on paper before any work. Ask about the shingle's wind rating: Texas windstorm rules call for shingles tested to Class F or Class H."},
            {"title": "3. City permit", "body": "Harlingen requires a permit for a roof replacement. Building Permits and Inspections is at 502 E Tyler Ave, (956) 216-5169."},
            {"title": "4. Windstorm inspection", "body": "If you want TWIA coverage, set up the state windstorm inspection before tear off. The city says waiting until the job is done can make certification harder and more costly."},
            {"title": "5. Tear off and decking", "body": "The old roof comes off and damaged boards get replaced. This is the stage the windstorm inspector needs to see, before shingles cover it."},
            {"title": "6. New roof and cleanup", "body": "The new roof goes on with nails (the windstorm code doesn't allow staples), the yard gets cleaned, and the city inspection gets closed out."},
        ]},
        {"title": "Harlingen storms and what they did to roofs", "alt": False, "kind": "text", "paras": [
            "Hurricane Dolly came ashore on South Padre Island on July 23, 2008. The airport in Harlingen recorded a 74 mph gust, and a rain gauge just northeast of town caught 15 inches, the highest total anywhere in the storm (National Hurricane Center).",
            "In July 2020, Hurricane Hanna pushed a 63 mph gust across the Harlingen airport before the station lost power. The Hurricane Center's report says hundreds of poorly built structures had roof damage, and the Weather Service placed the worst winds along Interstate 2 between Harlingen, San Benito and McAllen.",
            "Storms without names do damage too. On April 2, 2017, golf ball size hail was reported at 7th Street and Vinson in north Harlingen. On June 4, 2023, the airport measured an 82 mph gust. On May 9, 2026, a microburst ran from Harlingen toward Laureles, and the Weather Service survey found part of the roof torn off the garden center greenhouse at Lowe's on the east side (NOAA Storm Events).",
            "Wind usually starts at the edge. The Insurance Institute for Business and Home Safety says roof damage often begins when wind gets under the roof edge and starts pulling it away. After a storm, look along the edges and the ridge and check the yard for shingles, then call us for a free look.",
        ]},
        {"title": "Why Harlingen homeowners call Edel", "alt": True, "kind": "proof", "proof": [
            {"big": "RCAT", "label": "RCAT licensed (#03-0489), bonded and insured"},
            {"big": "4.8★", "label": "Average from 250+ Google reviews"},
            {"big": "PRO", "label": "CertainTeed ShingleMaster PRO, the only one in the Rio Grande Valley"},
            {"big": "Since 2003", "label": "Roofing homes and businesses across the Valley"},
        ]},
        {"title": "Harlingen roofing questions", "alt": False, "kind": "faq", "faqs": [
            {"q": "Do you do roofing work in Harlingen?", "a": "Yes. We take roof replacements, repairs, commercial roofs and gutter jobs in Harlingen. Our shop is in Edinburg, about 50 minutes away, and the inspection and estimate cost nothing. Call (956) 422-3335 to set a time."},
            {"q": "Do I need a permit to replace my roof in Harlingen?", "a": "Yes. The City of Harlingen's permit guide lists roof replacements as work that needs a building permit, and the city has used the 2024 residential code since October 1, 2025. Work started without a permit pays double the normal fee. For questions about your property, call Building Permits and Inspections at (956) 216-5169."},
            {"q": "Does a small roof repair need a windstorm inspection?", "a": "Not always. The Texas Department of Insurance (TDI) says roof repairs under 100 square feet that don't involve the decking are exempt. A full replacement or a big repair needs an inspection while the work is going on if you want the home to stay eligible for TWIA. When you're not sure, TDI asks you to call its windstorm office first at 800-248-6032. The office that covers Cameron County is in Corpus Christi."},
            {"q": "Can my insurance company drop me because my roof is old?", "a": "Not for age alone. TDI says Texas insurers can't turn you down or drop you only because of your roof's age, but the roof's condition still counts, and an older roof can be moved to actual cash value, which pays less. If you got a letter about your roof, a free inspection tells you what shape it's really in."},
            {"q": "A shingle blew off my roof. What should I do?", "a": "Keep the shingle if you find it, and look from the ground for more missing pieces near the edges and the ridge. One missing shingle is a small repair, but it leaves the layer underneath open to sun and rain. Don't let it sit into September: it's Harlingen's wettest month, with 5.31 inches of rain on average (NOAA 1991 to 2020). Call us and we'll come check it."},
        ]},
    ],
    "cta": {
        "title": "Get a free roof inspection in Harlingen",
        "line": "Tell us what's going on with your roof. We'll drive over from Edinburg, take a look and give you the price in writing.",
        "buttons": [{"label": "Book a Free Inspection", "href": "/book-an-inspection"}, CALL],
        "sub": "EDEL Roofing and Construction, Edinburg, TX, serving Harlingen and Cameron County",
    },
}

# ------------------------------------------------------------------ HARLINGEN ES
harlingen_es = {
    "path": "/roofing-harlingen-tx-es",
    "lang": "es",
    "city": "harlingen",
    "service": "hub",
    "title": "Contratista de Techos en Harlingen, TX | Edel Roofing & Construction",
    "description": "Reemplazo de techo, reparaciones, techado comercial y canaletas en Harlingen, TX. Calificación de 4.8 en Google. Inspección gratis: (956) 422-3335.",
    "alternates": {"en": "/roofing-harlingen-tx", "es": "/roofing-harlingen-tx-es"},
    "h1": "Contratista de Techos en Harlingen, TX",
    "lede": "Edel Roofing &amp; Construction reemplaza y repara techos de casas y negocios en Harlingen. Vamos desde nuestro taller en Edinburg, y la inspección y el estimado por escrito son gratis.",
    "heroCtas": [{"label": "Reciba un Estimado Gratis", "href": "/es-mx/contact-us"}, CALL_ES],
    "sections": [
        {"title": "Techos en Harlingen desde nuestro taller en Edinburg", "alt": False, "kind": "text", "paras": [
            "Nuestro taller está en 1815 N Jackson Rd en Edinburg, a unas 42 millas del ayuntamiento de Harlingen. Sin tráfico son como 50 minutos por la autopista. No tenemos oficina en Harlingen. Tomamos trabajos en Harlingen desde Edinburg, igual que hemos hecho techos por todo el Valle desde 2003.",
            "El condado de Cameron no es nuevo para nosotros. Uno de nuestros trabajos recientes es un techo de shingle CertainTeed en una casa de South Padre Island, y las fotos están en nuestra <a href=\"/es-mx/residential-roofing\">página de techos residenciales</a>. A Harlingen le tocan las mismas tormentas del Golfo y las mismas reglas estatales de vientos fuertes, así que esta página explica las dos cosas.",
        ]},
        {"title": "Servicios de techado para Harlingen", "alt": True, "kind": "cards", "cards": [
            {"title": "Reemplazo de Techo", "body": "Quitamos el techo viejo completo y ponemos uno nuevo con shingle de CertainTeed, Owens Corning o GAF. Revisamos la madera cuando sale el techo viejo, y usted ve el precio por escrito antes de empezar.", "href": "/es-mx/residential-roofing"},
            {"title": "Reparación de Techos", "body": "Goteras, shingles que levantó el viento y flashing gastado. Según las reglas de Texas, una reparación de menos de 100 pies cuadrados que no toca la madera no necesita inspección de vientos.", "href": "/es-mx/roof-repairs"},
            {"title": "Techado Comercial", "body": "Techos planos y de poca pendiente para oficinas, tiendas y bodegas: TPO, EPDM y bitumen modificado, y reparación de goteras en techos que ya están puestos.", "href": "/es-mx/commercial-roofing"},
            {"title": "Daño por Tormenta", "body": "Después del granizo o de un viento fuerte, revisamos el techo y le damos por escrito lo que encontramos para que tenga algo que enseñarle a su aseguranza.", "href": "/es-mx/storm-damage"},
            {"title": "Canaletas", "body": "Canaletas sin costuras y reparación de canaletas, para que la lluvia de septiembre (el mes más lluvioso de Harlingen) se aleje de la casa y no baje por las paredes.", "href": "/gutters-edinburg-tx-es"},
            {"title": "Inspección Gratis", "body": "Subimos al techo, anotamos lo que encontramos y le decimos claramente en qué estado está. No cuesta nada.", "href": "/es-mx/contact-us"},
        ]},
        {"title": "Las casas de Harlingen son más viejas que en casi todo el Valle", "alt": False, "kind": "text", "paras": [
            "Según el Censo, la casa típica de Harlingen es de 1988. Cerca del 36% de las casas se construyeron antes de 1980, otro 36% entre 1980 y 1999, y solo el 28% en el año 2000 o después (Censo ACS 2020 a 2024). En Edinburg, en cambio, más de la mitad de las casas son del 2000 en adelante.",
            "Eso quiere decir que muchos techos de Harlingen ya se cambiaron por lo menos una vez, y algunos traen parches de tormentas pasadas. En un techo así, el estado real se ve cuando sale el shingle viejo. La madera blanda o podrida se tiene que cambiar antes de poner el techo nuevo, y las guías estatales de vientos fuertes dicen lo mismo.",
            "Las reglas también cambiaron hace poco. La Ciudad de Harlingen adoptó el Código Residencial Internacional de 2024 el 1 de octubre de 2025, y su guía de permisos pone el reemplazo de techo en la lista de trabajos que necesitan permiso de construcción. Si se empieza sin permiso, se paga el doble.",
        ]},
        {"title": "Pasos para reemplazar un techo en Harlingen", "alt": True, "kind": "cards", "cards": [
            {"title": "1. Inspección gratis", "body": "Vamos desde Edinburg, revisamos el techo completo y anotamos lo que encontramos."},
            {"title": "2. Estimado por escrito", "body": "Usted recibe el precio en papel antes de cualquier trabajo. Pregunte por la clasificación de viento del shingle: las reglas de Texas piden shingle probado como Clase F o Clase H."},
            {"title": "3. Permiso de la ciudad", "body": "Harlingen pide permiso para reemplazar un techo. La oficina de Permisos e Inspecciones está en 502 E Tyler Ave, (956) 216-5169."},
            {"title": "4. Inspección de vientos", "body": "Si quiere cobertura de TWIA, programe la inspección estatal de vientos antes de quitar el techo. La ciudad dice que esperar hasta terminar puede hacer el certificado más difícil y más caro."},
            {"title": "5. Quitar el techo y la madera", "body": "Sale el techo viejo y se cambian las tablas dañadas. Esta es la etapa que el inspector de vientos necesita ver, antes de que el shingle la tape."},
            {"title": "6. Techo nuevo y limpieza", "body": "El techo nuevo se pone con clavos (el código de vientos no permite grapas), se limpia el patio y se cierra la inspección de la ciudad."},
        ]},
        {"title": "Las tormentas de Harlingen y lo que les hicieron a los techos", "alt": False, "kind": "text", "paras": [
            "El huracán Dolly tocó tierra en South Padre Island el 23 de julio de 2008. El aeropuerto de Harlingen registró una ráfaga de 74 mph, y un pluviómetro al noreste de la ciudad juntó 15 pulgadas, la cifra más alta de toda la tormenta (Centro Nacional de Huracanes).",
            "En julio de 2020, el huracán Hanna dejó una ráfaga de 63 mph en el aeropuerto de Harlingen antes de que la estación se quedara sin luz. El informe del Centro de Huracanes dice que cientos de estructuras mal construidas tuvieron daño en el techo, y el Servicio Meteorológico ubicó los peores vientos sobre la Interestatal 2, entre Harlingen, San Benito y McAllen.",
            "Las tormentas sin nombre también hacen daño. El 2 de abril de 2017 se reportó granizo del tamaño de una pelota de golf en 7th Street y Vinson, al norte de Harlingen. El 4 de junio de 2023 el aeropuerto midió una ráfaga de 82 mph. El 9 de mayo de 2026 una microráfaga corrió de Harlingen hacia Laureles, y la inspección del Servicio Meteorológico encontró parte del techo arrancado del invernadero del centro de jardinería de Lowe's, en el lado este (NOAA Storm Events).",
            "El viento casi siempre empieza por la orilla. El Insurance Institute for Business and Home Safety dice que el daño al techo muchas veces empieza cuando el viento se mete debajo de la orilla y la va jalando. Después de una tormenta, revise las orillas y la cumbrera, busque shingles en el patio y llámenos para una revisión gratis.",
        ]},
        {"title": "Por qué en Harlingen llaman a Edel", "alt": True, "kind": "proof", "proof": [
            {"big": "RCAT", "label": "Con licencia RCAT (#03-0489), fianza y seguro"},
            {"big": "4.8★", "label": "Promedio de más de 250 reseñas en Google"},
            {"big": "PRO", "label": "CertainTeed ShingleMaster PRO, el único en el Valle del Río Grande"},
            {"big": "Desde 2003", "label": "Haciendo techos de casas y negocios por todo el Valle"},
        ]},
        {"title": "Preguntas sobre techos en Harlingen", "alt": False, "kind": "faq", "faqs": [
            {"q": "¿Hacen trabajos de techo en Harlingen?", "a": "Sí. Tomamos reemplazos de techo, reparaciones, techos comerciales y canaletas en Harlingen. Nuestro taller está en Edinburg, como a 50 minutos, y la inspección y el estimado no cuestan nada. Llame al (956) 422-3335 para apartar una cita."},
            {"q": "¿Necesito permiso para cambiar mi techo en Harlingen?", "a": "Sí. La guía de permisos de la Ciudad de Harlingen pone el reemplazo de techo en la lista de trabajos que necesitan permiso de construcción, y la ciudad usa el código residencial de 2024 desde el 1 de octubre de 2025. Si se empieza sin permiso, se paga el doble. Para preguntas sobre su propiedad, llame a Permisos e Inspecciones al (956) 216-5169."},
            {"q": "¿Una reparación chica necesita inspección de vientos?", "a": "No siempre. El Departamento de Seguros de Texas (TDI) dice que las reparaciones de menos de 100 pies cuadrados que no tocan la madera están exentas. Un reemplazo completo o una reparación grande necesita inspección mientras se hace el trabajo si quiere que la casa siga siendo elegible para TWIA. Si no está seguro, TDI pide que primero llame a su oficina de vientos al 800-248-6032. La oficina que cubre el condado de Cameron está en Corpus Christi."},
            {"q": "¿Me puede cancelar la aseguranza porque mi techo es viejo?", "a": "No solo por la edad. TDI dice que en Texas las aseguranzas no pueden negarle ni cancelarle la póliza solo por la edad del techo, pero el estado del techo sí cuenta, y a un techo viejo lo pueden pasar a valor real en efectivo, que paga menos. Si le llegó una carta sobre su techo, una inspección gratis le dice en qué estado está de verdad."},
            {"q": "El viento me tumbó un shingle. ¿Qué hago?", "a": "Guarde el shingle si lo encuentra, y fíjese desde el suelo si faltan más cerca de las orillas y la cumbrera. Un shingle que falta es una reparación chica, pero deja la capa de abajo expuesta al sol y la lluvia. No lo deje para septiembre: es el mes más lluvioso de Harlingen, con 5.31 pulgadas en promedio (NOAA 1991 a 2020). Llámenos y vamos a revisarlo."},
        ]},
    ],
    "cta": {
        "title": "Reciba una inspección de techo gratis en Harlingen",
        "line": "Cuéntenos qué le está pasando a su techo. Vamos desde Edinburg, lo revisamos y le damos el precio por escrito.",
        "buttons": [{"label": "Reciba un Estimado Gratis", "href": "/es-mx/contact-us"}, CALL_ES],
        "sub": "EDEL Roofing and Construction, Edinburg, TX, dando servicio en Harlingen y el condado de Cameron",
    },
}

# ------------------------------------------------------------------ BROWNSVILLE EN
brownsville = {
    "path": "/roofing-brownsville-tx",
    "lang": "en",
    "city": "brownsville",
    "service": "hub",
    "title": "Roofing Contractor in Brownsville, TX | Edel Roofing & Construction",
    "description": "Roofers for Brownsville, TX: roof replacement, repairs, commercial roofs and gutters, with permit and windstorm steps explained. Free inspection: (956) 422-3335.",
    "alternates": {"en": "/roofing-brownsville-tx", "es": "/roofing-brownsville-tx-es"},
    "h1": "Roofing Contractor in Brownsville, TX",
    "lede": "Edel Roofing &amp; Construction does roof replacements, repairs, commercial roofing and gutters for Brownsville. We come down from Edinburg for a free inspection and give you the price in writing.",
    "heroCtas": [{"label": "Book a Free Inspection", "href": "/book-an-inspection"}, CALL],
    "sections": [
        {"title": "Roofing for the biggest city in the Valley", "alt": False, "kind": "text", "paras": [
            "Brownsville counted 186,738 people in the 2020 Census, more than McAllen or any other Valley city. That's a lot of roofs, from homes in the downtown historic district to subdivisions finished in the last few years.",
            "Our shop is in Edinburg, about 67 miles from Brownsville City Hall, and we don't have a Brownsville office. When you call, we pick a day that works for you and drive down. We've roofed in the Valley since 2003, including a CertainTeed shingle roof on a South Padre Island home that you can see on our <a href=\"/residential-roofing\">residential roofing page</a>.",
        ]},
        {"title": "What we do in Brownsville", "alt": True, "kind": "cards", "cards": [
            {"title": "Roof Replacement", "body": "Old roof off, new roof on, with CertainTeed, Owens Corning or GAF shingles. The price is in writing before we start, and the yard is cleaned when we finish.", "href": "/residential-roofing"},
            {"title": "Roof Repairs", "body": "Missing shingles at the edges, leaks around vents and flashing, wind damage after a front blows through. We find where the water really gets in.", "href": "/roof-repairs"},
            {"title": "Commercial Roofing", "body": "TPO, EPDM and modified bitumen for flat and low slope buildings, and leak repair on commercial roofs that are already up.", "href": "/commercial-roofing"},
            {"title": "Storm Damage", "body": "A written report of wind or hail damage you can hand to your insurance adjuster. We aren't public adjusters, and we tell you that up front.", "href": "/storm-damage"},
            {"title": "Gutters", "body": "Seamless gutters, repairs and gutter guards. TWIA doesn't ask for a windstorm certificate on gutter work.", "href": "/gutters-edinburg-tx"},
            {"title": "Free Inspection", "body": "We get on the roof, note what we see and explain it in plain words. It costs nothing.", "href": "/book-an-inspection"},
        ]},
        {"title": "Brownsville homes: an old downtown and a lot of new", "alt": False, "kind": "text", "paras": [
            "Brownsville's housing is newer than many people expect. About 42% of homes were built in 2000 or later, 29% between 1980 and 1999 and about 30% before 1980, and the median home dates to 1995 (Census ACS 2020 to 2024). Roughly 68% are single family houses, and about 62% are lived in by their owners.",
            "Building hasn't slowed down. Texas A&amp;M's real estate research center found Cameron County's median home value rose 127% from 2019 to 2025, and its economist pointed to new housing as the biggest driver (Texas Tribune, August 2026). Many of those newer homes still have their first roof. A first roof from the early 2000s is now past 20 years old, in a city that averages about 140 days a year at 90 degrees or hotter (NOAA 1991 to 2020). That's old enough to get it looked at.",
            "The other end is downtown. The Central Brownsville Historic District, on the National Register, covers buildings from 1848 to 1969 between East Levee and East 15th Street. City code lets the heritage officer screen building permits in heritage screening areas, so a reroof there can take an extra review. Ask the city before you settle on a new color or material.",
        ]},
        {"title": "Reroof permits and fees in Brownsville", "alt": True, "kind": "text", "paras": [
            "Roofing isn't on Brownsville's list of work that can skip a permit, so plan on one for a reroof. City Code Section 18-123 sets the residential reroof fee at $50 for up to 500 square feet, $70 for 501 to 2,000 square feet and $150 above that. Start before the permit is issued and the fee doubles.",
            "The city builds to the 2018 International Residential Code. Permits go through the Building Inspections and Permitting office at City Plaza, 1034 E Levee St, second floor, and inspections can be requested at 956-548-6150.",
        ]},
        {"title": "How a Brownsville roof job goes", "alt": False, "kind": "cards", "cards": [
            {"title": "1. Call or book online", "body": "Give us the address and tell us what you're seeing. We set a day to drive down from Edinburg."},
            {"title": "2. On the roof", "body": "We check the shingles, the corners and edges, the flashing and the vents, and write down what we find."},
            {"title": "3. Price in writing", "body": "You get a written estimate at no charge. If you say no, you don't owe us anything."},
            {"title": "4. Permit and windstorm", "body": "The city permit gets pulled, and if you carry TWIA, the TDI windstorm inspection gets scheduled before the old roof comes off."},
            {"title": "5. Tear off and new roof", "body": "Damaged decking is replaced and the new roof goes on while the inspector can still see the work underneath."},
            {"title": "6. Wrap up", "body": "We clean the yard, the city inspection gets closed, and TDI issues the windstorm certificate to TWIA once the work passes."},
        ]},
        {"title": "Windstorm certificates in Cameron County", "alt": True, "kind": "text", "paras": [
            "All of Cameron County is in TWIA's catastrophe area. To buy or keep a TWIA wind policy, most homes need a certificate of compliance from the Texas Department of Insurance (TDI), and replacing a roof is on the list of work that needs one.",
            "Timing is the part people miss. The regular certificate comes from an inspection done while the roof is going on, by a TDI inspector or an engineer TDI has appointed. If the roof is already finished, a licensed engineer can still inspect it for a completed construction certificate, but TDI says that may cost more. TDI also tells homeowners to ask their contractor how the inspection requirements will be met before work starts.",
            "Two more things to know. Since April 1, 2026, certification follows the 2024 codes, and the design wind speed is set for each address instead of one number for the whole city. And homes built between 1988 and June 18, 2009 without a certificate may still qualify for TWIA, with a 15% surcharge on the premium.",
        ]},
        {"title": "Brownsville wind and hail on record", "alt": False, "kind": "text", "paras": [
            "When Hurricane Dolly hit South Padre Island in July 2008, the Brownsville airport recorded a 68 mph gust. The National Hurricane Center's report says damage in Brownsville \"consisted mainly of lost roofing material.\"",
            "In July 2020, during Hurricane Hanna, a small tornado crossed the west side of the airport, and two homes in the next neighborhood lost large sections of their roofs (NOAA Storm Events). On January 8, 2024, a winter storm with no name pushed a 74 mph gust across the airport. And on November 1, 2025, the Weather Service measured 1.25 inch hail at its own office near the airport.",
            "FEMA's coastal building guide says wind uplift on a roof is strongest at the corners, then along the edges. Those are the spots to check first after a storm.",
        ]},
        {"title": "Why Brownsville homeowners call Edel", "alt": True, "kind": "proof", "proof": [
            {"big": "RCAT", "label": "RCAT licensed (#03-0489), bonded and insured"},
            {"big": "4.8★", "label": "Average from 250+ Google reviews"},
            {"big": "PRO", "label": "CertainTeed ShingleMaster PRO, the only one in the Rio Grande Valley"},
            {"big": "Since 2003", "label": "Replacing and repairing roofs in the Valley"},
        ]},
        {"title": "Brownsville roofing questions", "alt": False, "kind": "faq", "faqs": [
            {"q": "Do you come to Brownsville?", "a": "Yes. We drive down from our Edinburg shop for roof replacements, repairs, commercial roofs and gutters. The inspection and the written estimate are free. Call (956) 422-3335 to pick a day."},
            {"q": "How much is a reroof permit in Brownsville?", "a": "The city fee for a residential reroof is $50 for up to 500 square feet, $70 for 501 to 2,000 square feet and $150 over 2,000 square feet, under City Code Section 18-123. That's the permit only, not the roof. Starting work without the permit doubles the fee."},
            {"q": "Do I need a windstorm inspection for a new roof in Brownsville?", "a": "If you want TWIA wind coverage, yes. A roof replacement needs a TDI certificate, and the inspection should happen while the roof is being installed. Small repairs under 100 square feet that don't touch the decking are exempt. TDI's windstorm line is 800-248-6032."},
            {"q": "My house was built in 2005 and never got a windstorm certificate. Can I still get TWIA?", "a": "Possibly. TWIA says homes built from 1988 to June 18, 2009 without a certificate can still be eligible, with a 15% premium surcharge. Ask TWIA or your agent what applies to your policy before you replace the roof."},
            {"q": "Does salt air ruin roofs in Brownsville?", "a": "Less than people think for most of the city. FEMA's warning about fast metal corrosion is for homes within 3,000 feet of the ocean, and Brownsville City Hall is about 23 miles from Boca Chica Beach. For most Brownsville homes, the bigger risk is wind lifting the edges and corners."},
            {"q": "When is the rainiest time of year in Brownsville?", "a": "September. It averages 5.73 inches of rain at the Brownsville airport, out of about 26.8 inches for the whole year (NOAA 1991 to 2020). If your roof is already leaking, don't wait for it. Call and we'll set up a free inspection."},
        ]},
    ],
    "cta": {
        "title": "Get a free roof inspection in Brownsville",
        "line": "Tell us about your roof and pick a day. We'll drive down from Edinburg, look it over and write up the price.",
        "buttons": [{"label": "Book a Free Inspection", "href": "/book-an-inspection"}, CALL],
        "sub": "EDEL Roofing and Construction, Edinburg, TX, serving Brownsville and Cameron County",
    },
}

# ------------------------------------------------------------------ BROWNSVILLE ES
brownsville_es = {
    "path": "/roofing-brownsville-tx-es",
    "lang": "es",
    "city": "brownsville",
    "service": "hub",
    "title": "Contratista de Techos en Brownsville, TX | Edel Roofing & Construction",
    "description": "Techos en Brownsville, TX: reemplazo, reparaciones, techado comercial y canaletas, con los pasos de permiso y vientos explicados. Inspección gratis: (956) 422-3335.",
    "alternates": {"en": "/roofing-brownsville-tx", "es": "/roofing-brownsville-tx-es"},
    "h1": "Contratista de Techos en Brownsville, TX",
    "lede": "Edel Roofing &amp; Construction hace reemplazos de techo, reparaciones, techado comercial y canaletas en Brownsville. Bajamos desde Edinburg para una inspección gratis y le damos el precio por escrito.",
    "heroCtas": [{"label": "Reciba un Estimado Gratis", "href": "/es-mx/contact-us"}, CALL_ES],
    "sections": [
        {"title": "Techos para la ciudad más grande del Valle", "alt": False, "kind": "text", "paras": [
            "Brownsville contó 186,738 habitantes en el Censo de 2020, más que McAllen o cualquier otra ciudad del Valle. Son muchos techos, desde casas en el distrito histórico del centro hasta colonias terminadas en los últimos años.",
            "Nuestro taller está en Edinburg, a unas 67 millas del ayuntamiento de Brownsville, y no tenemos oficina en Brownsville. Cuando usted llama, escogemos un día que le acomode y bajamos. Hacemos techos en el Valle desde 2003, incluyendo un techo de shingle CertainTeed en una casa de South Padre Island que puede ver en nuestra <a href=\"/es-mx/residential-roofing\">página de techos residenciales</a>.",
        ]},
        {"title": "Lo que hacemos en Brownsville", "alt": True, "kind": "cards", "cards": [
            {"title": "Reemplazo de Techo", "body": "Sale el techo viejo y entra uno nuevo, con shingle de CertainTeed, Owens Corning o GAF. El precio va por escrito antes de empezar, y el patio queda limpio al terminar.", "href": "/es-mx/residential-roofing"},
            {"title": "Reparación de Techos", "body": "Shingles que faltan en las orillas, goteras alrededor de ventilas y flashing, daño por viento cuando pasa un frente. Buscamos por dónde entra de verdad el agua.", "href": "/es-mx/roof-repairs"},
            {"title": "Techado Comercial", "body": "TPO, EPDM y bitumen modificado para edificios de techo plano o de poca pendiente, y reparación de goteras en techos comerciales que ya están puestos.", "href": "/es-mx/commercial-roofing"},
            {"title": "Daño por Tormenta", "body": "Un reporte por escrito del daño por viento o granizo que puede entregarle al ajustador de su aseguranza. No somos ajustadores públicos, y se lo decimos desde el principio.", "href": "/es-mx/storm-damage"},
            {"title": "Canaletas", "body": "Canaletas sin costuras, reparaciones y protectores de canaleta. TWIA no pide certificado de vientos para trabajos de canaletas.", "href": "/gutters-edinburg-tx-es"},
            {"title": "Inspección Gratis", "body": "Subimos al techo, anotamos lo que vemos y se lo explicamos en palabras sencillas. No cuesta nada.", "href": "/es-mx/contact-us"},
        ]},
        {"title": "Casas de Brownsville: un centro antiguo y mucho nuevo", "alt": False, "kind": "text", "paras": [
            "Las casas de Brownsville son más nuevas de lo que mucha gente piensa. Cerca del 42% se construyeron en el año 2000 o después, el 29% entre 1980 y 1999 y cerca del 30% antes de 1980, y la casa típica es de 1995 (Censo ACS 2020 a 2024). Más o menos el 68% son casas para una sola familia, y cerca del 62% las habitan sus dueños.",
            "La construcción no ha parado. El centro de investigación de bienes raíces de Texas A&amp;M encontró que el valor medio de las casas en el condado de Cameron subió 127% de 2019 a 2025, y su economista señaló a las casas nuevas como la razón principal (Texas Tribune, agosto de 2026). Muchas de esas casas más nuevas todavía tienen su primer techo. Un primer techo de principios de los 2000 ya pasa de 20 años, en una ciudad que promedia unos 140 días al año a 90 grados o más (NOAA 1991 a 2020). Ya es tiempo de que alguien lo revise.",
            "Del otro lado está el centro. El Distrito Histórico del Centro de Brownsville, en el Registro Nacional, abarca edificios de 1848 a 1969 entre East Levee y East 15th Street. El código de la ciudad permite que el oficial de patrimonio revise los permisos de construcción en las zonas de revisión patrimonial, así que un cambio de techo ahí puede llevar una revisión extra. Pregunte a la ciudad antes de decidir un color o material nuevo.",
        ]},
        {"title": "Permisos y cuotas para cambiar el techo en Brownsville", "alt": True, "kind": "text", "paras": [
            "El techado no está en la lista de trabajos que Brownsville deja hacer sin permiso, así que cuente con sacar uno para cambiar el techo. La Sección 18-123 del Código de la Ciudad pone la cuota residencial en $50 hasta 500 pies cuadrados, $70 de 501 a 2,000 pies cuadrados y $150 arriba de eso. Si se empieza antes de tener el permiso, la cuota se duplica.",
            "La ciudad construye con el Código Residencial Internacional de 2018. Los permisos se tramitan en la oficina de Inspecciones y Permisos de Construcción en City Plaza, 1034 E Levee St, segundo piso, y las inspecciones se piden al 956-548-6150.",
        ]},
        {"title": "Cómo va un trabajo de techo en Brownsville", "alt": False, "kind": "cards", "cards": [
            {"title": "1. Llame o aparte en línea", "body": "Denos la dirección y díganos qué está viendo. Escogemos un día para bajar desde Edinburg."},
            {"title": "2. En el techo", "body": "Revisamos el shingle, las esquinas y las orillas, el flashing y las ventilas, y anotamos lo que encontramos."},
            {"title": "3. Precio por escrito", "body": "Recibe un estimado por escrito sin costo. Si dice que no, no nos debe nada."},
            {"title": "4. Permiso y vientos", "body": "Se saca el permiso de la ciudad, y si usted tiene TWIA, la inspección de vientos de TDI se programa antes de quitar el techo viejo."},
            {"title": "5. Quitar y techo nuevo", "body": "Se cambia la madera dañada y se pone el techo nuevo mientras el inspector todavía puede ver el trabajo de abajo."},
            {"title": "6. Para terminar", "body": "Limpiamos el patio, se cierra la inspección de la ciudad, y TDI emite el certificado de vientos a TWIA cuando el trabajo pasa."},
        ]},
        {"title": "Certificados de vientos en el condado de Cameron", "alt": True, "kind": "text", "paras": [
            "Todo el condado de Cameron está en la zona de catástrofe de TWIA. Para comprar o mantener una póliza de vientos de TWIA, la mayoría de las casas necesitan un certificado de cumplimiento del Departamento de Seguros de Texas (TDI), y cambiar el techo está en la lista de trabajos que lo necesitan.",
            "El tiempo es lo que más se pasa por alto. El certificado regular sale de una inspección hecha mientras se pone el techo, por un inspector de TDI o un ingeniero nombrado por TDI. Si el techo ya está terminado, un ingeniero con licencia todavía puede inspeccionarlo para un certificado de obra terminada, pero TDI dice que eso puede costar más. TDI también les dice a los dueños que le pregunten a su contratista cómo se van a cumplir los requisitos de inspección antes de empezar.",
            "Dos cosas más. Desde el 1 de abril de 2026, la certificación sigue los códigos de 2024, y la velocidad de viento de diseño se fija para cada dirección en lugar de un solo número para toda la ciudad. Y las casas construidas entre 1988 y el 18 de junio de 2009 sin certificado todavía pueden calificar para TWIA, con un recargo del 15% en la prima.",
        ]},
        {"title": "Viento y granizo registrados en Brownsville", "alt": False, "kind": "text", "paras": [
            "Cuando el huracán Dolly llegó a South Padre Island en julio de 2008, el aeropuerto de Brownsville registró una ráfaga de 68 mph. El informe del Centro Nacional de Huracanes dice que el daño en Brownsville fue sobre todo material de techo perdido.",
            "En julio de 2020, durante el huracán Hanna, un tornado pequeño cruzó el lado oeste del aeropuerto, y dos casas de la colonia de al lado perdieron grandes partes de su techo (NOAA Storm Events). El 8 de enero de 2024, una tormenta de invierno sin nombre dejó una ráfaga de 74 mph en el aeropuerto. Y el 1 de noviembre de 2025, el Servicio Meteorológico midió granizo de 1.25 pulgadas en su propia oficina cerca del aeropuerto.",
            "La guía de construcción costera de FEMA dice que el levantamiento por viento en un techo es más fuerte en las esquinas, y luego en las orillas. Esos son los lugares que hay que revisar primero después de una tormenta.",
        ]},
        {"title": "Por qué en Brownsville llaman a Edel", "alt": True, "kind": "proof", "proof": [
            {"big": "RCAT", "label": "Con licencia RCAT (#03-0489), fianza y seguro"},
            {"big": "4.8★", "label": "Promedio de más de 250 reseñas en Google"},
            {"big": "PRO", "label": "CertainTeed ShingleMaster PRO, el único en el Valle del Río Grande"},
            {"big": "Desde 2003", "label": "Cambiando y reparando techos en el Valle"},
        ]},
        {"title": "Preguntas sobre techos en Brownsville", "alt": False, "kind": "faq", "faqs": [
            {"q": "¿Van hasta Brownsville?", "a": "Sí. Bajamos desde nuestro taller en Edinburg para reemplazos de techo, reparaciones, techos comerciales y canaletas. La inspección y el estimado por escrito son gratis. Llame al (956) 422-3335 para escoger un día."},
            {"q": "¿Cuánto cuesta el permiso para cambiar el techo en Brownsville?", "a": "La cuota de la ciudad para un techo residencial es de $50 hasta 500 pies cuadrados, $70 de 501 a 2,000 pies cuadrados y $150 arriba de 2,000 pies cuadrados, según la Sección 18-123 del Código de la Ciudad. Eso es solo el permiso, no el techo. Si se empieza sin permiso, la cuota se duplica."},
            {"q": "¿Necesito inspección de vientos para un techo nuevo en Brownsville?", "a": "Si quiere cobertura de vientos de TWIA, sí. Un reemplazo de techo necesita certificado de TDI, y la inspección se debe hacer mientras se instala el techo. Las reparaciones de menos de 100 pies cuadrados que no tocan la madera están exentas. La línea de vientos de TDI es el 800-248-6032."},
            {"q": "Mi casa es de 2005 y nunca tuvo certificado de vientos. ¿Todavía puedo tener TWIA?", "a": "Puede ser. TWIA dice que las casas construidas de 1988 al 18 de junio de 2009 sin certificado todavía pueden ser elegibles, con un recargo del 15% en la prima. Pregunte a TWIA o a su agente qué aplica a su póliza antes de cambiar el techo."},
            {"q": "¿El aire salado arruina los techos en Brownsville?", "a": "Menos de lo que se piensa en casi toda la ciudad. La advertencia de FEMA sobre la corrosión rápida de metales es para casas a menos de 3,000 pies del mar, y el ayuntamiento de Brownsville está a unas 23 millas de la playa de Boca Chica. Para la mayoría de las casas de Brownsville, el riesgo mayor es el viento que levanta las orillas y las esquinas."},
            {"q": "¿Cuál es la temporada más lluviosa en Brownsville?", "a": "Septiembre. En el aeropuerto de Brownsville llueven 5.73 pulgadas en promedio ese mes, de unas 26.8 pulgadas en todo el año (NOAA 1991 a 2020). Si su techo ya gotea, no espere. Llámenos y le apartamos una inspección gratis."},
        ]},
    ],
    "cta": {
        "title": "Reciba una inspección de techo gratis en Brownsville",
        "line": "Cuéntenos de su techo y escoja un día. Bajamos desde Edinburg, lo revisamos y le damos el precio por escrito.",
        "buttons": [{"label": "Reciba un Estimado Gratis", "href": "/es-mx/contact-us"}, CALL_ES],
        "sub": "EDEL Roofing and Construction, Edinburg, TX, dando servicio en Brownsville y el condado de Cameron",
    },
}

build(harlingen, "Roofing Contractor Harlingen TX")
build(harlingen_es, "Contratista de Techos Harlingen TX")
build(brownsville, "Roofing Contractor Brownsville TX")
build(brownsville_es, "Contratista de Techos Brownsville TX")
