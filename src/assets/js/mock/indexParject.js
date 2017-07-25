import Mock from 'mockjs';
let Random = Mock.Random;

export const indexProject = [
        {
            path: '/json/indexProject.json',
            data: {
                'new|3': [
                    {
                        'id': Random.integer(0, 100),
                        'name': Random.ctitle(3, 4),
                        'EsName': Random.string('upper', 3, 4),
                        'title': Random.ctitle(),
                        'Introduction': Random.cparagraph(),
                        'schedule': Random.integer(0, 100),
                        'aims': Random.integer(0, 100),
                        'complete': Random.integer(0, 200),
                        'img': Random.image(),
                        'status': Random.integer(0, 4),
                        'type': Random.ctitle(2, 5)
                    },
                ],
                'hot': {
                    'id': Random.integer(0, 100),
                    'name': Random.ctitle(3, 4),
                    'EsName': Random.string('upper', 3, 4),
                    'title': Random.ctitle(),
                    'Introduction': Random.cparagraph(),
                    'schedule': Random.integer(0, 100),
                    'aims': Random.integer(0, 100),
                    'complete': Random.integer(0, 200),
                    'img': Random.image(),
                    'status': Random.integer(0, 4),
                    'type': Random.ctitle(2, 5)
                }
            }
        }
    ]
;