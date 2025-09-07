ALTER TABLE "challenge_o   ptions" RENAME TO "challenge_options";--> statement-breakpoint
ALTER TABLE "challenge_options" DROP CONSTRAINT "challenge_o   ptions_challenge_id_challenges_id_fk";
--> statement-breakpoint
ALTER TABLE "challenge_options" ADD CONSTRAINT "challenge_options_challenge_id_challenges_id_fk" FOREIGN KEY ("challenge_id") REFERENCES "public"."challenges"("id") ON DELETE cascade ON UPDATE no action;