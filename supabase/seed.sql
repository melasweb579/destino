-- One-time migration of the existing data/houses.json content into the houses table.
-- Safe to re-run: existing rows are left untouched (ON CONFLICT DO NOTHING).

insert into houses (id, num, name, cloudinary_folder, location, capacity, rooms, bathrooms, garage, price, currency, hue, shots, description, description2, amenities)
values
  ('villa-marianita', '01', 'Villa Marianita', 'VillaMarianita', 'Baños, Ecuador', 12, 3, 3, 4, 3200, 'USD', 56,
    ARRAY['EXTERIOR','JARDÍN','SALA','RECÁMARA','TERRAZA'],
    'Una casa de líneas limpias rodeada de naturaleza, con grandes ventanales que enmarcan el valle del Pastaza. Las tardes se viven en la terraza mientras el Tungurahua dibuja el horizonte.',
    'El interior combina madera cálida y textiles locales. Cocina abierta totalmente equipada y una piscina privada para los días de descanso.',
    ARRAY['WiFi 300 Mbps','Piscina privada','Cocina equipada','Asador','Chimenea','Estacionamiento']),

  ('roxel-home', '02', 'Roxel Home', 'RoxelHome', 'Baños, Ecuador', 15, 4, 4, 4, 2400, 'USD', 42,
    ARRAY['EXTERIOR','JARDÍN','SALA','RECÁMARA','PISCINA'],
    'Refugio entre montañas a los pies del Tungurahua, pensado para desconectar. Jardines de plantas nativas y una piscina temperada rodean la casa.',
    'Espacios amplios y luminosos, hamacas a la sombra y un huerto del que puedes tomar hierbas frescas para cocinar.',
    ARRAY['WiFi 200 Mbps','Piscina temperada','Cocina equipada','Jardín','Pet friendly','Estacionamiento']),

  ('dept-delux', '03', 'Dept Delux', 'DeptDelux', 'Baños, Ecuador', 6, 3, 2, 2, 2100, 'USD', 32,
    ARRAY['FACHADA','PATIO','SALA','COCINA','TERRAZA'],
    'Departamento de diseño restaurado a pasos del centro de Baños, con patio interior y terraza con vistas al volcán Tungurahua.',
    'Detalles en madera, pisos artesanales y arte local en cada rincón. Ideal para una escapada de pareja con mucho encanto.',
    ARRAY['WiFi 300 Mbps','Terraza con vista','Cocina equipada','Chimenea','Aire acondicionado','Estacionamiento']),

  ('boutique-exclusive', '04', 'Boutique Exclusive', 'BoutiqueExclusive', 'Baños, Ecuador', 10, 3, 3, 3, 4100, 'USD', 66,
    ARRAY['EXTERIOR','TERRAZA','SALA','COCINA','JARDÍN'],
    'Villa boutique con terraza panorámica, hamacas y acceso directo a los senderos de la Ruta de las Cascadas. El sonido del río Pastaza acompaña cada momento del día.',
    'Cinco recámaras, piscina infinita y terrazas amplias para reunir a toda la familia o a un grupo de amigos.',
    ARRAY['WiFi 200 Mbps','Piscina infinita','Acceso a senderos','Terraza panorámica','Asador','Estacionamiento']),

  ('montisora', '05', 'Montisora', 'Montisora', 'Baños, Ecuador', 7, 3, 2, 2, 1950, 'USD', 48,
    ARRAY['FACHADA','JARDÍN','SALA','RECÁMARA','ASADOR'],
    'Casa de campo serena con jardín amplio y zona de asador, perfecta para fines de semana tranquilos en el corazón de los Andes ecuatorianos.',
    'Decoración rústica y cálida, fogata exterior y mucho espacio para que los niños disfruten al aire libre.',
    ARRAY['WiFi 150 Mbps','Jardín amplio','Cocina equipada','Asador','Fogata','Estacionamiento']),

  ('descanso-y-madera', '06', 'Descanso y Madera', 'DescansoyMadera', 'Baños, Ecuador', 10, 4, 3, 2, 3600, 'USD', 74,
    ARRAY['EXTERIOR','TERRAZA','SALA','COCINA','JARDÍN'],
    'Cabaña a orillas del río Pastaza, con terraza propia para escuchar el agua al amanecer y senderos naturales a tu disposición.',
    'Materiales naturales, brisa constante y atardeceres que tiñen el cielo sobre el volcán. Un lujo discreto en plena naturaleza.',
    ARRAY['WiFi 100 Mbps','Terraza privada','Senderismo','Cocina equipada','Aire acondicionado','Estacionamiento']),

  ('verde-descanso', '07', 'Verde Descanso', 'VerdeDescanso', 'Baños, Ecuador', 12, 3, 2, 2, 2800, 'USD', 58,
    ARRAY['EXTERIOR','TERRAZA','SALA','RECÁMARA','JARDÍN'],
    'Eco-cabaña entre la selva amazónica y las montañas andinas, construida con materiales locales y energía solar, a pocos minutos del Pailón del Diablo.',
    'Terrazas abiertas, duchas al aire libre y un ritmo pausado que invita a desconectar de verdad.',
    ARRAY['WiFi 100 Mbps','Energía solar','Terraza panorámica','Ducha exterior','Yoga deck','Pet friendly'])

on conflict (id) do nothing;
