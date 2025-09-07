ALTER TABLE "challengeOptions" RENAME TO "challenge_o   ptions";--> statement-breakpoint
ALTER TABLE "challengeProgress" RENAME TO "challenge_progress";--> statement-breakpoint
ALTER TABLE "challenge_o   ptions" DROP CONSTRAINT "challengeOptions_challenge_id_challenges_id_fk";
--> statement-breakpoint
ALTER TABLE "challenge_progress" DROP CONSTRAINT "challengeProgress_challenge_id_challenges_id_fk";
--> statement-breakpoint
ALTER TABLE "challenge_o   ptions" ADD CONSTRAINT "challenge_o   ptions_challenge_id_challenges_id_fk" FOREIGN KEY ("challenge_id") REFERENCES "public"."challenges"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "challenge_progress" ADD CONSTRAINT "challenge_progress_challenge_id_challenges_id_fk" FOREIGN KEY ("challenge_id") REFERENCES "public"."challenges"("id") ON DELETE cascade ON UPDATE no action;