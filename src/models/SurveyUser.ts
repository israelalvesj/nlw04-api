import { Column, Entity, PrimaryColumn } from "typeorm";


@Entity("surveys_users")
class SurveyUser {

 @PrimaryColumn()
 readonly id: string;

 @Column()
 user_id: string;

 @Column()
 survey_id: string;
 


}

export {SurveyUser}