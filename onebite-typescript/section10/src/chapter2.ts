/**
 * Pick<T, K>
 * 뽑다, 고르다
 * 객체 타입으로부터 특정 프로퍼티만 딱 골라내는 타입
 */

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

// in 연산자 우측에는 스트링 리터럴 유니온 타입이 들어올 수 있다.
// string | number | simbol  ----> 타입을 제한해야한다
// K extends 'title' | 'tags' | 'content' 'thumbnailURL'
// ( 'title' | 'tags' ) extends 서브타입 ( 'title' | 'tags' | 'content' 'thumbnailURL' )
type Pick<T, K extends keyof T> = {
  [key in K]: T[key];
};

const legacyPost: Pick<Post, "title" | "content"> = {
  title: "옛날 글",
  content: "옛날 콘텐츠",
};

/**
 * Omit<T, K>
 * 생략하다, 빼다
 * 객체 타입으로부터 특정 프로퍼티를 제거하는 타입
 */

// const noTitlePost: Pick<Post, "content" | "tags" | "thumbnailURL"> = {
// T = Post, K = "title"
// Pick<Post, Exclude<keyof Post, "title">>
//       Pick<Post, Exclude<"title" | "content" | "tags" | "thumbnailURL", "title">
// ====> Pick<Post, Exclude<"content" | "tags" | "thumbnailURL" >
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

const noTitlePost: Omit<Post, "title"> = {
  content: "",
  tags: [],
  thumbnailURL: "",
};

/**
 * Record<K, V>
 * 객체 타입을 정의할 때 인덱스 시그니처처럼 유연하지만 제한적인 타입
 */

type ThumbnailLegacy = {
  large: {
    url: string;
  };
  medium: {
    url: string;
  };
  small: {
    url: string;
  };
  watch: {
    url: string;
  };
};

// K = 어떤 객체의 key 타입
type Record<K extends keyof any, V> = {
  [key in K]: V;
};

type Thumbnail = Record<
  "large" | "medium" | "small",
  { url: string; size: number }
>;
