const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const photos = [
    {
        "albumId": 1,
        "id": 1,
        "title": "accusamus beatae ad facilis cum similique qui sunt",
        "url": "http://placehold.it/600/92c952",
        "thumbnailUrl": "http://placehold.it/150/92c952"
    },
    {
      "albumId": 1,
      "id": 2,
      "title": "reprehenderit est deserunt velit ipsam",
      "url": "http://placehold.it/600/771796",
      "thumbnailUrl": "http://placehold.it/150/771796"
    },
    {
      "albumId": 1,
      "id": 3,
      "title": "officia porro iure quia iusto qui ipsa ut modi",
      "url": "http://placehold.it/600/24f355",
      "thumbnailUrl": "http://placehold.it/150/24f355"
    },
    {
      "albumId": 1,
      "id": 4,
      "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
      "url": "http://placehold.it/600/d32776",
      "thumbnailUrl": "http://placehold.it/150/d32776"
    },
    {
      "albumId": 1,
      "id": 5,
      "title": "natus nisi omnis corporis facere molestiae rerum in",
      "url": "http://placehold.it/600/f66b97",
      "thumbnailUrl": "http://placehold.it/150/f66b97"
    },
    {
      "albumId": 1,
      "id": 6,
      "title": "accusamus ea aliquid et amet sequi nemo",
      "url": "http://placehold.it/600/56a8c2",
      "thumbnailUrl": "http://placehold.it/150/56a8c2"
    },
    {
      "albumId": 1,
      "id": 7,
      "title": "officia delectus consequatur vero aut veniam explicabo molestias",
      "url": "http://placehold.it/600/b0f7cc",
      "thumbnailUrl": "http://placehold.it/150/b0f7cc"
    },
    {
      "albumId": 1,
      "id": 8,
      "title": "aut porro officiis laborum odit ea laudantium corporis",
      "url": "http://placehold.it/600/54176f",
      "thumbnailUrl": "http://placehold.it/150/54176f"
    },
    {
      "albumId": 1,
      "id": 9,
      "title": "qui eius qui autem sed",
      "url": "http://placehold.it/600/51aa97",
      "thumbnailUrl": "http://placehold.it/150/51aa97"
    },
    {
      "albumId": 1,
      "id": 10,
      "title": "beatae et provident et ut vel",
      "url": "http://placehold.it/600/810b14",
      "thumbnailUrl": "http://placehold.it/150/810b14"
    },
    {
      "albumId": 1,
      "id": 11,
      "title": "nihil at amet non hic quia qui",
      "url": "http://placehold.it/600/1ee8a4",
      "thumbnailUrl": "http://placehold.it/150/1ee8a4"
    },
    {
      "albumId": 1,
      "id": 12,
      "title": "mollitia soluta ut rerum eos aliquam consequatur perspiciatis maiores",
      "url": "http://placehold.it/600/66b7d2",
      "thumbnailUrl": "http://placehold.it/150/66b7d2"
    },
    {
      "albumId": 1,
      "id": 13,
      "title": "repudiandae iusto deleniti rerum",
      "url": "http://placehold.it/600/197d29",
      "thumbnailUrl": "http://placehold.it/150/197d29"
    },
    {
      "albumId": 1,
      "id": 14,
      "title": "est necessitatibus architecto ut laborum",
      "url": "http://placehold.it/600/61a65",
      "thumbnailUrl": "http://placehold.it/150/61a65"
    },
    {
      "albumId": 1,
      "id": 15,
      "title": "harum dicta similique quis dolore earum ex qui",
      "url": "http://placehold.it/600/f9cee5",
      "thumbnailUrl": "http://placehold.it/150/f9cee5"
    },
    {
      "albumId": 1,
      "id": 16,
      "title": "iusto sunt nobis quasi veritatis quas expedita voluptatum deserunt",
      "url": "http://placehold.it/600/fdf73e",
      "thumbnailUrl": "http://placehold.it/150/fdf73e"
    },
    {
      "albumId": 1,
      "id": 17,
      "title": "natus doloribus necessitatibus ipsa",
      "url": "http://placehold.it/600/9c184f",
      "thumbnailUrl": "http://placehold.it/150/9c184f"
    },
    {
      "albumId": 1,
      "id": 18,
      "title": "laboriosam odit nam necessitatibus et illum dolores reiciendis",
      "url": "http://placehold.it/600/1fe46f",
      "thumbnailUrl": "http://placehold.it/150/1fe46f"
    },
    {
      "albumId": 1,
      "id": 19,
      "title": "perferendis nesciunt eveniet et optio a",
      "url": "http://placehold.it/600/56acb2",
      "thumbnailUrl": "http://placehold.it/150/56acb2"
    },
    {
      "albumId": 1,
      "id": 20,
      "title": "assumenda voluptatem laboriosam enim consequatur veniam placeat reiciendis error",
      "url": "http://placehold.it/600/8985dc",
      "thumbnailUrl": "http://placehold.it/150/8985dc"
    },
    {
      "albumId": 1,
      "id": 21,
      "title": "ad et natus qui",
      "url": "http://placehold.it/600/5e12c6",
      "thumbnailUrl": "http://placehold.it/150/5e12c6"
    },
    {
      "albumId": 1,
      "id": 22,
      "title": "et ea illo et sit voluptas animi blanditiis porro",
      "url": "http://placehold.it/600/45601a",
      "thumbnailUrl": "http://placehold.it/150/45601a"
    },
    {
      "albumId": 1,
      "id": 23,
      "title": "harum velit vero totam",
      "url": "http://placehold.it/600/e924e6",
      "thumbnailUrl": "http://placehold.it/150/e924e6"
    },
    {
      "albumId": 1,
      "id": 24,
      "title": "beatae officiis ut aut",
      "url": "http://placehold.it/600/8f209a",
      "thumbnailUrl": "http://placehold.it/150/8f209a"
    },
    {
      "albumId": 1,
      "id": 25,
      "title": "facere non quis fuga fugit vitae",
      "url": "http://placehold.it/600/5e3a73",
      "thumbnailUrl": "http://placehold.it/150/5e3a73"
    },
    {
      "albumId": 1,
      "id": 26,
      "title": "asperiores nobis voluptate qui",
      "url": "http://placehold.it/600/474645",
      "thumbnailUrl": "http://placehold.it/150/474645"
    },
    {
      "albumId": 1,
      "id": 27,
      "title": "sit asperiores est quos quis nisi veniam error",
      "url": "http://placehold.it/600/c984bf",
      "thumbnailUrl": "http://placehold.it/150/c984bf"
    },
    {
      "albumId": 1,
      "id": 28,
      "title": "non neque eligendi molestiae repudiandae illum voluptatem qui aut",
      "url": "http://placehold.it/600/392537",
      "thumbnailUrl": "http://placehold.it/150/392537"
    },
    {
      "albumId": 1,
      "id": 29,
      "title": "aut ipsam quos ab placeat omnis",
      "url": "http://placehold.it/600/602b9e",
      "thumbnailUrl": "http://placehold.it/150/602b9e"
    },
    {
      "albumId": 1,
      "id": 30,
      "title": "odio enim voluptatem quidem aut nihil illum",
      "url": "http://placehold.it/600/372c93",
      "thumbnailUrl": "http://placehold.it/150/372c93"
    },
    {
      "albumId": 1,
      "id": 31,
      "title": "voluptate voluptates sequi",
      "url": "http://placehold.it/600/a7c272",
      "thumbnailUrl": "http://placehold.it/150/a7c272"
    },
    {
      "albumId": 1,
      "id": 32,
      "title": "ad enim dignissimos voluptatem similique",
      "url": "http://placehold.it/600/c70a4d",
      "thumbnailUrl": "http://placehold.it/150/c70a4d"
    },
    {
      "albumId": 1,
      "id": 33,
      "title": "culpa ipsam nobis qui fuga magni et mollitia",
      "url": "http://placehold.it/600/501fe1",
      "thumbnailUrl": "http://placehold.it/150/501fe1"
    },
    {
      "albumId": 1,
      "id": 34,
      "title": "vitae est facere quia itaque adipisci perferendis id maiores",
      "url": "http://placehold.it/600/35185e",
      "thumbnailUrl": "http://placehold.it/150/35185e"
    },
    {
      "albumId": 1,
      "id": 35,
      "title": "tenetur minus voluptatum et",
      "url": "http://placehold.it/600/c96cad",
      "thumbnailUrl": "http://placehold.it/150/c96cad"
    },
    {
      "albumId": 1,
      "id": 36,
      "title": "expedita rerum eaque",
      "url": "http://placehold.it/600/4d564d",
      "thumbnailUrl": "http://placehold.it/150/4d564d"
    },
    {
      "albumId": 1,
      "id": 37,
      "title": "totam voluptas iusto deserunt dolores",
      "url": "http://placehold.it/600/ea51da",
      "thumbnailUrl": "http://placehold.it/150/ea51da"
    },
    {
      "albumId": 1,
      "id": 38,
      "title": "natus magnam iure rerum pariatur molestias dolore nisi",
      "url": "http://placehold.it/600/4f5b8d",
      "thumbnailUrl": "http://placehold.it/150/4f5b8d"
    },
    {
      "albumId": 1,
      "id": 39,
      "title": "molestiae nam ullam et rerum doloribus",
      "url": "http://placehold.it/600/1e71a2",
      "thumbnailUrl": "http://placehold.it/150/1e71a2"
    },
    {
      "albumId": 1,
      "id": 40,
      "title": "est quas voluptates dignissimos sint praesentium nisi recusandae",
      "url": "http://placehold.it/600/3a0b95",
      "thumbnailUrl": "http://placehold.it/150/3a0b95"
    },
    {
      "albumId": 1,
      "id": 41,
      "title": "in voluptatem doloremque cum atque architecto deleniti",
      "url": "http://placehold.it/600/659403",
      "thumbnailUrl": "http://placehold.it/150/659403"
    },
    {
      "albumId": 1,
      "id": 42,
      "title": "voluptatibus a autem molestias voluptas architecto culpa",
      "url": "http://placehold.it/600/ca50ac",
      "thumbnailUrl": "http://placehold.it/150/ca50ac"
    },
    {
      "albumId": 1,
      "id": 43,
      "title": "eius hic autem ad beatae voluptas",
      "url": "http://placehold.it/600/6ad437",
      "thumbnailUrl": "http://placehold.it/150/6ad437"
    },
    {
      "albumId": 1,
      "id": 44,
      "title": "neque eum provident et inventore sed ipsam dignissimos quo",
      "url": "http://placehold.it/600/29fe9f",
      "thumbnailUrl": "http://placehold.it/150/29fe9f"
    },
    {
      "albumId": 1,
      "id": 45,
      "title": "praesentium fugit quis aut voluptatum commodi dolore corrupti",
      "url": "http://placehold.it/600/c4084a",
      "thumbnailUrl": "http://placehold.it/150/c4084a"
    },
    {
      "albumId": 1,
      "id": 46,
      "title": "quidem maiores in quia fugit dolore explicabo occaecati",
      "url": "http://placehold.it/600/e9b68",
      "thumbnailUrl": "http://placehold.it/150/e9b68"
    },
    {
      "albumId": 1,
      "id": 47,
      "title": "et soluta est",
      "url": "http://placehold.it/600/b4412f",
      "thumbnailUrl": "http://placehold.it/150/b4412f"
    },
    {
      "albumId": 1,
      "id": 48,
      "title": "ut esse id",
      "url": "http://placehold.it/600/68e0a8",
      "thumbnailUrl": "http://placehold.it/150/68e0a8"
    },
    {
      "albumId": 1,
      "id": 49,
      "title": "quasi quae est modi quis quam in impedit",
      "url": "http://placehold.it/600/2cd88b",
      "thumbnailUrl": "http://placehold.it/150/2cd88b"
    },
    {
      "albumId": 1,
      "id": 50,
      "title": "et inventore quae ut tempore eius voluptatum",
      "url": "http://placehold.it/600/9e59da",
      "thumbnailUrl": "http://placehold.it/150/9e59da"
    },
    {
      "albumId": 2,
      "id": 51,
      "title": "non sunt voluptatem placeat consequuntur rem incidunt",
      "url": "http://placehold.it/600/8e973b",
      "thumbnailUrl": "http://placehold.it/150/8e973b"
    },
    {
      "albumId": 2,
      "id": 52,
      "title": "eveniet pariatur quia nobis reiciendis laboriosam ea",
      "url": "http://placehold.it/600/121fa4",
      "thumbnailUrl": "http://placehold.it/150/121fa4"
    },
    {
      "albumId": 2,
      "id": 53,
      "title": "soluta et harum aliquid officiis ab omnis consequatur",
      "url": "http://placehold.it/600/6efc5f",
      "thumbnailUrl": "http://placehold.it/150/6efc5f"
    },
    {
      "albumId": 2,
      "id": 54,
      "title": "ut ex quibusdam dolore mollitia",
      "url": "http://placehold.it/600/aa8f2e",
      "thumbnailUrl": "http://placehold.it/150/aa8f2e"
    },
    {
      "albumId": 2,
      "id": 55,
      "title": "voluptatem consequatur totam qui aut iure est vel",
      "url": "http://placehold.it/600/5e04a4",
      "thumbnailUrl": "http://placehold.it/150/5e04a4"
    },
    {
      "albumId": 2,
      "id": 56,
      "title": "vel voluptatem esse consequuntur est officia quo aut quisquam",
      "url": "http://placehold.it/600/f9f067",
      "thumbnailUrl": "http://placehold.it/150/f9f067"
    },
    {
      "albumId": 2,
      "id": 57,
      "title": "vero est optio expedita quis ut molestiae",
      "url": "http://placehold.it/600/95acce",
      "thumbnailUrl": "http://placehold.it/150/95acce"
    },
    {
      "albumId": 2,
      "id": 58,
      "title": "rem pariatur facere eaque",
      "url": "http://placehold.it/600/cde4c1",
      "thumbnailUrl": "http://placehold.it/150/cde4c1"
    },
    {
      "albumId": 2,
      "id": 59,
      "title": "modi totam dolor eaque et ipsum est cupiditate",
      "url": "http://placehold.it/600/a46a91",
      "thumbnailUrl": "http://placehold.it/150/a46a91"
    },
    {
      "albumId": 2,
      "id": 60,
      "title": "ea enim temporibus asperiores placeat consectetur commodi ullam",
      "url": "http://placehold.it/600/323599",
      "thumbnailUrl": "http://placehold.it/150/323599"
    },
    {
      "albumId": 2,
      "id": 61,
      "title": "quia minus sed eveniet accusantium incidunt beatae odio",
      "url": "http://placehold.it/600/e403d1",
      "thumbnailUrl": "http://placehold.it/150/e403d1"
    },
    {
      "albumId": 2,
      "id": 62,
      "title": "dolorem cumque quo nihil inventore enim",
      "url": "http://placehold.it/600/65ad4f",
      "thumbnailUrl": "http://placehold.it/150/65ad4f"
    },
    {
      "albumId": 2,
      "id": 63,
      "title": "facere animi autem quod dolor",
      "url": "http://placehold.it/600/4e557c",
      "thumbnailUrl": "http://placehold.it/150/4e557c"
    },
    {
      "albumId": 2,
      "id": 64,
      "title": "doloremque culpa quia",
      "url": "http://placehold.it/600/cd5a92",
      "thumbnailUrl": "http://placehold.it/150/cd5a92"
    },
    {
      "albumId": 2,
      "id": 65,
      "title": "sed voluptatum enim eaque cumque qui sunt",
      "url": "http://placehold.it/600/149540",
      "thumbnailUrl": "http://placehold.it/150/149540"
    },
    {
      "albumId": 2,
      "id": 66,
      "title": "provident rerum voluptatem illo asperiores qui maiores",
      "url": "http://placehold.it/600/ee0a7e",
      "thumbnailUrl": "http://placehold.it/150/ee0a7e"
    },
    {
      "albumId": 2,
      "id": 67,
      "title": "veritatis labore ipsum unde aut quam dolores",
      "url": "http://placehold.it/600/1279e9",
      "thumbnailUrl": "http://placehold.it/150/1279e9"
    },
    {
      "albumId": 2,
      "id": 68,
      "title": "architecto aut quod qui ullam vitae expedita delectus",
      "url": "http://placehold.it/600/e9603b",
      "thumbnailUrl": "http://placehold.it/150/e9603b"
    },
    {
      "albumId": 2,
      "id": 69,
      "title": "et autem dolores aut porro est qui",
      "url": "http://placehold.it/600/46e3b1",
      "thumbnailUrl": "http://placehold.it/150/46e3b1"
    },
    {
      "albumId": 2,
      "id": 70,
      "title": "quam quos dolor eum ea in",
      "url": "http://placehold.it/600/7375af",
      "thumbnailUrl": "http://placehold.it/150/7375af"
    },
    {
      "albumId": 2,
      "id": 71,
      "title": "illo qui vel laboriosam vel fugit deserunt",
      "url": "http://placehold.it/600/363789",
      "thumbnailUrl": "http://placehold.it/150/363789"
    },
    {
      "albumId": 2,
      "id": 72,
      "title": "iusto sint enim nesciunt facilis exercitationem",
      "url": "http://placehold.it/600/45935c",
      "thumbnailUrl": "http://placehold.it/150/45935c"
    },
    {
      "albumId": 2,
      "id": 73,
      "title": "rerum exercitationem libero dolor",
      "url": "http://placehold.it/600/1224bd",
      "thumbnailUrl": "http://placehold.it/150/1224bd"
    },
    {
      "albumId": 2,
      "id": 74,
      "title": "eligendi quas consequatur aut consequuntur",
      "url": "http://placehold.it/600/65ac19",
      "thumbnailUrl": "http://placehold.it/150/65ac19"
    },
    {
      "albumId": 2,
      "id": 75,
      "title": "aut magni quibusdam cupiditate ea",
      "url": "http://placehold.it/600/a9ef52",
      "thumbnailUrl": "http://placehold.it/150/a9ef52"
    },
    {
      "albumId": 2,
      "id": 76,
      "title": "magni nulla et dolores",
      "url": "http://placehold.it/600/7644fe",
      "thumbnailUrl": "http://placehold.it/150/7644fe"
    },
    {
      "albumId": 2,
      "id": 77,
      "title": "ipsum consequatur vel omnis mollitia repellat dolores quasi",
      "url": "http://placehold.it/600/36d137",
      "thumbnailUrl": "http://placehold.it/150/36d137"
    },
    {
      "albumId": 2,
      "id": 78,
      "title": "aperiam aut est amet tenetur et dolorem",
      "url": "http://placehold.it/600/637984",
      "thumbnailUrl": "http://placehold.it/150/637984"
    },
    {
      "albumId": 2,
      "id": 79,
      "title": "est vel et laboriosam quo aspernatur distinctio molestiae",
      "url": "http://placehold.it/600/c611a9",
      "thumbnailUrl": "http://placehold.it/150/c611a9"
    },
    {
      "albumId": 2,
      "id": 80,
      "title": "et corrupti nihil cumque",
      "url": "http://placehold.it/600/a0c998",
      "thumbnailUrl": "http://placehold.it/150/a0c998"
    },
    {
      "albumId": 2,
      "id": 81,
      "title": "error magni fugiat dolorem impedit molestiae illo ullam debitis",
      "url": "http://placehold.it/600/31a74c",
      "thumbnailUrl": "http://placehold.it/150/31a74c"
    },
    {
      "albumId": 2,
      "id": 82,
      "title": "voluptate voluptas molestias vitae illo iusto",
      "url": "http://placehold.it/600/88b703",
      "thumbnailUrl": "http://placehold.it/150/88b703"
    },
    {
      "albumId": 2,
      "id": 83,
      "title": "quia quasi enim voluptatem repellat sit sint",
      "url": "http://placehold.it/600/a19891",
      "thumbnailUrl": "http://placehold.it/150/a19891"
    },
    {
      "albumId": 2,
      "id": 84,
      "title": "aliquam dolorem ut modi ratione et assumenda impedit",
      "url": "http://placehold.it/600/b5205d",
      "thumbnailUrl": "http://placehold.it/150/b5205d"
    },
    {
      "albumId": 2,
      "id": 85,
      "title": "ullam delectus architecto sint error",
      "url": "http://placehold.it/600/eb7e7f",
      "thumbnailUrl": "http://placehold.it/150/eb7e7f"
    },
    {
      "albumId": 2,
      "id": 86,
      "title": "qui vel ut odio consequuntur",
      "url": "http://placehold.it/600/fd5751",
      "thumbnailUrl": "http://placehold.it/150/fd5751"
    },
    {
      "albumId": 2,
      "id": 87,
      "title": "eos nihil sunt accusantium omnis",
      "url": "http://placehold.it/600/224566",
      "thumbnailUrl": "http://placehold.it/150/224566"
    },
    {
      "albumId": 2,
      "id": 88,
      "title": "inventore veritatis magnam enim quasi",
      "url": "http://placehold.it/600/75334a",
      "thumbnailUrl": "http://placehold.it/150/75334a"
    },
    {
      "albumId": 2,
      "id": 89,
      "title": "id at cum incidunt nulla dolor vero tenetur",
      "url": "http://placehold.it/600/21d35",
      "thumbnailUrl": "http://placehold.it/150/21d35"
    },
    {
      "albumId": 2,
      "id": 90,
      "title": "et quae eligendi vitae maxime in",
      "url": "http://placehold.it/600/bfe0dc",
      "thumbnailUrl": "http://placehold.it/150/bfe0dc"
    },
    {
      "albumId": 2,
      "id": 91,
      "title": "sunt quo laborum commodi porro consequatur nam delectus et",
      "url": "http://placehold.it/600/40591",
      "thumbnailUrl": "http://placehold.it/150/40591"
    },
    {
      "albumId": 2,
      "id": 92,
      "title": "quod non quae",
      "url": "http://placehold.it/600/de79c7",
      "thumbnailUrl": "http://placehold.it/150/de79c7"
    },
    {
      "albumId": 2,
      "id": 93,
      "title": "molestias et aliquam natus repellendus accusamus dolore",
      "url": "http://placehold.it/600/2edde0",
      "thumbnailUrl": "http://placehold.it/150/2edde0"
    },
    {
      "albumId": 2,
      "id": 94,
      "title": "et quisquam aspernatur",
      "url": "http://placehold.it/600/cc12f5",
      "thumbnailUrl": "http://placehold.it/150/cc12f5"
    },
    {
      "albumId": 2,
      "id": 95,
      "title": "magni odio non",
      "url": "http://placehold.it/600/9cda61",
      "thumbnailUrl": "http://placehold.it/150/9cda61"
    },
    {
      "albumId": 2,
      "id": 96,
      "title": "dolore esse a in eos sed",
      "url": "http://placehold.it/600/1fb08b",
      "thumbnailUrl": "http://placehold.it/150/1fb08b"
    },
    {
      "albumId": 2,
      "id": 97,
      "title": "labore magnam officiis nemo et",
      "url": "http://placehold.it/600/e2223e",
      "thumbnailUrl": "http://placehold.it/150/e2223e"
    },
    {
      "albumId": 2,
      "id": 98,
      "title": "sed commodi libero id nesciunt modi vitae",
      "url": "http://placehold.it/600/a77d08",
      "thumbnailUrl": "http://placehold.it/150/a77d08"
    },
    {
      "albumId": 2,
      "id": 99,
      "title": "magnam dolor sed enim vel optio consequuntur",
      "url": "http://placehold.it/600/b04f2e",
      "thumbnailUrl": "http://placehold.it/150/b04f2e"
    },
    {
      "albumId": 2,
      "id": 100,
      "title": "et qui rerum",
      "url": "http://placehold.it/600/14ba42",
      "thumbnailUrl": "http://placehold.it/150/14ba42"
    },
    {
      "albumId": 3,
      "id": 101,
      "title": "incidunt alias vel enim",
      "url": "http://placehold.it/600/e743b",
      "thumbnailUrl": "http://placehold.it/150/e743b"
    },
    {
      "albumId": 3,
      "id": 102,
      "title": "eaque iste corporis tempora vero distinctio consequuntur nisi nesciunt",
      "url": "http://placehold.it/600/a393af",
      "thumbnailUrl": "http://placehold.it/150/a393af"
    },
    {
      "albumId": 3,
      "id": 103,
      "title": "et eius nisi in ut reprehenderit labore eum",
      "url": "http://placehold.it/600/35cedf",
      "thumbnailUrl": "http://placehold.it/150/35cedf"
    },
    {
      "albumId": 3,
      "id": 104,
      "title": "et natus vero quia totam aut et minima",
      "url": "http://placehold.it/600/313b40",
      "thumbnailUrl": "http://placehold.it/150/313b40"
    },
    {
      "albumId": 3,
      "id": 105,
      "title": "veritatis numquam eius",
      "url": "http://placehold.it/600/eaf2e1",
      "thumbnailUrl": "http://placehold.it/150/eaf2e1"
    },
    {
      "albumId": 3,
      "id": 106,
      "title": "repellat molestiae nihil iste autem blanditiis officiis",
      "url": "http://placehold.it/600/b1f841",
      "thumbnailUrl": "http://placehold.it/150/b1f841"
    },
    {
      "albumId": 3,
      "id": 107,
      "title": "maiores ipsa ut autem",
      "url": "http://placehold.it/600/50d332",
      "thumbnailUrl": "http://placehold.it/150/50d332"
    },
    {
      "albumId": 3,
      "id": 108,
      "title": "qui tempora vel exercitationem harum iusto voluptas incidunt",
      "url": "http://placehold.it/600/627495",
      "thumbnailUrl": "http://placehold.it/150/627495"
    },
    {
      "albumId": 3,
      "id": 109,
      "title": "quidem ut quos non qui debitis exercitationem",
      "url": "http://placehold.it/600/c5e1ce",
      "thumbnailUrl": "http://placehold.it/150/c5e1ce"
    },
    {
      "albumId": 3,
      "id": 110,
      "title": "reiciendis et velit laborum recusandae",
      "url": "http://placehold.it/600/2f9e30",
      "thumbnailUrl": "http://placehold.it/150/2f9e30"
    },
    {
      "albumId": 3,
      "id": 111,
      "title": "quos rem nulla ea amet",
      "url": "http://placehold.it/600/cc178e",
      "thumbnailUrl": "http://placehold.it/150/cc178e"
    },
    {
      "albumId": 3,
      "id": 112,
      "title": "laudantium quibusdam inventore",
      "url": "http://placehold.it/600/170690",
      "thumbnailUrl": "http://placehold.it/150/170690"
    },
    {
      "albumId": 3,
      "id": 113,
      "title": "hic nulla consectetur",
      "url": "http://placehold.it/600/1dff02",
      "thumbnailUrl": "http://placehold.it/150/1dff02"
    },
    {
      "albumId": 3,
      "id": 114,
      "title": "consequatur quaerat sunt et",
      "url": "http://placehold.it/600/e79b4e",
      "thumbnailUrl": "http://placehold.it/150/e79b4e"
    },
    {
      "albumId": 3,
      "id": 115,
      "title": "unde minus molestias",
      "url": "http://placehold.it/600/da7ddf",
      "thumbnailUrl": "http://placehold.it/150/da7ddf"
    },
    {
      "albumId": 3,
      "id": 116,
      "title": "et iure eius enim explicabo",
      "url": "http://placehold.it/600/aac33b",
      "thumbnailUrl": "http://placehold.it/150/aac33b"
    },
    {
      "albumId": 3,
      "id": 117,
      "title": "dolore quo nemo omnis odio et iure explicabo",
      "url": "http://placehold.it/600/b2fe8",
      "thumbnailUrl": "http://placehold.it/150/b2fe8"
    },
    {
      "albumId": 3,
      "id": 118,
      "title": "et doloremque excepturi libero earum",
      "url": "http://placehold.it/600/eb76bc",
      "thumbnailUrl": "http://placehold.it/150/eb76bc"
    },
    {
      "albumId": 3,
      "id": 119,
      "title": "quisquam error consequatur",
      "url": "http://placehold.it/600/61918f",
      "thumbnailUrl": "http://placehold.it/150/61918f"
    },
    {
      "albumId": 3,
      "id": 120,
      "title": "eos quia minima modi cumque illo odit consequatur vero",
      "url": "http://placehold.it/600/3ee01c",
      "thumbnailUrl": "http://placehold.it/150/3ee01c"
    },
    {
      "albumId": 3,
      "id": 121,
      "title": "commodi sed enim sint in nobis",
      "url": "http://placehold.it/600/fd8ae7",
      "thumbnailUrl": "http://placehold.it/150/fd8ae7"
    },
    {
      "albumId": 3,
      "id": 122,
      "title": "consequatur quos odio harum alias",
      "url": "http://placehold.it/600/949d2f",
      "thumbnailUrl": "http://placehold.it/150/949d2f"
    },
    {
      "albumId": 3,
      "id": 123,
      "title": "fuga sint ipsa quis",
      "url": "http://placehold.it/600/ecef3e",
      "thumbnailUrl": "http://placehold.it/150/ecef3e"
    },
    {
      "albumId": 3,
      "id": 124,
      "title": "officiis similique autem unde repellendus",
      "url": "http://placehold.it/600/bc8f1d",
      "thumbnailUrl": "http://placehold.it/150/bc8f1d"
    },
    {
      "albumId": 3,
      "id": 125,
      "title": "et fuga perspiciatis qui quis",
      "url": "http://placehold.it/600/d0882c",
      "thumbnailUrl": "http://placehold.it/150/d0882c"
    },
    {
      "albumId": 3,
      "id": 126,
      "title": "id reiciendis neque voluptas explicabo quae",
      "url": "http://placehold.it/600/7ef62f",
      "thumbnailUrl": "http://placehold.it/150/7ef62f"
    },
    {
      "albumId": 3,
      "id": 127,
      "title": "magnam quia sed aspernatur",
      "url": "http://placehold.it/600/74456b",
      "thumbnailUrl": "http://placehold.it/150/74456b"
    },
    {
      "albumId": 3,
      "id": 128,
      "title": "est facere ut nam repellat numquam quia quia eos",
      "url": "http://placehold.it/600/b0931d",
      "thumbnailUrl": "http://placehold.it/150/b0931d"
    },
    {
      "albumId": 3,
      "id": 129,
      "title": "alias mollitia voluptatum soluta quod",
      "url": "http://placehold.it/600/5efeca",
      "thumbnailUrl": "http://placehold.it/150/5efeca"
    },
    {
      "albumId": 3,
      "id": 130,
      "title": "maxime provident eaque sapiente ipsa ducimus",
      "url": "http://placehold.it/600/89afb1",
      "thumbnailUrl": "http://placehold.it/150/89afb1"
    },
    {
      "albumId": 3,
      "id": 131,
      "title": "qui sed ex",
      "url": "http://placehold.it/600/af2618",
      "thumbnailUrl": "http://placehold.it/150/af2618"
    },
    {
      "albumId": 3,
      "id": 132,
      "title": "repellendus velit id non veniam dolorum quod est",
      "url": "http://placehold.it/600/f9a540",
      "thumbnailUrl": "http://placehold.it/150/f9a540"
    },
    {
      "albumId": 3,
      "id": 133,
      "title": "placeat in reprehenderit",
      "url": "http://placehold.it/600/f8ee8a",
      "thumbnailUrl": "http://placehold.it/150/f8ee8a"
    },
    {
      "albumId": 3,
      "id": 134,
      "title": "eveniet perspiciatis optio est qui ea dolore",
      "url": "http://placehold.it/600/496b8d",
      "thumbnailUrl": "http://placehold.it/150/496b8d"
    },
    {
      "albumId": 3,
      "id": 135,
      "title": "qui harum quis ipsum optio ex",
      "url": "http://placehold.it/600/26016b",
      "thumbnailUrl": "http://placehold.it/150/26016b"
    },
    {
      "albumId": 3,
      "id": 136,
      "title": "aut voluptas aut temporibus",
      "url": "http://placehold.it/600/2e1c14",
      "thumbnailUrl": "http://placehold.it/150/2e1c14"
    },
    {
      "albumId": 3,
      "id": 137,
      "title": "et sit earum praesentium quas quis sint et",
      "url": "http://placehold.it/600/41c3dc",
      "thumbnailUrl": "http://placehold.it/150/41c3dc"
    },
    {
      "albumId": 3,
      "id": 138,
      "title": "vitae delectus sed",
      "url": "http://placehold.it/600/ff79d0",
      "thumbnailUrl": "http://placehold.it/150/ff79d0"
    },
    {
      "albumId": 3,
      "id": 139,
      "title": "velit placeat optio corrupti",
      "url": "http://placehold.it/600/ff2fe8",
      "thumbnailUrl": "http://placehold.it/150/ff2fe8"
    },
    {
      "albumId": 3,
      "id": 140,
      "title": "assumenda sit non debitis dolorem saepe quae deleniti",
      "url": "http://placehold.it/600/c0798a",
      "thumbnailUrl": "http://placehold.it/150/c0798a"
    },
    {
      "albumId": 3,
      "id": 141,
      "title": "commodi eum dolorum reiciendis unde ut",
      "url": "http://placehold.it/600/b13ff6",
      "thumbnailUrl": "http://placehold.it/150/b13ff6"
    },
    {
      "albumId": 3,
      "id": 142,
      "title": "reprehenderit totam dolor itaque",
      "url": "http://placehold.it/600/c7a96d",
      "thumbnailUrl": "http://placehold.it/150/c7a96d"
    },
    {
      "albumId": 3,
      "id": 143,
      "title": "totam temporibus eaque est eum et perspiciatis ullam",
      "url": "http://placehold.it/600/79439b",
      "thumbnailUrl": "http://placehold.it/150/79439b"
    },
    {
      "albumId": 3,
      "id": 144,
      "title": "aspernatur possimus consectetur in tempore distinctio a ipsa officiis",
      "url": "http://placehold.it/600/66a752",
      "thumbnailUrl": "http://placehold.it/150/66a752"
    },
    {
      "albumId": 3,
      "id": 145,
      "title": "eius unde ipsa incidunt corrupti quia accusamus omnis",
      "url": "http://placehold.it/600/f3472e",
      "thumbnailUrl": "http://placehold.it/150/f3472e"
    },
    {
      "albumId": 3,
      "id": 146,
      "title": "ullam dolor ut ipsa veniam",
      "url": "http://placehold.it/600/6c746e",
      "thumbnailUrl": "http://placehold.it/150/6c746e"
    },
    {
      "albumId": 3,
      "id": 147,
      "title": "minima aspernatur eius nemo ut",
      "url": "http://placehold.it/600/661f4c",
      "thumbnailUrl": "http://placehold.it/150/661f4c"
    },
    {
      "albumId": 3,
      "id": 148,
      "title": "aperiam amet est occaecati quae non ut",
      "url": "http://placehold.it/600/b9d67e",
      "thumbnailUrl": "http://placehold.it/150/b9d67e"
    },
    {
      "albumId": 3,
      "id": 149,
      "title": "saepe recusandae ut odio enim ipsa quo placeat iusto",
      "url": "http://placehold.it/600/cffa9b",
      "thumbnailUrl": "http://placehold.it/150/cffa9b"
    },
    {
      "albumId": 3,
      "id": 150,
      "title": "ipsum numquam ratione facilis provident animi reprehenderit ut",
      "url": "http://placehold.it/600/3689cd",
      "thumbnailUrl": "http://placehold.it/150/3689cd"
    },
    {
      "albumId": 4,
      "id": 151,
      "title": "possimus dolor minima provident ipsam",
      "url": "http://placehold.it/600/1d2ad4",
      "thumbnailUrl": "http://placehold.it/150/1d2ad4"
    },
    {
      "albumId": 4,
      "id": 152,
      "title": "et accusantium enim pariatur eum nihil fugit",
      "url": "http://placehold.it/600/a01c5b",
      "thumbnailUrl": "http://placehold.it/150/a01c5b"
    },
    {
      "albumId": 4,
      "id": 153,
      "title": "eum laborum in sunt ea",
      "url": "http://placehold.it/600/9da52c",
      "thumbnailUrl": "http://placehold.it/150/9da52c"
    },
    {
      "albumId": 4,
      "id": 154,
      "title": "dolorum ipsam odit",
      "url": "http://placehold.it/600/7f330f",
      "thumbnailUrl": "http://placehold.it/150/7f330f"
    },
    {
      "albumId": 4,
      "id": 155,
      "title": "occaecati sed earum ab ut vel quibusdam perferendis nihil",
      "url": "http://placehold.it/600/877cd8",
      "thumbnailUrl": "http://placehold.it/150/877cd8"
    },
    {
      "albumId": 4,
      "id": 156,
      "title": "sed quia accusantium nemo placeat dolor ut",
      "url": "http://placehold.it/600/11af10",
      "thumbnailUrl": "http://placehold.it/150/11af10"
    },
    {
      "albumId": 4,
      "id": 157,
      "title": "nisi odio nihil molestias facere laudantium distinctio facilis et",
      "url": "http://placehold.it/600/211c94",
      "thumbnailUrl": "http://placehold.it/150/211c94"
    },
    {
      "albumId": 4,
      "id": 158,
      "title": "qui autem adipisci veritatis iure necessitatibus et ab voluptatem",
      "url": "http://placehold.it/600/5fa928",
      "thumbnailUrl": "http://placehold.it/150/5fa928"
    },
    {
      "albumId": 4,
      "id": 159,
      "title": "est ad molestiae ut voluptatum omnis sit consequuntur et",
      "url": "http://placehold.it/600/3587a",
      "thumbnailUrl": "http://placehold.it/150/3587a"
    },
    {
      "albumId": 4,
      "id": 160,
      "title": "sequi maiores aut sunt",
      "url": "http://placehold.it/600/170b0e",
      "thumbnailUrl": "http://placehold.it/150/170b0e"
    },
    {
      "albumId": 4,
      "id": 161,
      "title": "aliquid aut at sed repudiandae est autem",
      "url": "http://placehold.it/600/739fba",
      "thumbnailUrl": "http://placehold.it/150/739fba"
    },
    {
      "albumId": 4,
      "id": 162,
      "title": "et iste aliquam laboriosam et",
      "url": "http://placehold.it/600/2b0599",
      "thumbnailUrl": "http://placehold.it/150/2b0599"
    },
    {
      "albumId": 4,
      "id": 163,
      "title": "est eos ducimus consequatur est",
      "url": "http://placehold.it/600/aae0f3",
      "thumbnailUrl": "http://placehold.it/150/aae0f3"
    },
    {
      "albumId": 4,
      "id": 164,
      "title": "aut quia enim id neque expedita aliquid",
      "url": "http://placehold.it/600/939eae",
      "thumbnailUrl": "http://placehold.it/150/939eae"
    },
    {
      "albumId": 4,
      "id": 165,
      "title": "voluptas dolorem rerum similique quis id unde",
      "url": "http://placehold.it/600/1b5aec",
      "thumbnailUrl": "http://placehold.it/150/1b5aec"
    },
    {
      "albumId": 4,
      "id": 166,
      "title": "harum accusamus asperiores",
      "url": "http://placehold.it/600/74c0c4",
      "thumbnailUrl": "http://placehold.it/150/74c0c4"
    },
    {
      "albumId": 4,
      "id": 167,
      "title": "et fugit et eius quod provident",
      "url": "http://placehold.it/600/3b4a81",
      "thumbnailUrl": "http://placehold.it/150/3b4a81"
    },
    {
      "albumId": 4,
      "id": 168,
      "title": "fugit ad atque excepturi",
      "url": "http://placehold.it/600/e20f7b",
      "thumbnailUrl": "http://placehold.it/150/e20f7b"
    },
    {
      "albumId": 4,
      "id": 169,
      "title": "enim asperiores libero ratione voluptatibus alias facilis in voluptatem",
      "url": "http://placehold.it/600/e55524",
      "thumbnailUrl": "http://placehold.it/150/e55524"
    },
    {
      "albumId": 4,
      "id": 170,
      "title": "placeat fugit voluptatum cupiditate nemo aut",
      "url": "http://placehold.it/600/e959e4",
      "thumbnailUrl": "http://placehold.it/150/e959e4"
    },
    {
      "albumId": 4,
      "id": 171,
      "title": "nemo tenetur ipsam",
      "url": "http://placehold.it/600/3bb51b",
      "thumbnailUrl": "http://placehold.it/150/3bb51b"
    },
    {
      "albumId": 4,
      "id": 172,
      "title": "deserunt commodi et aut et molestiae debitis et sed",
      "url": "http://placehold.it/600/d611bd",
      "thumbnailUrl": "http://placehold.it/150/d611bd"
    },
    {
      "albumId": 4,
      "id": 173,
      "title": "cupiditate tempore debitis quas quis recusandae facilis esse",
      "url": "http://placehold.it/600/240f8e",
      "thumbnailUrl": "http://placehold.it/150/240f8e"
    },
    {
      "albumId": 4,
      "id": 174,
      "title": "assumenda sed deleniti",
      "url": "http://placehold.it/600/44ed94",
      "thumbnailUrl": "http://placehold.it/150/44ed94"
    },
    {
      "albumId": 4,
      "id": 175,
      "title": "est ab sed repellendus labore sit modi aperiam",
      "url": "http://placehold.it/600/a06f8a",
      "thumbnailUrl": "http://placehold.it/150/a06f8a"
    },
    {
      "albumId": 4,
      "id": 176,
      "title": "aut omnis qui et est molestiae distinctio atque",
      "url": "http://placehold.it/600/d6dc09",
      "thumbnailUrl": "http://placehold.it/150/d6dc09"
    },
    {
      "albumId": 4,
      "id": 177,
      "title": "ratione autem magni eveniet voluptas quia corporis",
      "url": "http://placehold.it/600/37942b",
      "thumbnailUrl": "http://placehold.it/150/37942b"
    },
    {
      "albumId": 4,
      "id": 178,
      "title": "laboriosam nihil cum provident id quo",
      "url": "http://placehold.it/600/b80430",
      "thumbnailUrl": "http://placehold.it/150/b80430"
    },
    {
      "albumId": 4,
      "id": 179,
      "title": "pariatur nesciunt temporibus ipsam ut maiores labore",
      "url": "http://placehold.it/600/a29d32",
      "thumbnailUrl": "http://placehold.it/150/a29d32"
    },
    {
      "albumId": 4,
      "id": 180,
      "title": "temporibus aliquam vel et consequuntur minima voluptate sunt",
      "url": "http://placehold.it/600/727ca8",
      "thumbnailUrl": "http://placehold.it/150/727ca8"
    },
    {
      "albumId": 4,
      "id": 181,
      "title": "sed animi et sed",
      "url": "http://placehold.it/600/808e8c",
      "thumbnailUrl": "http://placehold.it/150/808e8c"
    },
    {
      "albumId": 4,
      "id": 182,
      "title": "non aut facilis nihil aliquid sequi quae aut soluta",
      "url": "http://placehold.it/600/10e0b8",
      "thumbnailUrl": "http://placehold.it/150/10e0b8"
    },
    {
      "albumId": 4,
      "id": 183,
      "title": "voluptas necessitatibus ut",
      "url": "http://placehold.it/600/4dc2b9",
      "thumbnailUrl": "http://placehold.it/150/4dc2b9"
    },
    {
      "albumId": 4,
      "id": 184,
      "title": "deleniti enim aliquid sequi",
      "url": "http://placehold.it/600/f0d2f4",
      "thumbnailUrl": "http://placehold.it/150/f0d2f4"
    },
    {
      "albumId": 4,
      "id": 185,
      "title": "at voluptatem repellat et voluptas eum est ipsum et",
      "url": "http://placehold.it/600/d032c4",
      "thumbnailUrl": "http://placehold.it/150/d032c4"
    },
    {
      "albumId": 4,
      "id": 186,
      "title": "incidunt sed libero non necessitatibus",
      "url": "http://placehold.it/600/75999a",
      "thumbnailUrl": "http://placehold.it/150/75999a"
    },
    {
      "albumId": 4,
      "id": 187,
      "title": "et aut ad dolor nam",
      "url": "http://placehold.it/600/f63b02",
      "thumbnailUrl": "http://placehold.it/150/f63b02"
    },
    {
      "albumId": 4,
      "id": 188,
      "title": "quae accusamus voluptas aperiam est amet",
      "url": "http://placehold.it/600/40bdc9",
      "thumbnailUrl": "http://placehold.it/150/40bdc9"
    }
]

const albums = [
  {
    "userId": 1,
    "id": 1,
    "title": "quidem molestiae enim"
  },
  {
    "userId": 1,
    "id": 2,
    "title": "sunt qui excepturi placeat culpa"
  },
  {
    "userId": 1,
    "id": 3,
    "title": "omnis laborum odio"
  },
  {
    "userId": 1,
    "id": 4,
    "title": "non esse culpa molestiae omnis sed optio"
  }
]

app.get('/photos/', (req, res) => {
    res.send(JSON.stringify(photos));
});

app.get('/albums/', (req, res) => {
  res.send(JSON.stringify(albums));
});

//Vet att det är en dålig grej att låta id=index, men hårdkodad data är hårdkodad data..
app.get('/albums/:albumId/', (req, res) => {
  res.send(JSON.stringify(albums[req.params.albumId - 1]));
});

//Samma som ovan
app.get('/photos/:photoId/', (req, res) => {
  res.send(JSON.stringify(photos[req.params.photoId - 1]));
});



const server = app.listen(8080, () => {
  const host = server.address().address;
  const port = server.address().port;

  console.log(`insert-album API listening at http://${host}:${port}`);
});