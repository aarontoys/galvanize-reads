
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('authors').del(), 

    // Inserts seed entries
    knex('authors').insert({
      id: 1, 
      fname:  'Alex',
      lname:  'Martelli',
      bio:  'Alex Martelli spent 8 years with IBM Research, winning three Outstanding Technical Achievement Awards.He then spent 13 as a Senior Software Consultant at think3 inc, developing libraries, network protocols, GUI engines, event frameworks, and web access frontends. He has also taught programming languages, development methods, and numerical computing at Ferrara University and other venues. He\'s a C++ MVP for Brainbench, and a member of the Python Software Foundation. He currently works for AB Strakt, a Python-centered software house in Göteborg, Sweden, mostly by telecommuting from his home in Bologna, Italy. Alex\'s proudest achievement is the articles that appeared in Bridge World (January/February 2000), which were hailed as giant steps towards solving issues that had haunted contract bridge theoreticians for decades.',
      img:  'https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/alex_martelli.jpg',
      deleted: false
    }),
    knex('authors').insert({
      id: 2, 
      fname:  'Anna',
      lname:  'Ravenscroft',
      bio:  'Anna Martelli Ravenscroft is an experienced speaker and trainer, with diverse background developing curricula for church, regional transit, disaster preparedness; developing web applications for therapy, learning, fitness; writing technical books, articles and presentations; active member of Open Source community; skilled at translating between IT professionals and end users.',
      img:  'https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/anna_ravenscroft.jpg',
      deleted: false
    }),
    knex('authors').insert({
      id: 3, 
      fname:  'Steve',
      lname:  'Holden',
      bio:  'Steve Holden Is a consultant, advising clients on system and network architectures and the design and implementation of programmed web systems. He also teaches classes on TCP/IP, network security, database and programming topics, and is the author of "Python Web Programming", the O\'Reilly School of Technology\'s "Certificate series in Python" and O\'Reilly Media\'s "Intermediate Python" video series.',
      img:  'https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/steve_holden.jpg',
      deleted: false
    }),
    knex('authors').insert({
      id: 4, 
      fname:  'Allen B.',
      lname:  'Downey',
      bio:  'Allen Downey is a Professor of Computer Science at Olin College of Engineering. He has taught at Wellesley College, Colby College and U.C. Berkeley. He has a Ph.D. in Computer Science from U.C. Berkeley and Master\'s and Bachelor\'s degrees from MIT.',
      img:  'https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/allen_downey.jpg',
      deleted: false
    }),
    knex('authors').insert({
      id: 5, 
      fname:  'Bonnie',
      lname:  'Eisenman',
      bio:  'Bonnie Eisenman is a software engineer at Codecademy, with previous experience at Fog Creek Software and Google. She has spoken at several conferences on topics ranging from ReactJS to musical programming and Arduinos. In her spare time, she enjoys building electronic musical instruments, tinkering with hardware projects, and laser-cutting chocolate. Find her on Twitter as @brindelle.',
      img:  'https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/bonnie_eisenman.jpg',
      deleted: false
    }),
    knex('authors').insert({
      id: 6, 
      fname:  'Kyle',
      lname:  'Simpson',
      bio:  'Kyle Simpson is an Open Web Evangelist who\'s passionate about all things JavaScript. He\'s an author, workshop trainer, tech speaker, and OSS contributor/leader.',
      img:  'https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/kyle_simpson.jpg',
      deleted: false
    })
  );
};
