export interface Aya {
    id: number;
    chapter_id?:number;
    verse_number?:number;
    verse_key:number;
    text_uthmani?:string;
    juz_number:number;
    hizb_number:number;
    rub_number:number;
    sajdah_number:number;
    sajdah_type:string;
    page_number:number;
    audio?:{
        url?:string;
        duration?:string;
        format?:string;
    }

}