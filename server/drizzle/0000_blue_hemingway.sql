CREATE TABLE "users" (
	"user_id" varchar PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"picture" varchar(255),
	"email" varchar NOT NULL,
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
