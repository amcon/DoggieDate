BEGIN;

TRUNCATE members, dogs, d_attrs, dog_attr_refs RESTART IDENTITY CASCADE;

INSERT INTO members(first, last, username, password, email, zip, picture) VALUES
('Matt', 'Bedell', 'matt', '12345', 'matt@bedell.co', '07030', 'http://assets.fratmusic.com.s3-us-west-2.amazonaws.com/cover/1429651747-Prison_Mike.jpg'),
('Aaron', 'Conklin', 'aConklin', 'hash12345', 'conklin.aaron@gmail.com', '10010', null),
('Shmaaron', 'Shmonklin', 'eyyyyyy', 'efjijefiof', 'eoieioiv.aaron@gmail.com', '10010', null),
('Aa', 'Covdjoidin', 'aConkvdolin', 'hashooo12345', 'conklijicin.aaron@gmail.com', '10010', null);

INSERT INTO dogs (member_id, name, age, weight, picture) VALUES
(1, 'Tucker', 16, 20, 'https://lh4.googleusercontent.com/VqnbS5_cVCQqQW8f8_Ly2uVoLPbUCo0ySg8JRHoPDSyXgXQ5xqzZw9xc5-8s59uEQZIz_XLn1cBeeHw=w2560-h1452-rw'),
(1, 'Luigi', 10, 10, null),
(2, 'Frenchy', 1, 10, null);

INSERT INTO d_attrs (attribute, attr_catagory) VALUES
('chase', 'activities'),
('fetch', 'activities'),
('running', 'activities'),
('walking', 'activities'),
('biking', 'activities'),
('hiking', 'activities'),
('wrestling', 'activities'),
('exploring', 'activities'),

('mellow', 'temperament'),
('shy', 'temperament'),
('confident', 'temperament'),
('fearful', 'temperament'),
('frantic', 'temperament'),
('high energy', 'temperament'),
('low energy', 'temperament'),

('tennis balls', 'interests'),
('sticks', 'interests'),
('bacon', 'interests'),
('getting pet', 'interests'),
('digging', 'interests'),
('sniffing', 'interests'),
('hanging out', 'interests');

INSERT INTO dog_attr_refs (dog_id, attr_id) VALUES
(1, 4),
(1, 6),
(1, 11),
(1, 21),
(1, 22),
(2, 2),
(2, 4),
(2, 10),
(2, 12),
(2, 16),
(2, 18),
(2, 19),
(3, 4),
(3, 5),
(3, 9),
(3, 14),
(3, 18),
(3, 19),
(3, 22);

COMMIT;
