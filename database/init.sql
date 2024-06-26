-- CREATE ROLE TABLE
CREATE TABLE public."role" (
	id int4 NOT NULL GENERATED BY DEFAULT AS IDENTITY( INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START 1 CACHE 1 NO CYCLE),
	"role" varchar(64) NOT NULL,
	CONSTRAINT role_pkey PRIMARY KEY (id)
);
COPY role
FROM '/docker-entrypoint-initdb.d/role.csv'
DELIMITER ','
CSV HEADER;


-- CREATE STAFF TABLE
CREATE TABLE public.staff (
	id serial4 NOT NULL,
	first_name varchar(50) NULL,
	last_name varchar(50) NULL,
	"position" varchar(50) NULL,
	contact_number varchar(15) NULL,
	email varchar(100) NULL UNIQUE,
	"password" varchar(255) NOT NULL,
	"role" int4 NULL,
	CONSTRAINT staff_pkey PRIMARY KEY (id),
	CONSTRAINT staff_role_3154953b_fk_role_id FOREIGN KEY ("role") REFERENCES public."role"(id) DEFERRABLE INITIALLY DEFERRED
);
CREATE INDEX staff_role_3154953b ON public.staff USING btree (role);
COPY staff
FROM '/docker-entrypoint-initdb.d/staff.csv'
DELIMITER ','
CSV HEADER;