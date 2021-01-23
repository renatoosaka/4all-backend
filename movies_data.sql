CREATE DATABASE 4alldev CHARACTER SET utf8 COLLATE utf8_general_ci;

insert into movies (id, title, director)
values
  ('a2d3425a-5bec-11eb-99ab-0242ac110002', '12 Angry Men', 'Sidney Lumet'),
  ('a2d343b4-5bec-11eb-99ab-0242ac110002', 'Pulp Fiction', 'Quentin Tarantino'),
  ('a2d3428b-5bec-11eb-99ab-0242ac110002', 'Schindler\'s List', 'Steven Spielberg'),
  ('a2d34228-5bec-11eb-99ab-0242ac110002', 'The Dark Knight', 'Christopher Nolan'),
  ('a2d3413f-5bec-11eb-99ab-0242ac110002', 'The Godfather', 'Francis Ford Coppola'),
  ('a2d341e8-5bec-11eb-99ab-0242ac110002', 'The Godfather: Part II', 'Francis Ford Coppola'),
  ('a2d3447f-5bec-11eb-99ab-0242ac110002', 'The Good, the Bad and the Ugly', 'Sergio Leone'),
  ('a2d344cd-5bec-11eb-99ab-0242ac110002', 'The Lord of the Rings: The Fellowship of the Ring', 'Peter Jackson'),
  ('a2d3434d-5bec-11eb-99ab-0242ac110002', 'The Lord of the Rings: The Return of the King', 'Peter Jackson'),
  ('a2d33f6c-5bec-11eb-99ab-0242ac110002', 'The Shawshank Redemption', 'Frank Darabont');

insert into copies(id, movie_id, type)
values
	(UUID(), 'a2d3425a-5bec-11eb-99ab-0242ac110002', 'VHS'),
  (UUID(), 'a2d3425a-5bec-11eb-99ab-0242ac110002', 'DVD'),

  (UUID(), 'a2d343b4-5bec-11eb-99ab-0242ac110002', 'VHS'),


	(UUID(), 'a2d3428b-5bec-11eb-99ab-0242ac110002', 'VHS'),
	(UUID(), 'a2d3428b-5bec-11eb-99ab-0242ac110002', 'VHS'),
	(UUID(), 'a2d3428b-5bec-11eb-99ab-0242ac110002', 'VHS'),
	(UUID(), 'a2d3428b-5bec-11eb-99ab-0242ac110002', 'DVD'),
	(UUID(), 'a2d3428b-5bec-11eb-99ab-0242ac110002', 'BLURAY'),


	(UUID(), 'a2d34228-5bec-11eb-99ab-0242ac110002', 'DVD'),
	(UUID(), 'a2d34228-5bec-11eb-99ab-0242ac110002', 'BLURAY'),

	(UUID(), 'a2d3413f-5bec-11eb-99ab-0242ac110002', 'VHS'),
	(UUID(), 'a2d3413f-5bec-11eb-99ab-0242ac110002', 'VHS'),

	(UUID(), 'a2d341e8-5bec-11eb-99ab-0242ac110002', 'VHS'),

  (UUID(), 'a2d3447f-5bec-11eb-99ab-0242ac110002', 'DVD'),
  (UUID(), 'a2d3447f-5bec-11eb-99ab-0242ac110002', 'DVD'),
  (UUID(), 'a2d3447f-5bec-11eb-99ab-0242ac110002', 'DVD'),

	(UUID(), 'a2d344cd-5bec-11eb-99ab-0242ac110002', 'DVD'),
	(UUID(), 'a2d344cd-5bec-11eb-99ab-0242ac110002', 'DVD'),
	(UUID(), 'a2d344cd-5bec-11eb-99ab-0242ac110002', 'DVD'),
	(UUID(), 'a2d344cd-5bec-11eb-99ab-0242ac110002', 'DVD'),
	(UUID(), 'a2d344cd-5bec-11eb-99ab-0242ac110002', 'DVD'),

	(UUID(), 'a2d3434d-5bec-11eb-99ab-0242ac110002', 'DVD'),
	(UUID(), 'a2d3434d-5bec-11eb-99ab-0242ac110002', 'BLURAY'),
	(UUID(), 'a2d3434d-5bec-11eb-99ab-0242ac110002', 'BLURAY'),
	(UUID(), 'a2d3434d-5bec-11eb-99ab-0242ac110002', 'BLURAY'),

	(UUID(), 'a2d33f6c-5bec-11eb-99ab-0242ac110002', 'VHS');
