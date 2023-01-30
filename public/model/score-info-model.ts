/**
 * 表示用ランニングスコア
 */
export interface DispRunningScoreModel {
    /** 1回表 */
    TopOfThe1: number;
    /** 1回裏 */
    BottomOfThe1: number;
    /** 2回表 */
    TopOfThe2: number;
    /** 2回裏 */
    BottomOfThe2: number;
    /** 3回表 */
    TopOfThe3: number;
    /** 3回裏 */
    BottomOfThe3: number;
    /** 4回表 */
    TopOfThe4: number;
    /** 4回裏 */
    BottomOfThe4: number;
    /** 5回表 */
    TopOfThe5: number;
    /** 5回裏 */
    BottomOfThe5: number;
    /** 6回表 */
    TopOfThe6: number;
    /** 6回裏 */
    BottomOfThe6: number;
    /** 7回表 */
    TopOfThe7: number;
    /** 7回裏 */
    BottomOfThe7: number;
    /** 8回表 */
    TopOfThe8: number;
    /** 8回裏 */
    BottomOfThe8: number;
    /** 9回表 */
    TopOfThe9: number;
    /** 9回裏 */
    BottomOfThe9: number;
}

/**
 * ランニングスコア
 */
export interface RunningScoreModel {
    /** ビジタースコア */
    VisiterScore: number[];
    /** ホームスコア */
    HomeScore: number[];
    /** ビジター合計 */
    VisiterR: number;
    /** ホーム合計 */
    HomeR: number;
    /** ビジター安打 */
    VisiterH: number;
    /** ホーム安打 */
    HomeH: number;
    /** ビジター失策 */
    VisiterE: number;
    /** ホーム失策 */
    HomeE: number;
    /** ビジター残塁 */
    VisiterLOB: number;
    /** ホーム残塁 */
    HomeLOB: number;
}

/**
 * 試合メイン情報
 */
export interface GameMainInfoModel {
    /** イニング上限 */
    InningLimit: number;
    /** 現在のイニング */
    NowInning: number
    /** 攻撃中チーム */
    NowAttackTeam: number;
}

/**
 * カウント
 */
export interface CountModel {
    /** ボール */
    Ball: number;
    /** ストライク */
    Strike: number;
    /** アウト */
    Out: number;
}