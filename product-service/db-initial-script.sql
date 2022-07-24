create extension if not exists "uuid-ossp"

create table products (
	id uuid primary key default uuid_generate_v4(),
	title text not null,
	description text,
	price integer
)

create table stocks (
	product_id uuid,
	count integer,
	foreign key ("product_id") references "products" ("id")
)

insert into products (title, description, price) values 
('Samyang', 'Extra spicy with chicken flavour', 120),
('Nongshim', 'Balanced taste with beef flavour', 80),
('Jhin', 'Light taste with cheese flavour', 70),
('Shin', 'Most popular and affordable', 50),
('Ottogi', 'Spicy taste with seafood flavour ', 90)

-- id values will be changed after each script execution
--insert into stocks (product_id, count) values 
--('29f41c02-1342-443f-95bb-c9c116b1439a', 2000),
--('80c99544-bacb-4642-85e8-42091ae7c3b4', 1000),
--('8a076b7b-a8b4-4e04-9eb9-a9d598af60a5', 3000),
--('d7d66879-4a61-4362-9b61-5eb7336eb572', 5000),
--('ea39ffd8-a3b6-4f98-bc9e-2d468bc094ea', 1500)
