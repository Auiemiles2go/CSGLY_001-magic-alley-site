const __PACK_CFG__ = /*__PACK_CFG__*/ {
  "appVersion": "1",
  "appVersionID": "9224",
  "gameVersion": "1",
  "appName": "开个小店",
  "cpID": "9805",
  "channel": "OPPO",
  "companyCode": "yqwl",
  "companyName": "北京元气网络科技有限公司",
  "servicePhone": "4006008066",
  "ruanZhuCompany": "北京璀璨时空科技有限公司",
  "ruanZhuCode": "2024SR0412757",
  "shiLingAge": "8",
  "shiLingContent": "这是测试",
  "defaultID": "2774321;3182743;3182755",
  "isFreeAd": true,
  "isPackA": true,
  "replaceSDKJS": {
    "pullUpPackName": "",
    "gameSnsAppId": ""
  }
};

! function () {
    "use strict";
    class e {
        constructor() {
            this._listerners = {}
        }
        init() {}
        static getIns() {
            return this._ins || (this._ins = new e, this._ins.init()), this._ins
        }
        addEventListerner(e, t, i = null) {
            if (!e) return void console.error("事件名为空:", e);
            this._listerners[e] || (this._listerners[e] = []);
            this._listerners[e];
            let a = new s;
            a.event_name = e, a.caller = i, a.method = t, this._listerners[e].push(a)
        }
        removeEventListerner(e, t, s) {
            if (e && this._listerners[e]) {
                let i = this._listerners[e];
                for (let e = i.length - 1; e >= 0; e--) i[e].caller == s && t == i[e].method && i.splice(e, 1)
            }
        }
        removeAllEventListerners() {
            this._listerners = {}
        }
        hasEventListerner(e) {
            return this._listerners[e]
        }
        dispatchEvent(e, t = null) {
            if (e && this._listerners[e]) {
                let t = this._listerners[e],
                    s = [];
                for (let e = 1; e < arguments.length; e++) s.push(arguments[e]);
                for (let e = 0; e < t.length; e++) t[e].method.apply(t[e].caller, s)
            }
        }
    }
    class s {}
    class i {}
    i.EN_COIN_CHANGED = "EN_COIN_CHANGED", i.EN_POWER_CHANGED = "EN_POWER_CHANGED", i.EN_CHANGE_STAR = "EN_CHANGE_STAR", i.EN_GAMEPAUSE = "EN_GAMEPAUSE", i.GAMESTART = "GAMESTART", i.EN_SHOW_BANNER_AD = "EN_SHOW_BANNER_AD", i.END_CHECK_OVER = "END_CHECK_OVER", i.EN_HIDE_BANNER_AD = "EN_HIDE_BANNER_AD", i.OUTGAME = "OUTGAME", i.ENTERGAME = "ENTERGAME", i.EN_LEVELUP = "EN_LEVELUP", i.LOADMAPEND = "LOADMAPEND", i.USEEFFECTEND = "USEEFFECTEND", i.WAITERUPDATE = "WAITERUPDATE", i.PRODUCTSPEEDUP = "PRODUCTSPEEDUP", i.PLAYERCARRYUP = "PLAYERCARRYUP", i.SHOWWAITEREF = "SHOWWAITEREF", i.BUILDUP = "BUILDUP", i.MISCLICKBANNER = "MISCLICKBANNER";
    class a {}
    a.resPath = "sub/online/Sprites/Conventional/{0}.lh", a.itemPath = "prefab/item/{0}.json", a.skinPath = "sub/online/Skin/icon/{0}.png", a.scenePath = "sub/online/Sprites/Conventional/{0}.ls", a.sceneFormat = "sub/online/Sprites/Conventional/{0}.ls", a.iconPath = "sub/online/Skin/pic/{0}.png", a.itemIconPath = "page/gameView/itemIcon/{0}.png", a.productIcon = "page/pageUpLv/icon/{0}.png";
    class r {}
    r.player = Laya.Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER2, r.Store = Laya.Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER6, r.createPos = Laya.Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER1, r.money = Laya.Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER4, r.ray = Laya.Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER7, r.item = Laya.Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER3, r.rayTarget = Laya.Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER5, r.ob = Laya.Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER8, r.wall1 = Laya.Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER9, r.all = Laya.Physics3DUtils.COLLISIONFILTERGROUP_ALLFILTER;
    class h {}
    h.hint = 9, h.ShowModel = 10, h.player = 11, h.Evolution = 12;
    class l {
        constructor() {
            this.subMgr = null, this.plat = 0
        }
        static getIns() {
            return this.instance || (this.instance = new l), this.instance
        }
        init() {
            xs.getIns().isVIVOPlatform() ? this.plat = 3 : xs.getIns().isOPPOPlatform() ? this.plat = 2 : xs.getIns().isWXPlatform() ? this.plat = 1 : xs.getIns().isTTPlatform() ? this.plat = 4 : this.plat = 0
        }
        setMgr(e) {
            this.subMgr = e
        }
        Aufromvidio() {
            if (this.checkPlat() && 4 == this.plat) {
                let e = window.tt.getLaunchOptionsSync(),
                    t = "";
                e.group_id && (t = e.group_id), "023001" != e.scene && "023002" != e.scene || this.reportAnalytics("aufromvideo", {
                    videoid: t
                })
            }
        }
        Enter_click(e) {
            this.checkPlat() && this.subMgr.appOnce({
                actionNumber: e
            })
        }
        EnterAction(e, t) {
            this.checkPlat() && this.subMgr.action({
                actionNumber: e,
                actionType: t
            })
        }
        Video_show(e) {
            this.checkPlat() && this.subMgr.adVideo({
                type: e,
                subType: 7
            })
        }
        Video_broadcast(e, t) {
            this.checkPlat() && this.subMgr.adVideo({
                type: e,
                subType: t
            })
        }
        Level_show(e) {
            this.checkPlat() && this.subMgr.battle({
                logType: 1,
                battleType: 100,
                battleId: e.lv + 100 + ""
            })
        }
        Level_win(e) {
            this.checkPlat() && this.subMgr.battle({
                logType: 2,
                battleType: 100,
                battleId: e.lv + 100 + ""
            })
        }
        Level_fail(e) {
            this.checkPlat() && this.subMgr.battle({
                logType: 3,
                battleType: 100,
                battleId: e.lv + 100 + ""
            })
        }
        Screen_show(e) {
            this.checkPlat()
        }
        Screenc_click(e) {
            this.checkPlat()
        }
        Screen_get(e) {
            this.checkPlat()
        }
        Screen_over(e) {
            this.reportAnalytics("screen_over", {
                user: e
            })
        }
        Screen_fail(e, t) {
            let s = {};
            if (1 == t) s.get_fail = e;
            else {
                if (2 != t) return void console.error("提交失败", t);
                s.publish_fail = e
            }
            this.reportAnalytics("screen_fail", t)
        }
        reportAnalytics(e, t) {
            this.checkPlat()
        }
        checkPlat() {
            return this.subMgr
        }
        umRuning(e, t) {
            if (1 == this.plat) {
                window.wx.uma.trackEvent("event_park_" + e, {
                    buildCount: t
                })
            }
        }
        gameStartSumbit(e) {}
        umLevel(e, t) {
            if (1 == this.plat) {
                window.wx.uma.trackEvent(e, {
                    "LevelCount:": t
                })
            }
        }
    }
    class d {
        constructor() {
            this.isshowFullMatrix = !1
        }
        static getIns() {
            return this.instance || (this.instance = new d, this.instance.init()), this.instance
        }
        init() {}
        showFullMatrix(e) {
            Cs.getIns().handlerFun(e)
        }
        showExitView(e) {
            Cs.getIns().handlerFun(e)
        }
        showAdFullView(e) {
            Cs.getIns().handlerFun(e)
        }
        showMoreAd(e) {
            Cs.getIns().handlerFun(e)
        }
        showNewFullAd(e) {
            Cs.getIns().handlerFun(e)
        }
    }
    class u {
        static getIns() {
            return this.instance || (this.instance = new u, this.instance.init()), this.instance
        }
        init() {}
        gameStartSumbit(e) {}
        gameEndSumbit(e) {}
    }
    u.instance = null;
    class g {
        init(e) {
            let t = Object.keys(e),
                s = null;
            for (let i = 0; i < t.length; i++) this[s = t[i]] = e[s]
        }
    }
    class p {
        constructor() {
            this.maxId = 0, this.datas = []
        }
        isMaxById(e) {
            return this.maxId <= e
        }
        init(e) {
            for (let t = 0; t < e.length; t++) {
                let s = e[t],
                    i = this.getConfigTarget();
                i.init(s), this.datas.push(i)
            }
            0 != this.datas.length && (this.maxId = this.datas[this.datas.length - 1].id)
        }
        getDataById(e) {
            for (let t = 0; t < this.datas.length; t++)
                if (this.datas[t].id == e) return this.datas[t];
            return console.error("不存在id:", e), null
        }
        getConfigTarget() {
            return null
        }
        getAllDatas() {
            return this.datas
        }
        hasId(e) {
            for (let t = 0; t < this.datas.length; t++)
                if (this.datas[t].id == e) return !0;
            return !1
        }
        getMaxId() {
            return this.maxId
        }
    }
    class m extends p {
        static get ins() {
            return this._ins || (this._ins = new m), this._ins
        }
        getConfigTarget() {
            return new I
        }
    }
    class I extends g {}
    class y extends p {
        static get ins() {
            return this._ins || (this._ins = new y), this._ins
        }
        getConfigTarget() {
            return new w
        }
    }
    class w extends g {}
    class f {
        static getIns() {
            return this.ins || (this.ins = new f, this.ins.init()), this.ins
        }
        init() {
            let e = xs.getIns().getPlat();
            // e && e.createInnerAudioContext && (this.audioContext = e.createInnerAudioContext(), this.audioContext.onError(e => {
            //     console.error(e)
            // }))
        }
        playSound(e, t = 1) {
           ks.getIns().isSoundEnable() && Laya.SoundManager.playSound(e, t)
        }
        stopSound(e) {
           
        }
        stopAllSounds() {
            Laya.SoundManager.stopAllSound()
        }
        playMusic(e, t = 0) {
            if (ks.getIns().isSoundEnable()){
                Laya.SoundManager.playMusic(e, 0)
            }
            // if (!xs.getIns().is233Platform() && (this.stopMusic(), this.musicUrl = e, ks.getIns().isSoundEnable()))
            //     if (this.audioContext) {
            //         if (this.audioContext.src == e) return void this.audioContext.play();
            //         this.audioContext.src = e, this.audioContext.startTime = 0, this.audioContext.loop = !0, this.audioContext.autoplay = !0
            //     } else Laya.SoundManager.playMusic(e, t)
        }
        stopMusic(e = null) {
            // xs.getIns().is233Platform() || (this.musicUrl = null, this.audioContext ? this.audioContext.stop() : Laya.SoundManager.stopMusic())
            Laya.SoundManager.stopMusic()
        }
        pauseMusic() {
            console.log("==pauseMusic=")
            Laya.SoundManager.stopMusic()
        }
        resumeMusic() {
            ks.getIns().isSoundEnable() &&  this.playMusic(P.SN_Mp3.format("gameBg"))
        }
        setSoundEnable(e) {
            ks.getIns().isSoundEnable() !== e && (ks.getIns().setSoundEnable(e), e ? this.resumeMusic() : (this.stopAllSounds(), this.pauseMusic()))
        }
        isSoundEnable() {
            return ks.getIns().isSoundEnable()
        }
    }
    class P {
        static getSoundPath(e) {
            return this.SN_Mp3.format(e)
        }
    }
    P.SN_BG = "sub/online/GAudio/gameBg.mp3", P.SN_FAIL = "sub/online/GAudio/fail.mp3", P.SN_SUCC = "sub/online/GAudio/cheer.mp3", P.SN_Mp3 = "sub/online/GAudio/{0}.mp3", P.SN_CLICK = "sub/online/GAudio/click.mp3", P.gold = "sub/online/GAudio/gold.mp3", P.createBuild = "sub/online/GAudio/createBuild.mp3", P.shengxing = "sub/online/GAudio/shengxing.mp3", P.revivecoin = "sub/online/GAudio/revivecoin.mp3";
    class C extends Laya.Script {
        constructor() {
            super(), this.tweenAnimType = "none", this.ttType = "scale", this.wxType = "scale", this.oppoType = "scale", this.vivoType = "scale", this.qqType = "scale", this.hwType = "scale", this.winType = "scale"
        }
        onAwake() {
            this.init()
        }
        init() {
            xs.getIns().isWXPlatform() ? this.tweenAnimType = this.wxType : xs.getIns().isQQPlatform() ? this.tweenAnimType = this.qqType : xs.getIns().isOPPOPlatform() ? this.tweenAnimType = this.oppoType : xs.getIns().isVIVOPlatform() ? this.tweenAnimType = this.vivoType : xs.getIns().isTTPlatform() ? this.tweenAnimType = this.ttType : (xs.getIns().isWINPlatform(), this.tweenAnimType = this.winType)
        }
        playTween() {
            "scale" == this.tweenAnimType ? Cs.getIns().setBtnScaleTween(this.owner) : "shake" == this.tweenAnimType && Cs.getIns().setBtnShake(this.owner)
        }
        endTween() {
            Cs.getIns().closeBtnTween(this.owner)
        }
    }
    class v extends Laya.Script {
        constructor() {
            super(...arguments), this.stepKey = -1
        }
        init() {}
        resigstBtn() {
            B.TeachMgr.ins.addTeachBtn(this)
        }
        unResigstBtn() {
            B.TeachMgr.ins.removeTeachBtn(this)
        }
        getStepKey() {
            return this.stepKey
        }
    }
    class T extends p {
        static get ins() {
            return this._ins || (this._ins = new T), this._ins
        }
        getConfigTarget() {
            return new S
        }
    }
    class S extends g {}
    class k extends Laya.Script {
        constructor() {
            super(...arguments), this.teachBtns = [], this.curTeachId = null, this.curTeachKey = null, this.waitEnableTeachId = null, this.waitEnableTeachKey = null, this.teachEnableFun = new Object
        }
        init() {}
        checkStartTeach() {
            0 != ks.getIns().getCurTeachId() || this.enableTeachStep(1)
        }
        addTeachFun(e, t) {
            this.teachEnableFun[e] || (this.teachEnableFun[e] = []), this.teachEnableFun[e].push(t)
        }
        exeTeachFun(e) {
            if (this.teachEnableFun[e]) {
                let t = this.teachEnableFun[e];
                for (let e = 0; e < t.length; e++) Cs.getIns().handlerFun(t[e])
            }
        }
        removeTeachFun(e, t) {
            if (this.teachEnableFun[e]) {
                let s = this.teachEnableFun[e].indexOf(t);
                s >= 0 && this.teachEnableFun[e].splice(s, 1)
            }
        }
        addTeachBtn(e) {
            this.teachBtns.indexOf(e) < 0 && (this.teachBtns.push(e), this.waitEnableTeachKey && this.waitEnableTeachKey == e.getStepKey() && (this.enableTeachStep(this.waitEnableTeachId), this.waitEnableTeachId = null, this.waitEnableTeachKey = null))
        }
        getCurTeachId() {
            return this.curTeachId
        }
        getWaitEnableTeachKey() {
            return this.waitEnableTeachKey
        }
        getCurTeachKey() {
            return this.curTeachKey
        }
        removeTeachBtn(e) {
            let t = this.teachBtns.indexOf(e);
            t >= 0 && this.teachBtns.splice(t, 1)
        }
        enableTeachStep(e) {
            let t = T.ins.getDataById(e);
            if (!t) return void console.error("激活教程问题：", e);
            let s = t.btnKey,
                i = this.getTeachBtn(s);
            if (!i) return this.waitEnableTeachId = e, void(this.waitEnableTeachKey = s);
            1 == t.isPause && ut.getIns().gamePause(), this.curTeachId = e, this.curTeachKey = s;
            let a = new Object;
            a.target = i, Y.UIMgr.ins.openUI(Y.UIType.TeachView, a), this.exeTeachFun(s)
        }
        getTeachBtn(e) {
            for (let t = 0; t < this.teachBtns.length; t++)
                if (this.teachBtns[t].getStepKey() == e) return this.teachBtns[t];
            return null
        }
        closeTeachStep(e) {
            if (!this.curTeachId) return;
            let t = this.curTeachId;
            ks.getIns().setTeachId(t), this.clearTeachCache();
            let s = T.ins.getDataById(t);
            if (1 == s.isPause && ut.getIns().gameResume(), !s || s && s.btnKey != e) return void console.error("教程关闭问题:", e, t);
            this.teachSumbit(t);
            let i = s.nextId;
            if (-2 == i) i = s.id + 1;
            else if (-1 == i) return;
            T.ins.getDataById(i) ? this.enableTeachStep(i) : Y.UIMgr.ins.closeUI(Y.UIType.TeachView)
        }
        teachSumbit(e) {
            1 == e ? l.getIns().Enter_click(4) : 2 == e ? l.getIns().Enter_click(5) : 8 == e && l.getIns().Enter_click(6)
        }
        clearTeachCache() {
            this.curTeachKey = null, this.curTeachId = null
        }
        teachViewCloseStep() {
            let e = Y.UIMgr.ins.getPageByName(Y.UIType.TeachView);
            e ? e.closeFun() : console.error("教程界面不存在")
        }
        closeCurTeachStep() {
            this.curTeachKey && this.teachViewCloseStep()
        }
        hasTeach() {
            return null != this.curTeachId
        }
    }
    var B;
    ! function (e) {
        e.TeachMgr = class extends k {
            static get ins() {
                return this._ins || (this._ins = new k, this._ins.init()), this._ins
            }
        };
        e.TeachBtn = class extends v {}
    }(B || (B = {}));
    class L extends Laya.Script {
        constructor() {
            super(...arguments), this.isShowTop = !1, this.isShowBottom = !1, this.chineseName = "基类", this.isOpen = !1, this.pageName = null, this.viewProp = {}, this.isAddListerener = !1, this.adObj = {
                num: 0
            }, this.showMore = !1, this.isPartPage = !1, this.pageOpenCallBack = null, this.isAutoExeOpenCallBack = !0, this.isAutoDestroy = !0, this.isNeedTween = !1, this.isDealAdView = !0, this.nodeTween = [], this.tweenBg = null, this.autoDepth = !0, this.teachBtns = [], this.isShowLeftBar = !1, this.useNodeTween = !1, this.tweenOpenVals = [], this.tweenCloseVals = []
        }
        insertVal() {
            let e = [];
            Cs.getIns().getChildBySgin(this.owner, Y.UIType.nodeSgin, e);
            for (var t = 0; t < e.length; t++) {
                this.viewProp[e[t].name] = e[t];
                let s = e[t].getComponent(C);
                s && (s.init(), this.nodeTween.push(s));
                let i = e[t].getComponent(B.TeachBtn);
                i && (i.init(), this.teachBtns.push(i))
            }
        }
        pageInit() {
            this._node = this.owner, this.insertVal(), this.tweenBg = Cs.getIns().seekNodeByName(this.owner, "m_tween_bg"), this.tweenOpenVals.push({
                time: 300,
                prop: {
                    scaleX: .3,
                    scaleY: .3
                },
                ease: Laya.Ease.expoOut
            }), this.tweenOpenVals.push({
                time: 300,
                prop: {
                    scaleX: 1,
                    scaleY: 1
                },
                ease: Laya.Ease.expoOut
            }), this.tweenCloseVals.push({
                time: 150,
                prop: {
                    scaleX: 1,
                    scaleY: 1
                },
                ease: Laya.Ease.backIn
            }), this.tweenCloseVals.push({
                time: 150,
                prop: {
                    scaleX: 0,
                    scaleY: 0
                },
                ease: Laya.Ease.backIn
            })
        }
        addListerner() {
            this.isAddListerener = !0
        }
        pagePreload(e) {
            Cs.getIns().handlerFun(e)
        }
        tweenClose(e) {
            if (this.isNeedTween && this.tweenCloseVals.length > 0) {
                let t = this.tweenBg ? this.tweenBg : this.owner;
                Y.UIMgr.ins.tweenScale(t, this, !1, e)
            } else Cs.getIns().handlerFun(e)
        }
        tweenOpen(e) {
            if (this.isNeedTween && this.tweenCloseVals.length > 0) {
                let t = this.tweenBg ? this.tweenBg : this.owner;
                Y.UIMgr.ins.tweenScale(t, this, !0, e)
            } else Cs.getIns().handlerFun(e)
        }
        hightPageClose(e) {}
        hightPageOpen(e) {}
        pageOpen(e) {
            this._node.visible = !0, this.isAddListerener || this.addListerner(), this.isOpen = !0, this.playNodeTween()
        }
        pageOpenTweenOver() {
            this.resigstBtn(), Cs.getIns().handlerFun(this.pageOpenCallBack, this)
        }
        resigstBtn() {
            for (let e = 0; e < this.teachBtns.length; e++) this.teachBtns[e].resigstBtn()
        }
        unResigstBtn() {
            for (let e = 0; e < this.teachBtns.length; e++) this.teachBtns[e].unResigstBtn()
        }
        playNodeTween() {
            for (var e = 0; e < this.nodeTween.length; e++) this.nodeTween[e].playTween()
        }
        closeNodeTween() {
            for (var e = 0; e < this.nodeTween.length; e++) this.nodeTween[e].endTween()
        }
        showAdCallBack() {
            xs.getIns().isWXPlatform() && ct.getIns().desBanner()
        }
        pageClose() {
            this.isAddListerener && this.removeListerner(), this.isOpen = !1, this._node.visible = !1, this.closeNodeTween(), this.unResigstBtn()
        }
        removeListerner() {
            this.isAddListerener = !1
        }
        pageDestroy() {
            this.isOpen && this.pageClose()
        }
        setPageOpenCallBack(e) {
            this.pageOpenCallBack = e
        }
        depChangeCallBack() {}
    }
    class A {
        constructor() {
            this.keys = [], this.items = {}
        }
        addKey(e, t) {
            if (this.hasKey(e)) return console.error("字典有相同的键值:", e), !1;
            this.keys.push(e), this.items[e] = t
        }
        getValue(e) {
            return this.items[e]
        }
        hasKey(e) {
            return -1 != this.keys.indexOf(e)
        }
        removeKey(e) {
            let t = this.keys.indexOf(e);
            t >= 0 && (this.keys.splice(t, 1), delete this.items[e])
        }
        getCount() {
            return this.keys.length
        }
        getKeys() {
            return this.keys
        }
        getValues() {
            let e = [];
            for (let t = 0; t < this.keys.length; t++) e.push(this.items[this.keys[t]]);
            return e
        }
        sortByKey() {}
        sortByValue() {}
        clear() {
            this.keys = [], this.items = {}
        }
    }
    class _ {
        constructor() {
            this.initTweenVals = [], this.tweenVals = [], this.tweenIndex = 0, this.endBackFun = null, this.targets = [], this.isLoop = !1, this.isPlayTween = !1, this.cTween = [], this.autoRet = !1, this.delayTime = 0, this.playTimes = 1, this.curPlayerTimes = 0
        }
        setLoop(e) {
            this.isLoop = e
        }
        setTarget(e) {
            this.targets.indexOf(e) < 0 && this.targets.push(e)
        }
        clearTarget() {
            this.targets.splice(0, this.targets.length)
        }
        setTweenVals(e) {
            this.initTweenVals = e, this.tweenVals = e
        }
        setReverse(e) {
            this.tweenVals = e ? this.initTweenVals.slice(0).reverse() : this.initTweenVals
        }
        setEndCallBack(e) {
            this.endBackFun = e
        }
        reset() {
            if (!this.checkTarget()) return;
            this.curPlayerTimes = 0, this.tweenIndex = 0;
            let e = this.tweenVals[this.tweenIndex].prop,
                t = Object.keys(e);
            for (let s = 0; s < t.length; s++) {
                let i = t[s];
                for (let t = 0; t < this.targets.length; t++) this.targets[t][i] = e[i]
            }
            this.tweenIndex++
        }
        checkTarget() {
            let e = !0;
            for (let e = this.targets.length - 1; e >= 0; e--) {
                let t = this.targets[e];
                t && !t.destroyed || this.targets.splice(e, 1)
            }
            return (e = 0 != this.targets.length) || (e = 0 != this.tweenVals.length), e
        }
        play() {
            this.isPlayTween || this.checkTarget() && (this.reset(), this.isPlayTween = !0, 0 != this.delayTime ? Laya.timer.once(this.delayTime, this, () => {
                this.doNext()
            }) : this.doNext())
        }
        autoReset(e) {
            this.autoRet = e
        }
        setPlayTimes(e) {
            this.playTimes = e
        }
        doNext() {
            if (!this.checkTarget()) return;
            if (!this.isPlayTween) return;
            if (this.tweenIndex >= this.tweenVals.length) {
                if (this.curPlayerTimes++, !(this.isLoop || this.curPlayerTimes < this.playTimes)) return void this.end();
                if (!this.isPlayTween) return;
                this.autoRet ? this.reset() : this.tweenIndex = 0
            }
            let e = this.tweenVals[this.tweenIndex].time,
                t = this.tweenVals[this.tweenIndex].prop,
                s = this.tweenVals[this.tweenIndex].ease;
            this.clearTween();
            for (let i = 0; i < this.targets.length; i++) 0 == i ? this.cTween.push(Laya.Tween.to(this.targets[i], t, e, s, Laya.Handler.create(this, this._doNext), 0, !0, !1)) : this.cTween.push(Laya.Tween.to(this.targets[i], t, e, s, null, 0, !0, !1))
        }
        _doNext() {
            this.isPlayTween && (this.tweenIndex++, 0 != this.delayTime && this.tweenIndex >= this.tweenVals.length ? Laya.timer.once(this.delayTime, this, this.doNext) : this.doNext())
        }
        setDelayTime(e) {
            this.delayTime = e
        }
        end() {
            this.isPlayTween = !1, this.clearTween(), Cs.getIns().handlerFun(this.endBackFun)
        }
        clearEndFun() {
            this.endBackFun = null
        }
        clearTween() {
            for (let e = this.cTween.length - 1; e >= 0; e--) this.cTween[e] && this.cTween[e].clear();
            this.cTween.splice(0, this.cTween.length), Laya.timer.clear(this, this.doNext), Laya.timer.clear(this, this._doNext)
        }
        clearVals() {
            this.tweenVals.splice(0, this.tweenVals.length)
        }
    }
    class N {
        constructor() {
            this.tweenPool = []
        }
        static getIns() {
            return this.instance || (this.instance = new N), this.instance
        }
        getTween() {
            let e = null;
            return 0 != this.tweenPool.length ? (e = this.tweenPool[0], this.tweenPool.splice(0, 1)) : e = new _, e
        }
        recycleTween(e) {
            e && (e.setLoop(!1), e.setDelayTime(0), e.clearEndFun(), e.end(), e.clearTarget()), this.tweenPool.indexOf(e) < 0 && this.tweenPool.push(e)
        }
    }
    var x = {
        app_key: "wx6abaedf440b3a931",
        getLocation: !1,
        company: "leiting"
    };

    function _typeof2(e) {
        return Object.prototype.toString(e).slice(8, -1).toLowerCase()
    }
    void 0 !== window.qq && (x.app_key = "");
    var U, M, b, V, D, F, E, O, R, W, G, Y, K, H, X = {};
    X.init = function () {
        console.log("lt sdk not support on windows platform....")
    };
    class z {
        constructor() {
            this.adv_key = "", this.isInit = !1, this.testData = '{"data":{"Status":200,"Info":{"' + this.adv_key + '":[{"adv_id":2021,"appid":"","path":"?wxgamecid=","effect_type":0,"flag_type":0,"logo_attr":["/upload/files/41/.jpg","/upload/files/f9/.png","/upload/files/89/.jpg"],"title":""}]},"Count":{"' + this.adv_key + '":1}}}', this.curExportData = new q
        }
        static get ins() {
            return this._ins || (this._ins = new z), this._ins
        }
        init() {
            xs.getIns().isWXPlatform() ? (X.init(), this.isInit = !0) : xs.getIns().isWINPlatform() && (z.isTest = !0, this.isInit = !0)
        }
        getAdData(e, t) {
            if (!this.isInit) return void(t && t());
            if (z.isTest) {
                let e = JSON.parse(this.testData);
                return this.insertData(e.data, this.curExportData), void(t && t(this.curExportData))
            }
            window.wx.h_GetAdvListPlat({
                adv_key: e,
                success: s => {
                    if (s && s.data) {
                        this.insertData(s.data, this.curExportData), t && t(this.curExportData);
                        let i = this.curExportData.Info.get(e);
                        if (i) {
                            let e = ct.getIns().getAppid();
                            for (let t = i.length - 1; t >= 0; t--) i[t].appid == e && i.splice(t, 1)
                        }
                    } else t && t(null)
                },
                fail: e => {
                    t && t(null)
                }
            })
        }
        getCurAdData() {
            return this.curExportData
        }
        insertData(e, t) {
            t.Status = e.Status, t.Count.set(this.adv_key, e.Count[this.adv_key]), t.Info.set(this.adv_key, e.Info[this.adv_key])
        }
        toSkip(e, t, s) {
            if (e) {
                if (xs.getIns().isWXPlatform()) {
                    let i = window.wx;
                    i.h_ToMinProgram && i.h_ToMinProgram({
                        adv_id: e.adv_id,
                        appId: e.appid,
                        path: e.path,
                        success: () => {
                            t && t(), console.error("跳转成功!")
                        },
                        fail: e => {
                            s && s()
                        }
                    })
                }
            } else console.error("数据不存在!")
        }
    }
    z.isTest = !1;
    class q {
        constructor() {
            this.Count = new Map, this.Info = new Map
        }
    }
    class j {
        static init() {
            if (xs.getIns().getPlat() && (this.G_BaseUrlPath = null), this.G_BaseUrlPath && this.getMiniAdpter()) {
                Laya.URL.basePath = this.G_BaseUrlPath;
                let e = this.G_AppNativefiles,
                    t = this.getMiniAdpter();
                t && (t.nativefiles = t.nativefiles.concat(e), t.AutoCacheDownFile = !0)
            }
        }
        static getMiniAdpter() {
            return Laya.MiniAdpter ? Laya.MiniAdpter : Laya.QQMiniAdapter ? Laya.QQMiniAdapter : Laya.VVMiniAdapter ? Laya.VVMiniAdapter : Laya.QGMiniAdapter ? Laya.QGMiniAdapter : Laya.TTMiniAdapter ? Laya.TTMiniAdapter : Laya.HWMiniAdapter ? Laya.HWMiniAdapter : null
        }
    }
    j.fireVer = "v8", j.appName = "MyMiniPart", j.G_BaseUrlPath = "/",//"" + j.appName + "/" + j.fireVer + "/",
     j.G_AppNativefiles = ["res/sound/", "res/conf/", "res/atlas/", "prefab/", "loading/", "page/", "heyGame/"];
    class Q extends p {
        static get ins() {
            return this._ins || (this._ins = new Q), this._ins
        }
        getConfigTarget() {
            return new J
        }
        getDataByItemType(e) {
            for (let t = 0; t < this.datas.length; t++)
                if (this.datas[t].type == e) return this.datas[t];
            return null
        }
    }
    class J extends g {
        constructor() {
            super(...arguments), this.productId = 0, this.JGBuild = 0
        }
    }
    class Z {
        constructor() {
            this._preloadedAssets = {}, this._inLoadAsset = [], this._inLoadAssetFun = {}, this._nodeRecycle = {}, this.maxLoad = 6, this.curLoadCount = 0, this.readyArray = []
        }
        static getIns() {
            return this._ins || (this._ins = new Z), this._ins
        }
        loadTxt(e, t) {
            if (xs.getIns().getPlat() && xs.getIns().getPlat().getFileSystemManager) {
                xs.getIns().getPlat().getFileSystemManager().readFile({
                    filePath: e,
                    encoding: "utf8",
                    success: e => {
                        Cs.getIns().handlerFun(t, e.data)
                    }
                })
            } else Laya.loader.create(e, Laya.Handler.create(this, e => {
                Cs.getIns().handlerFun(t, e)
            }), null, Laya.Loader.TEXT)
        }
        loadConFigByPath(e, t) {
            this.loadTxt(e, e => {
                Cs.getIns().handlerFun(t, JSON.parse(e))
            })
        }
        preload(e, t) {
            let s = 0,
                i = e.length,
                a = () => {
                    ++s == i && t && t()
                };
            for (let t = 0; t < e.length; t++) this.getAsset[e[t]] ? a() : this.loadAsset(e[t], a)
        }
        getNode(e) {
            let t = this.getRecycleNode(e);
            if (t) t.active = !0;
            else {
                let s = this.getAsset(e);
                if (!s) return console.error("没有预加载该对象:", e), null;
                t = Laya.Sprite3D.instantiate(s, null, !1)
            }
            return t
        }
        loadAsset(e, t) {
            if (this.hasInLoad(e)) this.addInLoadFun(e, t);
            else {
                if (this.curLoadCount >= this.maxLoad) return this.addInReady(e), void this.addInLoadFun(e, t);
                this._inLoadAsset.push(e), this.addInLoadFun(e, t), this.curLoadCount++, Laya.Sprite3D.load(e, Laya.Handler.create(null, t => {
                    this._preloadedAssets[e] = t, this.removeInLoadAsset(e), this.curLoadCount--, this.checkLoad()
                }))
            }
        }
        addInReady(e) {
            this.readyArray.indexOf(e) < 0 && this.readyArray.push(e)
        }
        checkLoad() {
            if (!(this.curLoadCount >= this.maxLoad) && 0 != this.readyArray.length)
                for (let e = 0; e < this.readyArray.length; e++) {
                    if (this.curLoadCount >= this.maxLoad) return;
                    this.loadAsset(this.readyArray.shift(), null)
                }
        }
        hasInLoad(e) {
            return this._inLoadAsset.indexOf(e) >= 0
        }
        addInLoadFun(e, t) {
            t && (this._inLoadAssetFun[e] || (this._inLoadAssetFun[e] = []), this._inLoadAssetFun[e].push(t))
        }
        removeInLoadAsset(e) {
            if (this._inLoadAssetFun[e]) {
                let t = this._inLoadAssetFun[e];
                for (let e = 0; e < t.length; e++) t[e]();
                this._inLoadAssetFun[e] = null
            }
            let t = this._inLoadAsset.indexOf(e);
            t >= 0 && this._inLoadAsset.splice(t, 1)
        }
        getAsset(e) {
            return this._preloadedAssets[e]
        }
        recycleNode(e, t) {
            if (!t) return;
            this._nodeRecycle[e] || (this._nodeRecycle[e] = []), t.active = !1;
            let s = this._nodeRecycle[e];
            s.indexOf(t) < 0 && s.push(t)
        }
        getRecycleNode(e) {
            return this._nodeRecycle[e] && 0 != this._nodeRecycle[e].length ? this._nodeRecycle[e].shift() : null
        }
        canRecycle(e) {}
        printAssets() {
            console.log(this._preloadedAssets)
        }
    }
    class $ {
        static get Ins() {
            return this._ins || (this._ins = new $, this._ins.init()), this._ins
        }
        init() {}
        load3DScenes(e, t) {
            let s = Q.ins.getAllDatas();
            if (0 == s.length) return t && t(1), void Cs.getIns().handlerFun(e);
            let i = s.length,
                n = () => {
                    i--, t && t((s.length - i) / s.length), 0 == i && Cs.getIns().handlerFun(e)
                };
            for (let e = 0; e < s.length; e++) Z.getIns().loadAsset(a.resPath.format(s[e].model), n)
        }
    }
    class ee {
        constructor() {
            this._loaded = !1, this._serverTime = 0, this._passedDays = 0
        }
        static getIns() {
            return this.instance || (this.instance = new ee), this.instance
        }
        getServerTime() {
            return Date.now()
        }
        getCurServerDayOfWeek() {
            let e = this.getServerDate().getDay();
            return 0 === e && (e = 7), e
        }
        getCurServerDayOfMonth() {
            return this.getServerDate().getDate()
        }
        getCurServerDayOfYear() {
            let e = this.getServerDate(),
                t = new Date(e.getFullYear(), 0, 0),
                s = e - t + 60 * (t.getTimezoneOffset() - e.getTimezoneOffset()) * 1e3;
            return Math.floor(s / 864e5) + this._passedDays
        }
        getServerDate() {
            return this._loaded ? new Date(this._serverTime) : new Date
        }
        getCurServerWeekOfYear() {
            var e = this.getServerDate(),
                t = new Date(e.valueOf()),
                s = (e.getDay() + 6) % 7;
            t.setDate(t.getDate() - s + 3);
            var i = t.valueOf();
            return t.setMonth(0, 1), 4 !== t.getDay() && t.setMonth(0, 1 + (4 - t.getDay() + 7) % 7), 1 + Math.ceil((i - t) / 6048e5)
        }
    }
    class te extends p {
        constructor() {
            super(...arguments), this.playerMaxLv = 10
        }
        static get ins() {
            return this._ins || (this._ins = new te), this._ins
        }
        getConfigTarget() {
            return new se
        }
        getBuilDataByType(e) {
            for (let t = 0; t < this.datas.length; t++)
                if (this.datas[t].parkType == e) return this.datas[t];
            return null
        }
    }
    class se extends g {
        constructor() {
            super(...arguments), this.type = 0, this.parkType = 0, this.productTime = 0, this.useGood = 0, this.createGold = 0, this.createCount = 0, this.lvType = 0, this.defContant = 0, this.maxContain = 0, this.defSpeed = 1, this.maxContantLv = 0, this.maxSpeedLv = 0
        }
        getCarryCount(e) {
            let t = this.maxContain - this.defContant;
            t = t * (e - 1) / this.maxContantLv, t = Math.ceil(t);
            let s = Math.ceil(this.defContant + t);
            return s > this.maxContain && (s = this.maxContain), s
        }
    }
    class ie {}
    ie.run = "run", ie.B_idleloop = "B_idleloop", ie.B_run = "B_run", ie.B_walk = "B_walk", ie.U_idleloop = "U_idleloop", ie.U_tuiche = "U_tuiche", ie.U_banyun = "U_banyun", ie.U_gouwu = "U_gouwu", ie.U_idle2 = "U_idle2", ie.U_run = "U_run", ie.U_idle1 = "U_idle1", ie.Box_Open = "Box_Open", ie.Box_Closing = "Box_Close", ie.ShadowClose = "ShadowClose", ie.ShadowActive = "ShadowActive", ie.bingxiangdoorclose = "bingxiangdoorclose", ie.bingxiangdooropen = "bingxiangdooropen", ie.U_work = "U_work", ie.U_fishing = "U_fishing", ie.U_fishing2 = "U_fishing2", ie.U_cut = "U_cut", ie.work = "work", ie.bingxiangclose = "bingxiangclose", ie.bingxiang = "bingxiang";
    class ae extends Laya.Script {
        init() {
            this.node = this.owner, this.node.zOrder = -1
        }
        setPos(e, t) {
            this.node.x = e, this.node.y = t
        }
        setShow(e) {
            this.node.visible = e
        }
        setIndex(e) {
            this.node.zOrder = e
        }
    }
    class ne extends ae {
        init() {
            super.init(), this.m_ad_btn = Cs.getIns().seekNodeByName(this.owner, "m_ad_btn"), this.m_ad_btn.on(Laya.Event.CLICK, this, () => {
                Cs.getIns().shareOrAd(() => {
                    this.adCallBackFun && this.adCallBackFun()
                }, null)
            })
        }
    }
    class re extends Laya.Script3D {
        constructor() {
            super(...arguments), this._animData = new Map, this._body = null, this._anim = null, this.isAct = !1, this._animName = null
        }
        init() {
            if (this._node = this.owner, this._body = Cs.getIns().returnSprite3D(this.owner.getChildByName("Model")), this._body) {
                let e = this._body.getComponent(Laya.Animator);
                e && (this._anim = e, this._anim.cullingMode = Laya.Animator.CULLINGMODE_CULLCOMPLETELY, this.stopAnim())
            }
            this.initAnimEvent()
        }
        initAnimEvent() {
            if (this._anim)
                for (let e = 0; e < 10; e++) {
                    let t = this._anim.getControllerLayer(e);
                    if (!t) break;
                    this._animData.set(e, t._statesMap)
                }
        }
        setLvdata(e) {
            this.lvData = e
        }
        enablePeople() {
            this.isAct || (this.isAct = !0, this.enPeople())
        }
        disablePeople(e = !0) {
            this.isAct && (this.isAct = !1, this.disPeople(), e && this.recycle())
        }
        disPeople() {}
        enPeople() {}
        playAnim(e, t = null, s = !1, i = 1, a = 0, n = !1, r = .2) {
            if (this._anim) {
                this._animName = e;
                let o = this._animData.get(a);
                if (o && o[e] && (n ? this.retSetState() : this._anim.getControllerLayer(a).defaultWeight = a, this._anim.speed = i, s ? this._anim.crossFade(e, r, a, 0) : this._anim.play(e, a, 0), t)) {
                    let s = o[e].clip,
                        a = 1e3 * s.duration() * 1 / i;
                    s.islooping || Laya.timer.once(a, this, () => {
                        Cs.getIns().handlerFun(t)
                    })
                }
            }
        }
        retSetState() {
            for (let e = 0; e < 10; e++) {
                let t = this._anim.getControllerLayer(e);
                t && (t.defaultWeight = 0)
            }
        }
        getAnimIsLoop(e, t = 0) {
            let s = this._animData.get(t);
            if (s && s[e]) {
                return s[e].clip.islooping
            }
            return !1
        }
        playAnimNotSave(e, t, s = !0, i = 1, a = 0) {
            e != this._animName && this.playAnim(e, t, !0, 1, 0)
        }
        getCurAnimName() {
            return this._animName
        }
        stopAnim() {
            this._anim && (this._anim.speed = 0)
        }
        setAnimSpeed(e) {
            this._anim && (this._anim.speed = e)
        }
        getAnimTime(e) {
            return this._animData && this._animData[e] ? this._animData[e].time : 0
        }
        setStartPos(e, t) {
            this._node.transform.position = e.clone(), this._node.transform.rotationEuler = t.clone()
        }
        getPos() {
            return this._node.transform.position
        }
        recycle() {}
        onDestroy() {
            this.disablePeople()
        }
    }
    class oe {
        constructor() {
            this.state = -1
        }
        changeState(e) {
            e != this.state && (this.closeStateFun && this.closeStateFun(this.state), this.state = e, this.changeStateEndFun && this.changeStateEndFun(e))
        }
        setChangeStateEndFun(e) {
            this.changeStateEndFun = e
        }
        setExeStateFun(e) {
            this.exeStateFun = e
        }
        setCloseStateFun(e) {
            this.closeStateFun = e
        }
        exeState() {
            this.exeStateFun && this.exeStateFun(this.state)
        }
        getState() {
            return this.state
        }
    }
    class he extends re {
        constructor() {
            super(...arguments), this.cameraRot = new Laya.Vector3(76, 0, 0), this.cameraOffect = new Laya.Vector3(.03822584077715874, 4.289999961853027, -1.1155890226364136), this.fsm = new oe, this.rotQua = new Laya.Quaternion, this.initHp = 5, this.curHp = this.initHp, this.isDie = !1, this.animSpeed = 0, this.curEatScore = 0, this.nextEatScore = 0, this._moveSpeed = .2, this.normalSpeed = .5, this.moveAddSpeed = 0, this.moveForward = new Laya.Vector3(0, 0, this.moveSpeed), this.lastX = 0, this.isTurn = 0, this.lastForward = new Laya.Vector3, this.lastRotY = 0, this.isAttack = !1, this.isClickDown = !1
        }
        setPlayerData(e) {}
        cutHp(e) {
            this.isDeath() || (this.curHp -= e, this.curHp = this.curHp < 0 ? 0 : this.curHp, this.refershHp(), this.curHp <= 0 && (this.isDie = !0, ut.getIns().gameFail()))
        }
        refershHp() {}
        isDeath() {
            return this.isDie
        }
        gameOver(e) {
            this.rockerUp()
        }
        init() {
            super.init(), this.cam_move_pos = Cs.getIns().seekNodeByName(this.owner, "cam_pos"), this.tempSp = new Laya.Sprite3D("rotSp"), this._node.addChild(this.tempSp), Cs.getIns().resetTransform(this.tempSp), this._node.transform.rotation.cloneTo(this.rotQua), this.initRig(), this.initAnimEvent(), this.fsm.setChangeStateEndFun(this.changeStateEnd.bind(this)), this.fsm.setExeStateFun(this.doAction.bind(this)), this.fsm.changeState(U.Idle)
        }
        get moveSpeed() {
            return this._moveSpeed + this.moveAddSpeed
        }
        initRig() {
            this.rigBody = this.owner.getComponent(Laya.Rigidbody3D), this.rigBody && (this.rig = this.rigBody, this.rigBody.linearDamping = 0, this.rigBody.canCollideWith = r.item | r.Store | r.createPos | r.money, this.rigBody.collisionGroup = r.player, this.rigBody.isTrigger = !1, this.rigBody.isKinematic = !1, this.rig.gravity = new Laya.Vector3(0, 0, 0), this.rig.overrideGravity = !0, this.rig.angularFactor = new Laya.Vector3(0, 0, 0), this.rig.linearFactor = new Laya.Vector3(1, 0, 1))
        }
        changeCamera(e) {
            this.cameraState
        }
        rockerDown() {
            this.isClickDown = !0, this.fsm.changeState(U.Walk)
        }
        rockerUp() {
            this.isClickDown = !1, this.fsm.changeState(U.Idle)
        }
        canCorl() {
            return !0
        }
        addListenner() {
            e.getIns().addEventListerner(i.GAMESTART, this.gameStart, this), e.getIns().addEventListerner(i.END_CHECK_OVER, this.gameOver, this)
        }
        enPeople() {
            this.addListenner()
        }
        disPeople() {
            this.removeListenner()
        }
        removeListenner() {
            e.getIns().removeEventListerner(i.GAMESTART, this.gameStart, this), e.getIns().removeEventListerner(i.END_CHECK_OVER, this.gameOver, this)
        }
        onUpdate() {
            ut.getIns().isGameStart() && this.fsm.exeState()
        }
        setStartPos(e, t) {
            super.setStartPos(e, t), this.changeCamera(b.Walk), Laya.Vector3.subtract(fs.getIns().cameraMgr._node.transform.position, this._node.transform.position, this.cameraOffect)
        }
        reborn() {
            this.rockerUp(), this.curHp = this.initHp, this.isDie = !1, this.refershHp()
        }
    }! function (e) {
        e[e.Idle = 1] = "Idle", e[e.Walk = 2] = "Walk", e[e.MoveToProduct = 3] = "MoveToProduct", e[e.PickProduct = 4] = "PickProduct", e[e.MoveToPark = 5] = "MoveToPark", e[e.PickDwonProduct = 6] = "PickDwonProduct", e[e.ShouYin = 7] = "ShouYin", e[e.Work = 8] = "Work", e[e.WaitWork = 9] = "WaitWork", e[e.ToTrach = 10] = "ToTrach"
    }(U || (U = {})),
    function (e) {
        e[e.Min = 0] = "Min", e[e.Left = 1] = "Left", e[e.Right = 2] = "Right"
    }(M || (M = {})),
    function (e) {
        e[e.Start = 0] = "Start", e[e.Change = 1] = "Change", e[e.Run = 2] = "Run", e[e.End = 3] = "End", e[e.Walk = 4] = "Walk"
    }(b || (b = {}));
    class le extends p {
        static get ins() {
            return this._ins || (this._ins = new le), this._ins
        }
        getConfigTarget() {
            return new de
        }
        getWaiterUpGoldByWaiterId(e, t) {
            let s = t.waiterUpLvNeedGold;
            return 6003 == e ? s = t.waiterUpLvNeedGold2 : 6002 == e && (s = t.waiterUpLvNeedGold1), s
        }
    }
    class de extends g {
        constructor() {
            super(...arguments), this.BYRLGold = 0, this.GZRLGold = 0, this.BYSDGold = 0, this.GZSDGold = 0
        }
    }
    class ce extends ae {
        init() {
            super.init(), this.lv = this.owner.getChildByName("lv"), this.video = this.owner.getChildByName("video"), this.gold = this.owner.getChildByName("gold"), this.count = this.gold.getChildByName("count"), this.name = this.owner.getChildByName("name"), this.icon = this.owner.getChildByName("icon"), this.time = this.owner.getChildByName("time"), this.time.visible = !1, Cs.getIns().setAdBtnIcon(this.video, !0)
        }
        setLv(e) {
            this.lv.text = "lv." + e
        }
        setCount(e) {
            this.count.text = e.toString()
        }
        showLv(e) {
            this.lv.visible = e
        }
        showGold(e) {
            this.gold.visible = e
        }
        showVideo(e) {
            this.video.visible = e
        }
        setName(e) {
            this.name.skin = e
        }
        setIcon(e) {
            this.icon.skin = e
        }
        setTime(e) {
            this.time.text = e
        }
    }
    class ue extends Laya.Script {
        constructor() {
            super(...arguments), this.buffTime = 3e5, this.curBuffTime = 0, this.curGold = 0, this.lastCount = 0, this.addVal = 0, this.isInCreate = !1, this.isOpen = 0, this.addSpaceTime = 0
        }
        init() {
            this.node = this.owner, this.buffType = parseInt(this.owner.name);
            let t = this.owner.getComponent(Laya.PhysicsCollider);
            t.canCollideWith = r.player, t.collisionGroup = r.createPos, this.col = t, e.getIns().addEventListerner(i.LOADMAPEND, this.initUI, this)
        }
        getBuffType() {
            return this.buffType
        }
        onDestroy() {
            e.getIns().removeEventListerner(i.LOADMAPEND, this.initUI, this), this.createUIMgr && (this.createUIMgr.owner.destroy(), this.createUIMgr = null)
        }
        initUI() {
            if (!this.createUIMgr) {
                let e = Cs.getIns().createPrefab("prefab/item/buffUI.json");
                ut.getIns().gameView.owner.addChild(e), this.createUIMgr = e.addComponent(ce), this.createUIMgr.init(), this.createUIMgr.setIcon("page/gameView/buff_" + this.buffType + ".png"), this.createUIMgr.setName("page/gameView/buff_t_" + this.buffType + ".png"), this.createUIMgr.showGold(!1), this.createUIMgr.showVideo(!1), this.createUIMgr.showLv(!1), this.showCount(), this.buffType == V.Carry ? (this.createUIMgr.showGold(!0), this.createUIMgr.showLv(!0)) : this.createUIMgr.showVideo(!0), -1 == this.isOpen && this.hideUI()
            }
        }
        checkUseBuff() {
            if (this.buffType == V.Carry) this.addMoney();
            else if (Ke.getIns().getWantedView()) {
                let e = {};
                e.endFun = (() => {
                    this.useBuff()
                }), e.buffId = this.buffType, Y.UIMgr.ins.openUI(Y.UIType.BuffView, e)
            } else Cs.getIns().shareOrAd(() => {
                this.useBuff()
            }, null)
        }
        addMoney() {
            if (this.isInCreate) return;
            if (ks.getIns().getCoin() <= 0) return void Y.UIMgr.ins.openUI(Y.UIType.GetGoldView);
            let e = ks.getIns().getPlayerCarryLv();
            if (0 == e) return;
            let t = le.ins.getDataById(e),
                s = t.playerUpGold - this.curGold,
                i = ks.getIns().getCoin();
            s = Math.min(i, s), this.addVal = .1 * s, this.addVal = Math.ceil(this.addVal), this.lastCount = this.curGold, this.curGold += s, ks.getIns().minusCoin(s), this.curGold >= t.playerUpGold ? (this.isInCreate = !0, this.createFun = (() => {
                this.isInCreate = !1, f.getIns().playSound(P.shengxing), this.lastCount = 0, this.curGold = 0, ks.getIns().addPlayerCarryLv(), e = ks.getIns().getPlayerCarryLv(), le.ins.hasId(e + 1) || this.closePoint(), this.showCount()
            })) : this.showCount()
        }
        openPoint() {
            1 != this.isOpen && (this.isOpen = 1, this.showUI())
        }
        showUI() {
            this.createUIMgr && this.createUIMgr.setShow(!0);
            for (let e = 0; e < this.node.numChildren; e++) this.node.getChildAt(e).active = !0;
            this.col.enabled = !0
        }
        hideUI() {
            this.createUIMgr && this.createUIMgr.setShow(!1);
            for (let e = 0; e < this.node.numChildren; e++) this.node.getChildAt(e).active = !1;
            this.col.enabled = !1
        }
        closePoint() {
            -1 != this.isOpen && (this.isOpen = -1, this.hideUI())
        }
        showCount() {
            if (!this.createUIMgr) return;
            let e = ks.getIns().getPlayerCarryLv();
            if (!le.ins.hasId(e)) return;
            let t = le.ins.getDataById(e);
            this.createUIMgr.setLv(e), this.createUIMgr.setCount(t.playerUpGold - this.lastCount)
        }
        useBuff() {
            this.buffType == V.Speed ? (fs.getIns().playerMgr.speedUp(), this.curBuffTime += this.buffTime) : this.buffType == V.Effect ? (e.getIns().dispatchEvent(i.PRODUCTSPEEDUP, !0), this.curBuffTime += this.buffTime) : this.buffType == V.CusCount ? (fs.getIns().useCusCountBuff(!0), this.curBuffTime += this.buffTime) : this.buffTime == V.Carry && ks.getIns().addPlayerCarryLv(), ut.getIns().gameView.showBuff(!0, this.curBuffTime, this.buffType), this.closePoint()
        }
        setTime(e) {
            this.createUIMgr && this.createUIMgr.setTime(e)
        }
        endBuff() {
            this.buffType == V.Speed ? fs.getIns().playerMgr.endSpeedUp() : this.buffType == V.Effect ? e.getIns().dispatchEvent(i.PRODUCTSPEEDUP, !1) : this.buffType == V.CusCount && fs.getIns().useCusCountBuff(!1), this.setTime("00:00")
        }
        updateBuff() {
            this.curBuffTime > 0 && (this.curBuffTime -= Laya.timer.delta, this.curBuffTime = this.curBuffTime < 0 ? 0 : this.curBuffTime, this.setTime(Cs.getIns().convertSecondToHourMinuteSecond(Math.floor(.001 * this.curBuffTime), !0)), 0 == this.curBuffTime && this.endBuff())
        }
        onUpdate() {
            if (this.createUIMgr) {
                let e = fs.getIns().cameraMgr.worldPosToScreenPos(this.node.transform.position);
                this.createUIMgr.setPos(e.x, e.y - 100)
            }
            this.updateBuff(), this.addSpaceTime += Laya.timer.delta, this.addSpaceTime >= 50 && (this.addSpaceTime = 0, this.lastCount < this.curGold && (this.lastCount += this.addVal, this.lastCount = this.lastCount >= this.curGold ? this.curGold : this.lastCount, this.showCount(), this.lastCount >= this.curGold && (this.lastCount = this.curGold, this.createFun ? this.createFun() : Y.UIMgr.ins.openUI(Y.UIType.GetGoldView), this.createFun = null)))
        }
    }! function (e) {
        e[e.None = 0] = "None", e[e.Speed = 1] = "Speed", e[e.Effect = 2] = "Effect", e[e.CusCount = 3] = "CusCount", e[e.Carry = 4] = "Carry"
    }(V || (V = {}));
    class ge extends ae {
        init() {
            super.init(), this.icon = this.owner.getChildByName("icon"), this.video = this.owner.getChildByName("video"), this.count = this.owner.getChildByName("count"), this.tips = this.owner.getChildByName("tips"), this.setTips(null)
        }
        setCount(e) {
            this.count.text = e.toString()
        }
        setVideo(e) {
            this.video.visible = e, this.count.visible = !e
        }
        setTips(e) {
            this.tips.text = e, this.tips.visible = !!e
        }
    }
    class pe extends Laya.Script3D {
        constructor() {
            super(...arguments), this.curCount = 0, this.needCount = 0, this.createIndex = -1, this.planeParkType = R.None, this.lastCount = 0, this.addVal = 0, this.isInCreate = !1, this.addSpaceTime = 0
        }
        init() {
            this.node = this.owner;
            let t = this.owner.getComponent(Laya.PhysicsCollider);
            t.canCollideWith = r.player, t.collisionGroup = r.createPos, e.getIns().addEventListerner(i.EN_COIN_CHANGED, this.refershUI, this), e.getIns().addEventListerner(i.LOADMAPEND, this.initUI, this)
        }
        initUI() {
            if (!this.createUIMgr) {
                let e = Cs.getIns().createPrefab("prefab/item/createUI.json");
                ut.getIns().gameView.owner.addChild(e), this.createUIMgr = e.addComponent(ge), this.createUIMgr.init(), this.createUIMgr.setVideo(!1), this.refershUI(), this.showCount(), this.owner.active ? this.setTips(this.tips) : this.hide()
            }
        }
        refershUI() {}
        isVideo() {
            return 0 == ks.getIns().getCoin() && this.needCount - ks.getIns().getCoin() >= 10
        }
        getCreateIndex() {
            return this.createIndex
        }
        cretaePark(e, t, s) {
            this.createIndex = t, this.parkBase = e;
            let i = e.getCreatePos();
            this.movePos(i.transform.position, i.transform.localRotationEuler), this.curCount = 0, this.isInCreate = !1, this.lastCount = this.curCount;
            let a = ks.getIns().getBuildCountByType(e.getParkType(), ut.getIns().getCurLevelId());
            if (le.ins.hasId(a)) {
                let t = le.ins.getDataById(a);
                this.needCount = Math.ceil(e.buildData.createGold * (1 + t.createBuildTimes))
            } else this.needCount = e.buildData.createGold;
            this.needCount *= ut.getIns().getLevelMul(), this.needCount = Math.ceil(this.needCount), this.show(), this.showUI(), this.setTips(null), s && (fs.getIns().isShowCameraMove ? this.showCameraMove() : pe.lastCreateFun = this.showCameraMove.bind(this))
        }
        setTips(e) {
            this.tips = e, this.createUIMgr && this.createUIMgr.setTips(e)
        }
        createProduct(e, t, s) {
            this.createIndex = t, this.parkProcessBase = e;
            let i = e.getCreatePos();
            this.movePos(i.transform.position, i.transform.localRotationEuler), this.curCount = 0, this.isInCreate = !1, this.lastCount = this.curCount;
            let a = ks.getIns().getBuildCountByType(e.parkType, ut.getIns().getCurLevelId());
            if (le.ins.hasId(a)) {
                let t = le.ins.getDataById(a);
                this.needCount = Math.ceil(e.buildData.createGold + e.buildData.createJS * t.createBuildTimes)
            } else this.needCount = e.buildData.createGold;
            this.needCount *= ut.getIns().getLevelMul(), this.needCount = Math.ceil(this.needCount), this.show(), this.showUI(), this.setTips(null), s && this.showCameraMove()
        }
        showCameraMove() {
            fs.getIns().cameraMgr.forceCameraTweenMove(this.node.transform.position, 1e3, 500, () => {
                fs.getIns().cameraMgr.backPos(null, 1e3)
            })
        }
        static showLastCameraMove() {
            this.lastCreateFun && (pe.lastCreateFun(), pe.lastCreateFun = null, fs.getIns().isShowCameraMove = !0)
        }
        createPlane(e, t) {
            this.createIndex = t, this.planeParkType = e;
            let s = fs.getIns().getPlaneLimitWallByPlaneType(e);
            this.limitWall = s, this.movePos(s.getChildAt(0).transform.position, s.getChildAt(0).transform.localRotationEuler), this.curCount = 0, this.isInCreate = !1, this.lastCount = this.curCount;
            let i = te.ins.getDataById(e),
                a = ks.getIns().getBuildCountByType(e, ut.getIns().getCurLevelId());
            if (le.ins.hasId(a)) {
                let e = le.ins.getDataById(a);
                this.needCount = Math.ceil(i.createGold + i.createJS * e.createBuildTimes)
            } else this.needCount = i.createGold;
            this.needCount = i.createGold * ut.getIns().getLevelMul(), this.needCount = Math.ceil(this.needCount), this.show(), this.showUI(), this.setTips("下一块土地")
        }
        createStore(e, t) {
            this.createIndex = t, this.planeParkType = e;
            let s = te.ins.getDataById(e),
                i = fs.getIns().nextRang;
            this.movePos(i.owner.transform.position, i.owner.transform.localRotationEuler), this.curCount = 0, this.isInCreate = !1, this.lastCount = this.curCount, this.needCount = s.createGold * ut.getIns().getLevelMul(), this.needCount = Math.ceil(this.needCount), this.show(), this.showUI(), this.setTips("下一间分馆")
        }
        movePos(e, t) {
            let s = this.node.transform.position;
            s.x = e.x, s.z = e.z, this.node.transform.position = s, this.node.transform.localRotationEulerY = t.y
        }
        showUI() {
            this.initUI(), this.createUIMgr && this.createUIMgr.setShow(!0), this.showCount()
        }
        getIsInCreate() {
            return this.isInCreate
        }
        showCount() {
            this.createUIMgr && this.createUIMgr.setCount(this.needMoney())
        }
        setCount(e) {
            this.createUIMgr && this.createUIMgr.setCount(e)
        }
        addMoney(e) {
            this.lastCount = this.curCount, this.curCount += e, this.addVal = .1 * e, this.addVal = Math.ceil(this.addVal), this.isInCreate = this.needMoney() <= 0, this.needMoney() <= 0 && (this.createFun = (() => {
                this.toCreate()
            }))
        }
        needMoney() {
            return this.needCount - this.curCount
        }
        onDestroy() {
            this.createUIMgr && this.createUIMgr.owner.destroy(), e.getIns().removeEventListerner(i.LOADMAPEND, this.initUI, this), e.getIns().removeEventListerner(i.EN_COIN_CHANGED, this.refershUI, this)
        }
        toCreate() {
            xs.getIns().isVIVOPlatform() && Ke.getIns().getVivoMaxPic() && fs.getIns().buildIsCreate(R.ParkYuguangtouProcess) && Y.UIMgr.ins.openUI(Y.UIType.NativePicture);
            let e = R.None;
            this.parkBase ? (this.parkBase.openStore(), e = this.parkBase.getParkType(), ks.getIns().addBuildByType(e, ut.getIns().getCurLevelId()), this.parkBase = null) : this.parkProcessBase ? (this.parkProcessBase.openStore(), e = this.parkProcessBase.parkType, ks.getIns().addBuildByType(e, ut.getIns().getCurLevelId()), this.parkProcessBase = null) : this.planeParkType == R.Plane2 || this.planeParkType == R.Plane3 ? (e = this.planeParkType, fs.getIns().openPlane(e), this.planeParkType = R.None, ks.getIns().addBuildByType(e, ut.getIns().getCurLevelId()), xs.getIns().showToast("New Map Unlock!")) : this.planeParkType != R.Park2 && this.planeParkType != R.Park3 || (ut.getIns().isFirstEnterLevel = !0, ks.getIns().setMarkIsOpen(ut.getIns().getCurLevelId() + 1), xs.getIns().showToast("New Mart Unloc!"), e = this.planeParkType, this.planeParkType = R.None, fs.getIns().checkNextRangOpen()), f.getIns().playSound(P.createBuild), fs.getIns().createCallBack(this, e)
        }
        getParkType() {
            return this.parkBase ? this.parkBase.getParkType() : (this.parkProcessBase && this.parkProcessBase.parkType, this.planeParkType)
        }
        hide() {
            this.createUIMgr && this.createUIMgr.setShow(!1), this.owner.active = !1
        }
        show() {
            this.createUIMgr && this.createUIMgr.setShow(!0), this.owner.active = !0
        }
        getHasShow() {
            return this.owner.active
        }
        onUpdate() {
            if (this.createUIMgr) {
                let e = fs.getIns().cameraMgr.worldPosToScreenPos(this.node.transform.position);
                this.createUIMgr.setPos(e.x, e.y - 80)
            }
            this.addSpaceTime += Laya.timer.delta, this.addSpaceTime >= 50 && (this.addSpaceTime = 0, this.lastCount < this.curCount && (this.lastCount += this.addVal, this.lastCount = this.lastCount >= this.curCount ? this.curCount : this.lastCount, this.setCount(this.needCount - this.lastCount), this.lastCount >= this.curCount && (this.lastCount = this.curCount, this.createFun ? this.createFun() : Y.UIMgr.ins.openUI(Y.UIType.GetGoldView), this.createFun = null)))
        }
    }
    class me {
        constructor() {
            this.moveList = []
        }
        update() {
            if (this.moveList.length > 0)
                for (let e = 0; e < this.moveList.length; e++) this.moveList[e].updatePos()
        }
        hasTween() {
            return this.moveList.length > 0
        }
        toTarget(e, t, s, i, a) {
            let n = new Ie;
            this.moveList.push(n), n.toTarget(e, t, s, i, () => {
                let e = this.moveList.indexOf(n);
                e >= 0 && this.moveList.splice(e, 1), a && a()
            })
        }
    }
    class Ie {
        constructor() {
            this.lastVal = 0, this.speed = 1, this.startPos = new Laya.Vector3, this.delay = 0, this.tempVec = new Laya.Vector3
        }
        toTarget(e, t, s, i, a) {
            this.item = e, this.target = t, this.callBack = a, this.lastVal = 0, this.speed = i, this.delay = s, e.transform.position.cloneTo(this.startPos)
        }
        updatePos() {
            this.lastVal += Laya.timer.delta * this.speed;
            let e = .001 * (this.lastVal - this.delay);
            e = (e = e > 1 ? 1 : e) < 0 ? 0 : e, Laya.Vector3.lerp(this.startPos, this.target.transform.position, e, this.tempVec);
            let t = this.item.transform.position;
            this.tempVec.cloneTo(t), this.item.transform.position = t, e >= 1 && this.callBack && this.callBack()
        }
    }
    class ye extends ae {
        init() {
            super.init(), this.nameIcon = this.owner.getChildByName("nameIcon"), this.icon = this.owner.getChildByName("icon")
        }
        setIcon(e) {
            this.icon.skin = e
        }
        setName(e) {
            this.nameIcon.skin = e
        }
    }
    class we extends Laya.Script {
        constructor() {
            super(...arguments), this.isEndter = !1, this.enterType = D.Next
        }
        init() {
            this.node = this.owner, this.isEndter = !1;
            let t = this.owner.getComponent(Laya.PhysicsCollider);
            t.collisionGroup = r.item, t.canCollideWith = r.player, t.isTrigger = !0, e.getIns().addEventListerner(i.LOADMAPEND, this.createUI, this)
        }
        createUI() {
            if (!this.createUIMgr) {
                let e = Cs.getIns().createPrefab("prefab/item/buildInfoUI.json");
                ut.getIns().gameView.owner.addChild(e), this.createUIMgr = e.addComponent(ye), this.createUIMgr.init(), this.createUIMgr.setName("page/gameView/tips1.png"), this.createUIMgr.setIcon("page/gameView/martIcon.png"), this.createUIMgr.setShow(this.owner.active)
            }
        }
        onDestroy() {
            this.createUIMgr && (this.createUIMgr.owner.destroy(), this.createUIMgr = null), e.getIns().removeEventListerner(i.LOADMAPEND, this.createUI, this)
        }
        onUpdate() {
            if (this.createUIMgr) {
                let e = fs.getIns().cameraMgr.worldPosToScreenPos(this.node.transform.position);
                this.createUIMgr.setPos(e.x, e.y - 80)
            }
        }
        openPark() {
            this.owner.active = !0, this.createUIMgr && this.createUIMgr.setShow(!0)
        }
        closePark() {
            this.owner.active = !1, this.createUIMgr && this.createUIMgr.setShow(!1)
        }
        setType(e) {
            this.enterType = e
        }
        enterNext() {
            this.isEndter || (this.isEndter = !0, this.enterType == D.Next ? fs.getIns().carMgr.toNext() : this.enterType == D.Last && ut.getIns().toGame(ut.getIns().getCurLevelId() - 1, 1, () => {
                ut.getIns().gameStart(null, () => {})
            }))
        }
    }! function (e) {
        e[e.Next = 0] = "Next", e[e.Last = 1] = "Last"
    }(D || (D = {}));
    class fe extends p {
        static get ins() {
            return this._ins || (this._ins = new fe), this._ins
        }
        getConfigTarget() {
            return new Pe
        }
        getWaiterDataByProduct(e) {
            for (let t = 0; t < this.datas.length; t++)
                if (this.datas[t].workParkType == e) return this.datas[t];
            return null
        }
    }
    class Pe extends g {}
    class Ce extends ae {
        init() {
            super.init(), this.icon = this.owner.getChildByName("icon"), this.count = this.owner.getChildByName("count")
        }
        setIcon(e) {
            this.icon.skin = e
        }
        setCount(e, t) {
            this.count.text = e + "/" + t
        }
    }
    class ve extends Laya.Script3D {
        constructor() {
            super(...arguments), this.parkType = R.None, this.productItemType = W.None, this.useItemType = W.None, this.useItem = [], this.secondUseItemType = W.None, this.secondUseItem = [], this.thirdUseItemType = W.None, this.thirdUseItem = [], this.productItems = [], this.isCreate = !1, this.createUseGoodCount = 0, this.standPoss = [], this.uiFollowNodes = [], this.showNeedUI = !1, this.workAnimIsLoop = !1, this.proCount = 0, this.useCount = 0, this.proSpeed = 1, this.isplayChelf = !0, this.isPlayFish = !0, this.isShowShadow = !0, this.effectRate = 1, this.createTime = 1e3, this.curCreateTimer = 0, this.tempV1 = new Laya.Vector3, this.itemTween = new be, this.proYDis = 100, this.isOpen = 0, this.enterTimes = 0
        }
        setWork(e) {
            this.workMgr = e, this.workAnimIsLoop = e.getAnimIsLoop(e.getWaiterData().workAnim, 1), this.workAnimIsLoop && this.checkAnimPlay(), this.workPlayer && this.workMgr.setToMoveWaiterPos()
        }
        getWork() {
            return this.workMgr
        }
        getWorkPos() {
            return this.workPos
        }
        getWaiterPos() {
            return this.waiterPos
        }
        getMaxProCount() {
            return this.proCount
        }
        getMaxUseCount() {
            return this.useCount
        }
        refershContant() {
            ks.getIns().getBuilDataById(this.parkType, ut.getIns().getCurLevelId());
            let e = te.ins.getBuilDataByType(this.parkType);
            this.proCount = e.defContant, this.useCount = e.defContant, this.proSpeed = e.defSpeed;
            let t = 0;
            if (this.productWaiterConfig) {
                let s = ks.getIns().getWaiterData(6005, ut.getIns().getCurLevelId());
                s && (t = s.speedLv / this.productWaiterConfig.lvMax * 3, this.proCount = e.getCarryCount(s.speedLv), this.useCount = this.proCount)
            }
            this.proSpeed += t, this.setUseItemUI()
        }
        getCreatePos() {
            return this.createPos ? this.createPos : this.node
        }
        init() {
            this.node = this.owner, this.fx_Arrow = this.owner.getChildByName("standArray"), this.m_zuida = Cs.getIns().seekNodeByName(this.node, "m_zuida"), Cs.getIns().getChildBySgin(this.owner, "uiFollowNode", this.uiFollowNodes), this.createPos = this.node.getChildByName("createPos"), this.productWaiterConfig = fe.ins.getWaiterDataByProduct(this.parkType), this.workPos = Cs.getIns().seekNodeByName(this.node, "workPos"), this.waiterPos = Cs.getIns().seekNodeByName(this.node, "waiterPos");
            let t = this.node.getComponent(Laya.PhysicsCollider);
            t.collisionGroup = r.Store, t.canCollideWith = r.player, t.isTrigger = !0;
            let s = [];
            Cs.getIns().getChildBySgin(this.node, "playerStand_col", s);
            for (let e = 0; e < s.length; e++) {
                let t = s[e].getComponent(Laya.PhysicsCollider);
                t.collisionGroup = r.item, t.canCollideWith = r.player, t.isTrigger = !0, t.owner.productBase = this
            }
            this.buildData = te.ins.getDataById(this.getBuildId());
            let a = Cs.getIns().seekNodeByName(this.owner, "showNode");
            if (this.showNode = a, a) {
                let e = [];
                Cs.getIns().getChildInParBySgin(a, "p", e);
                for (let t = 0; t < e.length; t++) {
                    let s = new Te;
                    s.par = e[t], e[t].numChildren > 0 && (s.item = e[t].getChildAt(0)), s.itemType = this.productItemType, s.setItemState(0), this.productItems.push(s)
                }
            }
            let n = Cs.getIns().seekNodeByName(this.owner, "needNode");
            if (this.needNode = n, n) {
                let e = [];
                Cs.getIns().getChildInParBySgin(n, "p", e);
                for (let t = 0; t < e.length; t++) {
                    let s = new Te;
                    s.par = e[t], e[t].numChildren > 0 && (s.item = e[t].getChildAt(0)), s.itemType = this.useItemType, s.setItemState(0), this.useItem.push(s)
                }
            }
            let o = Cs.getIns().seekNodeByName(this.owner, "needNode1");
            if (o) {
                let e = [];
                Cs.getIns().getChildInParBySgin(o, "p", e);
                for (let t = 0; t < e.length; t++) {
                    let s = new Te;
                    s.par = e[t], s.item = e[t].getChildAt(0), s.itemType = this.secondUseItemType, s.setItemState(0), this.secondUseItem.push(s)
                }
            }
            let h = Cs.getIns().seekNodeByName(this.owner, "needNode2");
            if (h) {
                let e = [];
                Cs.getIns().getChildInParBySgin(h, "p", e);
                for (let t = 0; t < e.length; t++) {
                    let s = new Te;
                    s.par = e[t], s.item = e[t].getChildAt(0), s.itemType = this.thirdUseItemType, s.setItemState(0), this.thirdUseItem.push(s)
                }
            }
            let l = Cs.getIns().seekNodeByName(this.owner, "standPos");
            if (l) {
                Cs.getIns().getChildBySgin(l, "p", this.standPoss);
                for (let e = 0; e < this.standPoss.length; e++) {
                    let t = this.standPoss[e].transform.position;
                    t.y = fs.getIns().startPos.transform.position.y, this.standPoss[e].transform.position = t
                }
            }
            let d = [];
            Cs.getIns().getChildBySgin(this.owner, "col_", d);
            for (let e = 0; e < d.length; e++) {
                let t = d[e].getComponent(Laya.PhysicsCollider);
                t.collisionGroup = r.item, t.canCollideWith = r.player
            }
            let c = Cs.getIns().seekNodeByName(this.owner, "S");
            c && (this.bottomScaleAnim = c.getComponent(Laya.Animator), this.closeShadow());
            let u = Cs.getIns().seekNodeByName(this.node, "chelf");
            u && (u.active = !1);
            let g = Cs.getIns().seekNodeByName(this.node, "fisher");
            g && (g.active = !1);
            let p = Cs.getIns().seekNodeByName(this.node, "productAnim");
            p && (this.productAnim = p.getComponent(Laya.Animator)), this.playChelfAnim(!1), this.createTime = this.buildData.productTime, this.createUseGoodCount = this.buildData.useGood, e.getIns().addEventListerner(i.LOADMAPEND, this.createUI, this), e.getIns().addEventListerner(i.PRODUCTSPEEDUP, this.effectSpeedUp, this), e.getIns().addEventListerner(i.BUILDUP, this.refershContant, this), e.getIns().addEventListerner(i.WAITERUPDATE, this.refershContant, this), this.showArrow(!1), this.showZuiDa(!1), this.refershContant()
        }
        showZuiDa(e) {
            this.m_zuida && (this.m_zuida.active = e)
        }
        showArrow(e) {
            this.fx_Arrow && (e && (this.fx_Arrow.active = !1), this.fx_Arrow.active = e)
        }
        playChelfAnim(e) {
            this.isplayChelf = e, this.workMgr && this.workMgr.playChelfAnim(e), this.workPlayer && this.workPlayer.playWorkAnim(e, this.productWaiterConfig), this.productAnim && (e && (this.workMgr || this.workPlayer) ? (this.productAnim.speed = 1, this.productAnim.crossFade(ie.work, .2, 0, 0)) : this.productAnim.speed = 0)
        }
        changeWork(e, t) {
            this.productWaiterConfig && (fs.getIns().playerMgr.stopShowArray(!0), ut.getIns().gameView.showChangePlayerTimerBar(!0, e._node, () => {
                this.setWaiterPlayer(e, t)
            }))
        }
        setWaiterPlayer(e, t) {
            Cs.getIns().createEf("Fx_GetNew", this.getWorkPos().transform.position, fs.getIns().owner, 1.5, !0), this.workPlayer = e, this.workMgr && this.workMgr.setToMoveWaiterPos(), this.workPlayer && this.workPlayer.toWork(this.getWorkPos(), this.productWaiterConfig), this.checkAnimPlay(), this.showArrow(!1)
        }
        endChangeWork(e) {
            this.productWaiterConfig && (fs.getIns().playerMgr.stopShowArray(!1), ut.getIns().gameView.showChangePlayerTimerBar(!1, null, null), e.endWork(), this.workPlayer = null, this.workMgr && this.workMgr.setMoveToProduct())
        }
        openShadow() {
            this.isShowShadow || (this.isShowShadow = !0, this.playBottomAnim(ie.ShadowActive))
        }
        playBottomAnim(e) {
            this.bottomScaleAnim && this.bottomScaleAnim.play(e, 0, 0)
        }
        closeShadow() {
            this.isShowShadow && (this.isShowShadow = !1, this.playBottomAnim(ie.ShadowClose))
        }
        effectSpeedUp(e) {
            this.effectRate = e ? 1.5 : 1
        }
        onDestroy() {
            this.productNeedUI && (this.productNeedUI.owner.destroy(), this.productNeedUI = null), this.productNeedUI1 && (this.productNeedUI1.owner.destroy(), this.productNeedUI1 = null), this.productNeedUI2 && (this.productNeedUI2.owner.destroy(), this.productNeedUI2 = null), this.productProUI && (this.productProUI.destroy(), this.productProUI = null), e.getIns().removeEventListerner(i.PRODUCTSPEEDUP, this.effectSpeedUp, this), e.getIns().removeEventListerner(i.LOADMAPEND, this.createUI, this), e.getIns().removeEventListerner(i.BUILDUP, this.refershContant, this), e.getIns().removeEventListerner(i.WAITERUPDATE, this.refershContant, this)
        }
        getDefaultItemIcon() {
            return Cs.getItemIconPathByItemType(this.useItemType)
        }
        createUI() {
            if (!this.productNeedUI && this.showNeedUI) {
                let e = Cs.getIns().createPrefab("prefab/item/productNeedItem.json");
                if (ut.getIns().gameView.owner.addChild(e), this.productNeedUI = e.addComponent(Ce), this.productNeedUI.init(), this.productNeedUI.setIcon(a.itemIconPath.format(this.getDefaultItemIcon())), this.isCreate || this.productNeedUI.setShow(!1), this.uiFollowNodes.length > 1) {
                    let e = Cs.getIns().createPrefab("prefab/item/productNeedItem.json");
                    ut.getIns().gameView.owner.addChild(e), this.productNeedUI1 = e.addComponent(Ce), this.productNeedUI1.init(), this.productNeedUI1.setIcon(a.itemIconPath.format(Cs.getItemIconPathByItemType(this.secondUseItemType))), this.isCreate || this.productNeedUI1.setShow(!1)
                }
                if (this.uiFollowNodes.length > 2) {
                    let e = Cs.getIns().createPrefab("prefab/item/productNeedItem.json");
                    ut.getIns().gameView.owner.addChild(e), this.productNeedUI2 = e.addComponent(Ce), this.productNeedUI2.init(), this.productNeedUI2.setIcon(a.itemIconPath.format(Cs.getItemIconPathByItemType(this.thirdUseItemType))), this.isCreate || this.productNeedUI2.setShow(!1)
                }
                this.setUseItemUI()
            }
            this.productProUI = Cs.getIns().createPrefab("prefab/item/productPro.json"), ut.getIns().gameView.m_gameUI.addChild(this.productProUI), this.createProUI = this.productProUI.getChildAt(0), this.isCreate || (this.productProUI.visible = !1)
        }
        setUseItemUI() {
            this.productNeedUI && this.productNeedUI.setCount(this.getFoodCountByIndex(0), this.getMaxUseCount()), this.productNeedUI1 && this.productNeedUI1.setCount(this.getFoodCountByIndex(1), this.getMaxUseCount()), this.productNeedUI2 && this.productNeedUI2.setCount(this.getFoodCountByIndex(2), this.getMaxUseCount())
        }
        getIsCreate() {
            return this.isCreate
        }
        getRandomStandPos() {
            return 0 == this.standPoss.length ? null : this.standPoss[Cs.getIns().randomNum(0, this.standPoss.length - 1)].transform.position
        }
        getProductItems() {
            return this.productItems
        }
        hasProductPos() {
            let e = this.getMaxProCount();
            for (let t = 0; t < this.productItems.length && !(t >= e); t++)
                if (0 == this.productItems[t].itemState) return !0;
            return !1
        }
        hasProduct() {
            for (let e = 0; e < this.productItems.length; e++)
                if (2 == this.productItems[e].itemState) return !0;
            return !1
        }
        getBuildId() {
            return 1001
        }
        createItem(e, t) {
            let s = 0,
                i = this.getMaxUseCount();
            for (let t = 0; t < this.productItems.length && !(t >= i) && (0 != this.productItems[t].itemState || (this.productItems[t].setItemState(2), ++s != e)); t++);
        }
        getFoodItemPosByIndex(e) {
            if (0 == e) {
                for (let e = 0; e < this.useItem.length; e++)
                    if (0 == this.useItem[e].itemState) return this.useItem[e]
            } else if (1 == e) {
                for (let e = 0; e < this.secondUseItem.length; e++)
                    if (0 == this.secondUseItem[e].itemState) return this.secondUseItem[e]
            } else if (2 == e)
                for (let e = 0; e < this.thirdUseItem.length; e++)
                    if (0 == this.thirdUseItem[e].itemState) return this.thirdUseItem[e];
            return null
        }
        getFoodCountByIndex(e) {
            let t = 0;
            if (0 == e)
                for (let e = 0; e < this.useItem.length; e++) 2 == this.useItem[e].itemState && t++;
            else if (1 == e)
                for (let e = 0; e < this.secondUseItem.length; e++) 2 == this.secondUseItem[e].itemState && t++;
            else if (2 == e)
                for (let e = 0; e < this.thirdUseItem.length; e++) 2 == this.thirdUseItem[e].itemState && t++;
            return t
        }
        getCurFoodContainByIndex(e) {
            let t = 0,
                s = this.getMaxUseCount(),
                i = 0;
            if (0 == e)
                for (let e = 0; e < this.useItem.length && (0 == this.useItem[e].itemState && t++, !(++i >= s)); e++);
            else if (1 == e)
                for (let e = 0; e < this.secondUseItem.length && (0 == this.secondUseItem[e].itemState && t++, !(++i >= s)); e++);
            else if (2 == e)
                for (let e = 0; e < this.thirdUseItem.length && (0 == this.thirdUseItem[e].itemState && t++, !(++i >= s)); e++);
            return t
        }
        useMat(e, t) {
            if (0 == e) return this.productItemType;
            if (this.getFoodCountByIndex(0) < e) return W.None;
            let s = 0;
            if (this.secondUseItemType != W.None) {
                if ((s = this.getFoodCountByIndex(1)) < e) return W.None;
                let t = e;
                for (let e = 0; e < this.secondUseItem.length && (2 != this.secondUseItem[e].itemState || (this.secondUseItem[e].setItemState(0), 0 != --t)); e++);
                let i = 0;
                if (this.thirdUseItemType != W.None) {
                    if ((i = this.getFoodCountByIndex(2)) < e) return W.None;
                    let t = e;
                    for (let e = 0; e < this.thirdUseItem.length && (2 != this.thirdUseItem[e].itemState || (this.thirdUseItem[e].setItemState(0), 0 != --t)); e++);
                }
            }
            let i = W.None;
            for (let t = 0; t < this.useItem.length && (2 != this.useItem[t].itemState || (this.useItem[t].setItemState(0), e--, i = this.useItem[t].itemType, 0 != e)); t++);
            if (this.setUseItemUI(), this.productItemType == W.All) {
                let e = Q.ins.getDataById(i);
                return e ? e.productId : W.None
            }
            return this.productItemType
        }
        checkAnimPlay() {
            let e = this.hasProductPos();
            (!this.productWaiterConfig || this.workPlayer || this.workMgr) && (0 == this.createUseGoodCount || this.getFoodCountByIndex(0) > 0) && e ? this.playChelfAnim(!0) : this.playChelfAnim(!1)
        }
        setUseItem(e, t) {
            if (0 != e.length)
                for (let s = 0; s < e.length; s++) {
                    let i = this.getFoodItemPosByIndex(t);
                    if (!i) return void console.log("没有位置!");
                    i.setItemState(1), i.hideItem();
                    let a = e[s],
                        n = a.item.transform.position.clone();
                    a.item.parent.removeChild(a.item), i.item.parent.addChild(a.item);
                    let r = a.item.transform.localRotationEuler;
                    r.setValue(0, 0, 0), a.item.transform.localRotationEuler = r, a.item.transform.position = n, this.itemTween.toLocal(a.item, () => {
                        i.setItemState(2), a.item.destroy(), this.setUseItemUI(), this.checkAnimPlay()
                    }, 100 * s)
                }
        }
        getAcion(e) {
            if (this.needNode) {
                if (this.showNode) {
                    Laya.Vector3.subtract(e, this.needNode.transform.position, this.tempV1);
                    let t = Laya.Vector3.scalarLengthSquared(this.tempV1);
                    return Laya.Vector3.subtract(e, this.showNode.transform.position, this.tempV1), t < Laya.Vector3.scalarLengthSquared(this.tempV1) ? 1 : 2
                }
                return 1
            }
            return 2
        }
        onUpdate() {
            if (this.itemTween.update(), !this.isCreate) return;
            if (this.productNeedUI) {
                let e;
                e = this.uiFollowNodes.length > 0 ? fs.getIns().cameraMgr.worldPosToScreenPos(this.uiFollowNodes[0].transform.position) : fs.getIns().cameraMgr.worldPosToScreenPos(this.node.transform.position), this.productNeedUI.setPos(e.x, e.y)
            }
            if (this.productNeedUI1) {
                let e;
                e = this.uiFollowNodes.length > 1 ? fs.getIns().cameraMgr.worldPosToScreenPos(this.uiFollowNodes[1].transform.position) : fs.getIns().cameraMgr.worldPosToScreenPos(this.node.transform.position), this.productNeedUI1.setPos(e.x, e.y)
            }
            if (this.productNeedUI2) {
                let e;
                e = this.uiFollowNodes.length > 2 ? fs.getIns().cameraMgr.worldPosToScreenPos(this.uiFollowNodes[2].transform.position) : fs.getIns().cameraMgr.worldPosToScreenPos(this.node.transform.position), this.productNeedUI2.setPos(e.x, e.y)
            }
            if (this.productProUI) {
                let e = fs.getIns().cameraMgr.worldPosToScreenPos(this.node.transform.position);
                this.productProUI.x = e.x, this.productProUI.y = e.y - this.proYDis
            }
            if (this.curCreateTimer += Laya.timer.delta * this.effectRate * this.proSpeed, !this.hasProductPos()) return this.showPro(!1), this.showZuiDa(!0), void(this.curCreateTimer = 0);
            if (this.showZuiDa(!1), this.productWaiterConfig && !this.workMgr && !this.workPlayer) return this.showPro(!1), void(this.curCreateTimer = 0);
            if (this.getFoodCountByIndex(0) < this.createUseGoodCount) return this.showPro(!1), void(this.curCreateTimer = 0);
            if (this.setVal(this.curCreateTimer / this.createTime), this.showPro(!0), this.curCreateTimer > this.createTime) {
                this.curCreateTimer = 0, this.checkAnimPlay();
                let e = this.useMat(this.createUseGoodCount, this.useItemType);
                e != W.None && (this.createItem(this.buildData.createCount, e), this.workAnimIsLoop && this.checkAnimPlay())
            }
        }
        showPro(e) {
            this.createProUI && (this.productProUI.visible = e, this.workMgr && this.workMgr.showZzz(!e))
        }
        setVal(e) {
            this.createProUI && (this.createProUI.value = e)
        }
        openStore() {
            1 != this.isOpen && (this.isOpen = 1, this.isCreate = !0, Cs.getIns().createEf("Fx_GetNew", this.node.transform.position, fs.getIns().owner, 1.5, !0), Laya.timer.once(400, this, () => {
                this.owner.active = !0, this.productNeedUI && this.productNeedUI.setShow(!0), this.productNeedUI1 && this.productNeedUI1.setShow(!0), this.productNeedUI2 && this.productNeedUI2.setShow(!0), this.productProUI && (this.productProUI.visible = !0)
            }), this.refershContant(), this.openStoreEnd())
        }
        openStoreEnd() {}
        enterStore() {
            this.enterTimes++, 1 == this.enterTimes && this.openShadow()
        }
        outStore() {
            0 != this.enterTimes && (this.enterTimes--, 0 == this.enterTimes && this.closeShadow())
        }
        closeStore() {
            -1 != this.isOpen && (this.isOpen = -1, this.owner.active = !1, this.isCreate = !1)
        }
    }
    class Te {
        constructor() {
            this.itemType = W.Jinqiangyu, this.item = null, this.itemState = 0
        }
        setItemState(e) {
            this.itemState = e, this.item && (this.item.active = 0 != e)
        }
        hideItem() {
            this.item && (this.item.active = !1)
        }
        getItem(e) {
            let t = this.item.transform.position.clone(),
                s = Laya.Sprite3D.instantiate(this.item);
            e.addChild(s), s.transform.position = t;
            let i = s.transform.localRotationEuler;
            return i.setValue(0, 0, 0), s.transform.localRotationEuler = i, s
        }
        clone(e) {
            this.itemType = e.itemType, this.item = e.item, this.itemState = e.itemState
        }
        desItem() {
            this.item && (this.item.destroy(), this.item = null)
        }
        createItem(e) {
            this.itemType = e;
            let t = Q.ins.getDataById(e);
            this.item = Z.getIns().getNode(a.resPath.format(t.model)), this.par.addChild(this.item), Cs.getIns().resetTransform(this.item)
        }
    }
    class Se extends ae {
        init() {
            super.init(), this.name = this.owner.getChildByName("name"), this.icon = this.owner.getChildByName("icon"), this.count = this.owner.getChildByName("count")
        }
        setIcon(e) {
            this.icon.skin = e
        }
        setCount(e) {
            this.count.text = e.toString()
        }
        setName(e) {
            this.name.text = e
        }
    }
    class ke extends Laya.Script {
        constructor() {
            super(...arguments), this.curPrice = 0, this.createState = 0, this.isOpen = 0, this.needGold = 0, this.addSpaceTime = 0, this.isInCreate = !1, this.lastCount = 0, this.addVal = 0
        }
        getCreateState() {
            return this.createState
        }
        init(t) {
            this.node = this.owner, this.waiterData = t;
            let s = this.owner.getComponent(Laya.PhysicsCollider);
            s.collisionGroup = r.item, s.canCollideWith = r.player, s.isTrigger = !0, e.getIns().addEventListerner(i.LOADMAPEND, this.createUI, this)
        }
        getIsOpen() {
            return 1 == this.isOpen
        }
        onDestroy() {
            this.waiterUI && (this.waiterUI.owner.destroy(), this.waiterUI = null), e.getIns().removeEventListerner(i.LOADMAPEND, this.createUI, this)
        }
        onUpdate() {
            if (this.waiterUI) {
                let e = fs.getIns().cameraMgr.worldPosToScreenPos(this.node.transform.position);
                this.waiterUI.setPos(e.x, e.y - 100)
            }
            this.addSpaceTime += Laya.timer.delta, this.addSpaceTime >= 50 && (this.addSpaceTime = 0, this.lastCount < this.curPrice && (this.lastCount += this.addVal, this.lastCount = this.lastCount >= this.curPrice ? this.curPrice : this.lastCount, this.showCount(), this.lastCount >= this.curPrice && (this.lastCount = this.curPrice, this.createFun ? this.createFun() : Y.UIMgr.ins.openUI(Y.UIType.GetGoldView), this.createFun = null)))
        }
        needMoney() {
            return this.needGold - this.lastCount
        }
        showCount() {
            this.waiterUI && this.waiterUI.setCount(this.needMoney())
        }
        createUI() {
            if (!this.waiterUI && 1 == this.isOpen && ut.getIns().gameView) {
                let e = Cs.getIns().createPrefab("prefab/item/waiterUIItem.json");
                ut.getIns().gameView.owner.addChild(e), this.waiterUI = e.addComponent(Se), this.waiterUI.init(), this.waiterUI.setCount(this.needGold), this.waiterUI.setName(this.waiterData.name), this.waiterUI.setIcon("page/gameView/" + this.waiterData.icon + ".png")
            }
        }
        getWaiterData() {
            return this.waiterData
        }
        createWaiter() {
            if (this.isInCreate) return;
            if (ks.getIns().getCoin() <= 0) return void Y.UIMgr.ins.openUI(Y.UIType.GetGoldView);
            this.lastCount = this.curPrice;
            let e = this.needGold - this.curPrice,
                t = ks.getIns().getCoin();
            e = Math.min(t, e), this.curPrice += e, ks.getIns().minusCoin(e), this.addVal = .1 * e, this.addVal = Math.ceil(this.addVal), this.curPrice >= this.needGold && (this.isInCreate = !0, this.createFun = (() => {
                ks.getIns().addWaiter(this.waiterData.id, ut.getIns().getCurLevelId()), this.closePoint(), this.curPrice = 0, this.loadWaiter(), this.createState = 1, fs.getIns().openWaiterUpdate(), fs.getIns().showNextCreate(null, 1, !0), fs.getIns().checkWaiterCreatePointByType(), f.getIns().playSound(P.createBuild), 1 == ut.getIns().getCurLevelId() && (6005 == this.waiterData.id ? (ut.getIns().gameView.checkShowWanted(9), pe.showLastCameraMove()) : 6007 == this.waiterData.id ? ut.getIns().gameView.checkShowWanted(13) : 6002 == this.waiterData.id && 13 == ut.getIns().gameView.curWantedId ? ut.getIns().gameView.checkShowWanted(16) : (pe.showLastCameraMove(), fs.getIns().playerMgr.showTeachArray(null)))
            }))
        }
        loadWaiter() {
            fs.getIns().loadWaiter(this.waiterData.id, this.owner, null, this.waiterData)
        }
        openPoint() {
            1 != this.isOpen && (this.isInCreate = !1, this.createFun = null, this.curPrice = 0, this.lastCount = 0, 0 == ks.getIns().getWaiterCountByID(this.waiterData.id, ut.getIns().getCurLevelId()) ? this.needGold = this.waiterData.unLockGold : this.needGold = this.waiterData.unLockGold2, this.needGold *= ut.getIns().getLevelMul(), this.needGold = Math.ceil(this.needGold), this.owner.active = !0, this.isOpen = 1, this.createUI(), this.waiterUI && this.waiterUI.setShow(!0), this.showCount())
        }
        closePoint() {
            -1 != this.isOpen && (this.isOpen = -1, this.waiterUI && this.waiterUI.setShow(!1), this.owner.active = !1)
        }
    }
    class Be extends p {
        static get ins() {
            return this._ins || (this._ins = new Be), this._ins
        }
        getConfigTarget() {
            return new Le
        }
        isMaxLv(e) {
            if (this.getDataById(e.waiterUpId)) {
                let t = F.speed;
                return ks.getIns().getWaiterLv(e.waiterId, t, ut.getIns().getCurLevelId()) >= fe.ins.getDataById(e.waiterId).lvMax
            }
            return !0
        }
    }
    class Le extends g {}
    class Ae extends ae {
        init() {
            super.init(), this.lv = this.owner.getChildByName("lv"), this.name = this.owner.getChildByName("name"), this.icon = this.owner.getChildByName("icon"), this.count = this.owner.getChildByName("count"), this.pname = this.owner.getChildByName("pname")
        }
        setIcon(e) {
            this.icon.skin = e
        }
        setPName(e) {
            this.pname.text = e
        }
        setCount(e) {
            this.count.text = e.toString()
        }
        setLv(e) {
            this.lv.text = "lv." + e
        }
        setName(e) {
            this.name.skin = e
        }
    }
    class _e extends Laya.Script {
        constructor() {
            super(...arguments), this.isOpen = 0, this.curGold = 0, this.addSpaceTime = 0, this.lastCount = 0, this.addVal = 0, this.isInCreate = !1
        }
        init() {
            this.node = this.owner;
            let t = parseInt(this.owner.name);
            this.waiterData = fe.ins.getDataById(t);
            let s = this.owner.getComponent(Laya.PhysicsCollider);
            s.collisionGroup = r.item, s.canCollideWith = r.player, s.isTrigger = !0, e.getIns().addEventListerner(i.LOADMAPEND, this.createUI, this)
        }
        getWaiterData() {
            return this.waiterData
        }
        setNextUpType() {
            let e = ks.getIns().getWaiterData(this.waiterData.id, ut.getIns().getCurLevelId());
            if (!e) return;
            Be.ins.getDataById(e.waiterUpId);
            this.updateValType = F.speed, this.waiterUI && (this.waiterUI.setName("page/gameView/u_" + this.updateValType + ".png"), this.waiterUI.setIcon("page/gameView/" + this.waiterData.icon + ".png"), this.waiterUI.setPName(this.waiterData.name), this.showCount()), this.isInCreate = !1
        }
        createUI() {
            if (!this.waiterUI && 1 == this.isOpen && ut.getIns().gameView) {
                let e = Cs.getIns().createPrefab("prefab/item/waiterUpUIItem.json");
                ut.getIns().gameView.owner.addChild(e), this.waiterUI = e.addComponent(Ae), this.waiterUI.init(), this.setNextUpType()
            }
        }
        onUpdate() {
            if (this.waiterUI) {
                let e = fs.getIns().cameraMgr.worldPosToScreenPos(this.node.transform.position);
                this.waiterUI.setPos(e.x, e.y - 100)
            }
            this.addSpaceTime += Laya.timer.delta, this.addSpaceTime >= 50 && (this.addSpaceTime = 0, this.lastCount < this.curGold && (this.lastCount += this.addVal, this.lastCount = this.lastCount >= this.curGold ? this.curGold : this.lastCount, this.showCount(), this.lastCount >= this.curGold && (this.lastCount = this.curGold, this.createFun ? this.createFun() : Y.UIMgr.ins.openUI(Y.UIType.GetGoldView), this.createFun = null)))
        }
        onDestroy() {
            e.getIns().removeEventListerner(i.LOADMAPEND, this.createUI, this), this.waiterUI && (this.waiterUI.owner.destroy(), this.waiterUI = null)
        }
        hideUI() {
            this.waiterUI && this.waiterUI.setShow(!1)
        }
        getIsOpen() {
            return 1 == this.isOpen
        }
        showUI() {
            this.waiterUI && this.waiterUI.setShow(!0)
        }
        showCount() {
            if (!this.waiterUI) return;
            let e = ks.getIns().getWaiterLv(this.waiterData.id, this.updateValType, ut.getIns().getCurLevelId());
            if (e >= this.waiterData.lvMax) return;
            let t = le.ins.getDataById(e);
            this.waiterUI.setLv(e);
            let s = le.ins.getWaiterUpGoldByWaiterId(this.waiterData.id, t);
            this.waiterUI.setCount(s - this.lastCount)
        }
        openPoint() {
            1 != this.isOpen && (this.owner.active = !0, this.isOpen = 1, this.createUI(), this.showUI(), this.setNextUpType())
        }
        closePoint() {
            -1 != this.isOpen && (this.isOpen = -1, this.owner.active = !1, this.hideUI())
        }
        upDateWaiter() {
            if (this.isInCreate) return;
            if (ks.getIns().getCoin() <= 0) return void Y.UIMgr.ins.openUI(Y.UIType.GetGoldView);
            let t = ks.getIns().getWaiterLv(this.waiterData.id, this.updateValType, ut.getIns().getCurLevelId());
            if (0 == t) return;
            let s = le.ins.getDataById(t),
                a = le.ins.getWaiterUpGoldByWaiterId(this.waiterData.id, s),
                n = a - this.curGold,
                r = ks.getIns().getCoin();
            n = Math.min(r, n), this.addVal = .1 * n, this.addVal = Math.ceil(this.addVal), this.lastCount = this.curGold, this.curGold += n, ks.getIns().minusCoin(n), this.curGold >= a ? (this.isInCreate = !0, this.createFun = (() => {
                this.isInCreate = !1, this.lastCount = 0, this.curGold = 0, f.getIns().playSound(P.shengxing), ks.getIns().updateWaiter(this.waiterData.id, this.updateValType, ut.getIns().getCurLevelId()), t = ks.getIns().getWaiterLv(this.waiterData.id, this.updateValType, ut.getIns().getCurLevelId()), e.getIns().dispatchEvent(i.SHOWWAITEREF, this.waiterData.id);
                let s = ks.getIns().getWaiterData(this.waiterData.id, ut.getIns().getCurLevelId());
                Be.ins.isMaxLv(s) ? this.closePoint() : this.setNextUpType()
            })) : this.showCount()
        }
    }! function (e) {
        e[e.None = 0] = "None", e[e.speed = 1] = "speed", e[e.Carry = 2] = "Carry"
    }(F || (F = {}));
    class Ne extends Laya.Script {
        init() {
            this.node = this.owner;
            let t = this.owner.getComponent(Laya.PhysicsCollider);
            t.collisionGroup = r.item, t.canCollideWith = r.player, e.getIns().addEventListerner(i.LOADMAPEND, this.createUI, this)
        }
        onDestroy() {
            this.createUIMgr && (this.createUIMgr.owner.destroy(), this.createUIMgr = null), e.getIns().removeEventListerner(i.LOADMAPEND, this.createUI, this)
        }
        createUI() {
            if (!this.createUIMgr) {
                let e = Cs.getIns().createPrefab("prefab/item/createUI.json");
                ut.getIns().gameView.owner.addChild(e), this.createUIMgr = e.addComponent(ge), this.createUIMgr.init(), this.createUIMgr.setVideo(!0), this.createUIMgr.setShow(!0)
            }
        }
        getMoney() {
            return ut.getIns().getCurLevelData().atmGold
        }
        onLateUpdate() {
            // if (this.createUIMgr) {
            //     let e = fs.getIns().cameraMgr.worldPosToScreenPos(this.node.transform.position);
            //     this.createUIMgr.setPos(e.x, e.y - 180)
            // }
        }
    }
    class xe extends he {
        constructor() {
            super(...arguments), this.pickUpPosDatas = [], this.hats = [], this.kuzis = [], this.hatIndex = 10, this.kuIndex = 0, this.isMainPlayer = !0, this.isStopShowArray = !1, this.tempV4 = new Laya.Vector3, this.itemMove = new me, this.tempVec1 = new Laya.Vector3, this._moveSpeed = 8, this.normalSpeed = 10, this.moveTemp = new Laya.Vector3, this.lastShowZuida = !1, this.isInwork = !1, this.tempV2 = new Laya.Vector3, this.showyinTimer = 0, this.isShowZuiDa = !1, this.showZuiDaY = 0, this.maxPickUpCount = 5, this.curPickItems = [], this.itemTween = new be
        }
        init() {
            super.init(), this.Fx_ZZZ = this.owner.getChildByName("Fx_ZZZ"), this.Shadow = this._node.getChildByName("Shadow"), this.teachArray = this._node.getChildByName("array"), this.caidao = Cs.getIns().seekNodeByName(this._node, "caidao"), this.Torus = Cs.getIns().seekNodeByName(this._node, "Torus"), this.yugan = Cs.getIns().seekNodeByName(this._node, "yugan"), this.zuiDaNode = Cs.getIns().seekNodeByName(this.owner, "m_zuida"), this.showZuiDa(!1, 0), this.fx_Run = Cs.getIns().seekNodeByName(this.owner, "Fx_Run"), this.setRunEf(!1);
            let t = Cs.getIns().seekNodeByName(this.owner, "head");
            for (let e = 0; e < t.numChildren; e++) this.hats.push(t.getChildAt(e)), e == this.hatIndex ? this.hats[e].active = !0 : this.hats[e].active = !1;
            let s = this._node.getChildByName("Model");
            Cs.getIns().getChildInParBySgin(s, "ku0", this.kuzis);
            for (let e = 0; e < this.kuzis.length; e++) e == this.kuIndex ? this.kuzis[e].active = !0 : this.kuzis[e].active = !1;
            let a = Cs.getIns().seekNodeByName(this.owner, "pickUpNode");
            if (this.pickUpNode = a, a) {
                let e = [];
                Cs.getIns().getChildBySgin(a, "p", e);
                for (let t = 0; t < e.length; t++) {
                    let s = new Ue;
                    s.par = e[t], this.pickUpPosDatas.push(s)
                }
            }
            this.showZzz(!1), this.showWorkTools(-1), this.showPickNode(!0), this.showTeachArray(null), e.getIns().addEventListerner(i.PLAYERCARRYUP, this.playerUpCallBack, this)
        }
        showZzz(e) {
            this.Fx_ZZZ && (this.Fx_ZZZ.active = e)
        }
        showTeachArray(e) {
            this.teachTarget = e, this.teachArray.active = null != e
        }
        stopShowArray(e) {
            this.isStopShowArray = e
        }
        showPickNode(e) {
            this.pickUpNode && (this.pickUpNode.active = e)
        }
        showWorkTools(e) {
            this.caidao && (this.caidao.active = 2 == e), this.Torus && (this.Torus.active = 3 == e), this.yugan && (this.yugan.active = 1 == e)
        }
        showShadow(e) {
            this.Shadow && (this.Shadow.active = e)
        }
        onDestroy() {
            super.onDestroy(), e.getIns().removeEventListerner(i.PLAYERCARRYUP, this.playerUpCallBack, this)
        }
        setPlayerData(e) {
            super.setPlayerData(e), this.refershPickCount()
        }
        playerUpCallBack() {
            Cs.getIns().createEf("Fx_LevelUp", Cs.zeroVec, this._node, 1.5, !0, Cs.zeroVec, !0), this.refershPickCount()
        }
        refershPickCount() {
            let e = le.ins.getDataById(ks.getIns().getPlayerCarryLv());
            this.maxPickUpCount = e.playerMaxUp
        }
        setRunEf(e) {
            this.fx_Run && (this.fx_Run.active = e)
        }
        setStartPos(e, t) {
            super.setStartPos(e, t), this._node.transform.rotation.cloneTo(this.rotQua), this.fsm.changeState(U.Idle)
        }
        checkPlayWalkAnim() {
            this.isInwork || (this.hasHandleGoods() ? this.playAnim(ie.U_banyun, null, !1, 1, 1) : this.playAnim(ie.U_run, null, !1, 1, 1))
        }
        changeStateEnd(e) {
            switch (e) {
                case U.Walk:
                    this.playAnim(ie.B_run), this.checkPlayWalkAnim();
                    break;
                case U.Idle:
                    this.isInwork || (this.playAnim(ie.B_idleloop), this.hasHandleGoods() ? this.playAnim(ie.U_banyun, null, !1, 1, 1) : this.playAnim(ie.U_idleloop, null, !1, 1, 1))
            }
        }
        doAction(e) {
            switch (e) {
                case U.Walk:
                    this.doMove();
                    break;
                case U.Idle:
                    this.clearVec()
            }
            this.toRot(), this.itemTween.update(), this.itemMove.update(), this.teachTarget && (this.teachArray.active = !this.isStopShowArray, this.teachTarget.transform.position.cloneTo(this.tempV4), Cs.getIns().lookAtTarget(this.teachArray, this.tempV4)), this.curParkCashier && (this.showyinTimer += Laya.timer.delta, this.showyinTimer > 500 && (this.showyinTimer = 0, this.curParkCashier.setBox(!0), this.curParkCashier.collectMoney(this._node)))
        }
        speedUp() {
            this.moveAddSpeed = .8 * this._moveSpeed
        }
        endSpeedUp() {
            this.moveAddSpeed = 0
        }
        toRot() {
            let e = this._body.transform.rotation;
            Laya.Quaternion.lerp(e, this.rotQua, .2, e), this._body.transform.rotation = e
        }
        rockerUp() {
            super.rockerUp(), this.fsm.changeState(U.Idle), this.clearVec(), this.setRunEf(!1)
        }
        clearVec() {
            let e = this.rig.linearVelocity;
            e.x = 0, e.z = 0, e.y = 0, this.rig.linearVelocity = e
        }
        rockerDown() {
            super.rockerDown(), this.fsm.changeState(U.Walk), this.setRunEf(!0)
        }
        changeForward(e, t, s) {
            this._node.transform.position.cloneTo(this.tempVec1), this.tempVec1.x -= e, this.tempVec1.z -= t;
            let i = Math.abs(e),
                a = Math.abs(t),
                n = i > a ? i : a;
            n = n > 1 ? 1 : n, this.setAnimSpeed(n), Cs.getIns().lookAtTarget(this.tempSp, this.tempVec1), this.tempSp.transform.rotation.cloneTo(this.rotQua), this.tempSp.transform.getForward(this.moveForward), Laya.Vector3.normalize(this.moveForward, this.moveForward), Laya.Vector3.scale(this.moveForward, -n * this.moveSpeed, this.moveTemp), this.backMove()
        }
        gameStart() {}
        doMove() {
            if (!ut.getIns().isGameStart()) return;
            if (!this.isClickDown) return;
            let e = this.rig.linearVelocity;
            this.moveTemp.cloneTo(e), this.rig.linearVelocity = e;
            let t = this._node.transform.position;
            Laya.Vector3.add(this.cameraOffect, t, this.tempVec1), fs.getIns().cameraMgr.setCameraPos(this.tempVec1)
        }
        getCameraPos() {
            let e = this._node.transform.position;
            return Laya.Vector3.add(this.cameraOffect, e, this.tempVec1), this.tempVec1
        }
        onCollisionEnter(e) {
            if (!ut.getIns().isGameStart()) return;
            let t = e.other.owner.getComponent(Ne);
            if (t) {
                let e = {};
                e.count = t.getMoney(), Y.UIMgr.ins.openUI(Y.UIType.GetGoldView, e)
            } else;
        }
        onTriggerExit(e) {
            let t = e.owner.productBase;
            if (t) return t.endChangeWork(this), void t.outStore();
            let s = e.owner.getComponent(Ye);
            return s ? (s.outStore(!0), void(s.getParkType() == R.ParkCashier && (this.curParkCashier = null))) : void 0
        }
        backMove() {
            this._body.active = !0, this.checkPickMax(), this.showShadow(!0)
        }
        toWork(e, t) {
            this.lastShowZuida = this.isShowZuiDa, this.showPickNode(!1), this.showZuiDa(!1, this.showZuiDaY);
            let s = new Laya.Vector3;
            e.transform.getForward(s), s.x = -s.x, s.z = -s.z, this.lookForward(s);
            let i = this._node.transform.position;
            i.x = e.transform.position.x, i.z = e.transform.position.z, this._node.transform.position = i, this.showWorkTools(t.workTools), this.isInwork = !0, this.fsm.changeState(U.Idle), this.playAnim(ie.B_idleloop), this.playAnim(ie.U_idleloop, null, !1, 1, 1), 5 != ut.getIns().gameView.curWantedId && 12 != ut.getIns().gameView.curWantedId || this.showTeachArray(null)
        }
        lookForward(e) {
            e && (Laya.Vector3.add(e, this._node.transform.position, this.tempV2), this.tempV2.y = this._node.transform.position.y, Cs.getIns().lookAtTarget(this.tempSp, this.tempV2), this.tempSp.transform.rotation.cloneTo(this.rotQua))
        }
        endWork() {
            this.isInwork = !1, this.showPickNode(!0), this.showWorkTools(-1), this.checkPlayWalkAnim(), this.fsm.getState() == U.Walk ? this.playAnim(ie.B_run) : this.playAnim(ie.B_idleloop)
        }
        onTriggerEnter(e) {
            let t = e.owner.productBase;
            if (t) return void t.changeWork(this, () => {});
            let s = e.owner.getComponent(we);
            if (s) return ut.getIns().gameView.upRockerFun(), this.owner.active = !1, void s.enterNext();
            let i = e.owner.getComponent(pe);
            if (i) {
                if (i.getIsInCreate()) return;
                let e = () => {
                    let e = ks.getIns().getCoin(),
                        t = i.needMoney();
                    t = Math.min(t, e), i.addMoney(t), ks.getIns().minusCoin(t)
                };
                if (i.isVideo()) {
                    ut.getIns().gameView.upRockerFun();
                    let t = {};
                    t.callBack = (t => {
                        t && e()
                    }), Y.UIMgr.ins.openUI(Y.UIType.GetGoldView, t)
                } else e();
                return
            }
            let a = e.owner.getComponent(Ye);
            if (a) {
                if (a.enterStore(!0), a.openShadow(), ut.getIns().gameView && ut.getIns().gameView.closeWanted(7), a.getParkType() == R.ParkCashier) {
                    let e = a;
                    this.curParkCashier = e, e.setBox(!0), e.collectMoney(this._node)
                } else a.getParkType() == R.Trash ? this.trashDown(a) : this.checkPickDown(a);
                return
            }
            let n = e.owner.getComponent(ve);
            if (n) {
                if (n.enterStore(), 0 != this.getCurPickCount()) {
                    1 == n.getAcion(this._node.transform.position) ? this.checkPickDownFood(n) : this.checkPickUp(n)
                } else this.checkPickUp(n);
                return
            }
            if (e.collisionGroup == r.money) return this.pickMoney(e.owner), void(ut.getIns().gameView && ut.getIns().gameView.checkShowWanted(2));
            let o = e.owner.getComponent(ke);
            if (o) return void o.createWaiter();
            let h = e.owner.getComponent(_e);
            if (h) return void h.upDateWaiter();
            let l = e.owner.getComponent(ue);
            l && l.checkUseBuff()
        }
        showZuiDa(e, t) {
            if (this.isShowZuiDa = e, this.showZuiDaY = t, this.zuiDaNode) {
                let s = this.zuiDaNode.transform.position;
                s.y = t, this.zuiDaNode.transform.position = s, this.zuiDaNode.active = e
            }
        }
        checkPickMax() {
            let e = this.getCurPickCount(),
                t = this.maxPickUpCount;
            if (e >= (t = t > this.pickUpPosDatas.length ? this.pickUpPosDatas.length : t)) {
                let e = this.pickUpPosDatas[t - 1].par.transform.position.y + 1;
                this.showZuiDa(!0, e)
            } else this.showZuiDa(!1, 0)
        }
        pickMoney(e) {
            let t = e.transform.position.clone();
            e.parent.removeChild(e), this.owner.addChild(e), e.transform.position = t, e.getComponent(Laya.PhysicsCollider).enabled = !1, this.itemMove.toTarget(e, this.owner, 0, 4, () => {
                e.active = !1, ks.getIns().plusCoin(1), f.getIns().playSound(P.gold)
            })
        }
        checkPickUp(e) {
            let t = e.getProductItems(),
                s = this.getPickUpCount(),
                i = [];
            for (let e = 0; e < t.length; e++) 2 == t[e].itemState && i.push(t[e]);
            if (0 != (s = Math.min(s, i.length))) {
                if (i.length > s)
                    for (let e = i.length - 1; e >= s; e--) i.splice(e, 1);
                if (this.pickUpItem(i), this.checkPlayWalkAnim(), l.getIns().umLevel("event_banyu", 1), this.isMainPlayer)
                    if (6 == ut.getIns().gameView.curWantedId && e.parkType == R.ParkShadingyuProcess) {
                        let t = fs.getIns().getStoreByType(R.ParkShadingyu);
                        this.showTeachArray(t.node), t.showArrow(!0), e.showArrow(!1)
                    } else 11 == ut.getIns().gameView.curWantedId && e.parkType == R.ParkShadingyuProcess && (this.showTeachArray(fs.getIns().getProductByType(R.ParkYuguangtouProcess).node), e.showArrow(!1))
            }
        }
        pickUpItem(e) {
            for (let t = 0; t < e.length; t++) {
                e[t].setItemState(0);
                let s = new Te;
                s.clone(e[t]);
                let i = this.getPickUpPosData();
                if (!i) {
                    console.log("没有放置空间");
                    break
                }
                s.item = s.getItem(i.par), i.item = s.item, i.itemType = s.itemType, s.setItemState(1), this.itemTween.toLocal(i.item, () => {
                    s.setItemState(2)
                }, 100 * t, 250), this.curPickItems.push(s)
            }
            this.checkPickMax()
        }
        getPickUpPosData() {
            for (let e = 0; e < this.pickUpPosDatas.length; e++)
                if (null == this.pickUpPosDatas[e].item) return this.pickUpPosDatas[e];
            return null
        }
        removeItemInPos(e) {
            for (let t = 0; t < this.pickUpPosDatas.length; t++)
                if (e == this.pickUpPosDatas[t].item) {
                    this.pickUpPosDatas[t].item = null;
                    break
                }
        }
        sortItems() {
            for (let e = 0; e < this.pickUpPosDatas.length; e++)
                if (!this.pickUpPosDatas[e].item)
                    for (let t = e + 1; t < this.pickUpPosDatas.length; t++)
                        if (this.pickUpPosDatas[t].item) {
                            this.changeItem(this.pickUpPosDatas[e], this.pickUpPosDatas[t]);
                            break
                        }
        }
        changeItem(e, t) {
            e.item = t.item, t.item = null, e.item.parent.removeChild(e.item), e.par.addChild(e.item), e.item.transform.localPosition = Cs.zeroVec.clone()
        }
        getPickUpCount() {
            return this.maxPickUpCount - this.curPickItems.length
        }
        getCurPickCount() {
            let e = 0;
            for (let t = 0; t < this.pickUpPosDatas.length; t++) this.pickUpPosDatas[t].item && e++;
            return e
        }
        trashDown(e) {
            if (0 == this.curPickItems.length) return;
            let t = [];
            for (let e = 0; e < this.curPickItems.length; e++) t.push(this.curPickItems[e]);
            for (let e = 0; e < t.length; e++) {
                let s = this.curPickItems.indexOf(t[e]);
                this.removeItemInPos(t[e].item), s >= 0 && this.curPickItems.splice(s, 1)
            }
            this.sortItems(), e.pickDownItem(t), this.checkPlayWalkAnim(), this.checkPickMax()
        }
        checkPickDown(e) {
            let t = e.getSellType();
            if (t == W.None) return;
            let s = e.getCurContain();
            if (0 == s) return;
            let i = [];
            for (let e = 0; e < this.curPickItems.length; e++) t == this.curPickItems[e].itemType && i.push(this.curPickItems[e]);
            if (0 != (s = Math.min(s, i.length))) {
                if (i.length > s)
                    for (let e = i.length - 1; e >= s; e--) i.splice(e, 1);
                for (let e = 0; e < i.length; e++) {
                    let t = this.curPickItems.indexOf(i[e]);
                    this.removeItemInPos(i[e].item), t >= 0 && this.curPickItems.splice(t, 1)
                }
                this.sortItems(), e.pickDownItem(i), this.checkPlayWalkAnim(), this.checkPickMax()
            }
        }
        checkPickDownFood(e) {
            let t = e.useItemType;
            t != W.None && (this.pickDownFood(e, t, 0), e.secondUseItemType != W.None && (this.pickDownFood(e, e.secondUseItemType, 1), e.thirdUseItemType != W.None && this.pickDownFood(e, e.thirdUseItemType, 2)))
        }
        pickDownFood(e, t, s) {
            if (t == W.None) return;
            let i = e.getCurFoodContainByIndex(s);
            if (0 == i) return;
            let a = [];
            for (let s = 0; s < this.curPickItems.length; s++) {
                let i = this.curPickItems[s];
                if (t == i.itemType) a.push(i);
                else if (t == W.All) {
                    Q.ins.getDataById(i.itemType).JGBuild == e.parkType && a.push(i)
                }
            }
            if (0 != (i = Math.min(i, a.length))) {
                if (a.length > i)
                    for (let e = a.length - 1; e >= i; e--) a.splice(e, 1);
                for (let e = 0; e < a.length; e++) {
                    let t = this.curPickItems.indexOf(a[e]);
                    this.removeItemInPos(a[e].item), t >= 0 && this.curPickItems.splice(t, 1)
                }
                this.sortItems(), e.setUseItem(a, s), this.checkPlayWalkAnim()
            }
        }
        hasHandleGoods() {
            return this.curPickItems.length > 0
        }
        playWorkAnim(e, t) {
            this.isInwork && (e ? (this.playAnim(t.workAnim, () => {
                this.isInwork && (this.playAnim(ie.B_idleloop), this.playAnim(ie.U_idleloop, null, !1, 1, 1))
            }, !1, 1, 1), this.playAnim(ie.B_idleloop)) : (this.playAnim(ie.B_idleloop), this.playAnim(ie.U_idleloop, null, !1, 1, 1)))
        }
    }
    class Ue {}
    class Me {
        constructor() {
            this.curVec = new Laya.Vector3
        }
        tweenTo(e, t, s, i = 400) {
            this.node.transform.localPosition.cloneTo(this.curVec);
            let a = Laya.Tween.to(this.curVec, {
                x: 0,
                y: 0,
                z: 0
            }, i, Laya.Ease.linearNone, Laya.Handler.create(this, () => {
                a.clear(), e && !e.destroyed && e.transform && Cs.getIns().handlerFun(t)
            }), s, !1, !1)
        }
        updatePos() {
            if (!this.node || this.node.destroyed || !this.node.transform) return;
            let e = this.node.transform.localPosition;
            this.curVec.cloneTo(e), this.node.transform.localPosition = e
        }
    }
    class be {
        constructor() {
            this.moveList = []
        }
        update() {
            if (this.moveList.length > 0)
                for (let e = 0; e < this.moveList.length; e++) this.moveList[e].updatePos()
        }
        hasTween() {
            return this.moveList.length > 0
        }
        toLocal(e, t, s, i = 400) {
            let a = new Me;
            this.moveList.push(a), a.node = e, a.tweenTo(e, () => {
                let s = this.moveList.indexOf(a);
                s >= 0 && this.moveList.splice(s, 1), e.transform.localPosition = Cs.zeroVec.clone(), Cs.getIns().handlerFun(t)
            }, s, i)
        }
    }
    class Ve {
        constructor() {
            this.treeNodes = [], this.parentNode = null, this.nodeType = O.TreeNode, this.curNodeIndex = 0, this.enterState = E.Ready
        }
        Init() {}
        EnterNode() {
            return this.enterState != E.Ready ? this.enterState : (null == this.enterFun ? this.enterState = E.Success : this.enterState = this.enterFun(), this.enterState)
        }
        LeaveNode() {
            null != this.leaveFun && this.leaveFun(), this.ResetIndex()
        }
        Tick() {
            let e = this.EnterNode();
            return e != E.Success && e != E.Failed || this.LeaveNode(), e
        }
        AddChildNode(e) {
            this.treeNodes.indexOf(e) < 0 && this.treeNodes.push(e)
        }
        RemoveChildNode(e) {
            let t = this.treeNodes.indexOf(e);
            t >= 0 && this.treeNodes.splice(t, 1)
        }
        Reset() {
            this.treeNodes.splice(0, this.treeNodes.length), this.ResetIndex()
        }
        ResetIndex() {
            this.curNodeIndex = 0, this.enterState = E.Ready
        }
        ForceQuit() {
            this.curNodeIndex = 0, this.enterState = E.Ready;
            for (let e = 0; e < this.treeNodes.length; e++) this.treeNodes[e].ForceQuit()
        }
    }! function (e) {
        e[e.Running = 0] = "Running", e[e.Success = 1] = "Success", e[e.Failed = 2] = "Failed", e[e.Ready = 3] = "Ready"
    }(E || (E = {})),
    function (e) {
        e[e.Composite = 0] = "Composite", e[e.Sequence = 1] = "Sequence", e[e.Decorator = 2] = "Decorator", e[e.Parallel = 3] = "Parallel", e[e.Action = 4] = "Action", e[e.TreeNode = 5] = "TreeNode"
    }(O || (O = {}));
    class De extends Ve {
        SetNodeAction(e) {
            this.nodeAction = e
        }
        ClearNodeAction() {
            this.nodeAction = null
        }
        Init() {
            super.Init(), this.nodeType = O.Action
        }
        Tick() {
            this.EnterNode();
            let e = E.Failed;
            return (e = null == this.nodeAction ? E.Failed : this.nodeAction()) != E.Success && e != E.Failed || this.LeaveNode(), e
        }
        Reset() {
            super.Reset(), this.ClearNodeAction()
        }
    }
    class Fe extends Ve {
        Init() {
            super.Init(), this.nodeType = O.Sequence
        }
        Tick() {
            let e = this.EnterNode();
            return e == E.Failed ? (this.LeaveNode(), E.Failed) : 0 == this.treeNodes.length ? (this.LeaveNode(), E.Success) : (e = this.treeNodes[this.curNodeIndex].Tick()) == E.Running ? E.Running : e == E.Failed ? (this.LeaveNode(), E.Failed) : (this.curNodeIndex++, this.curNodeIndex == this.treeNodes.length ? (this.LeaveNode(), E.Success) : E.Running)
        }
    }
    class Ee {
        constructor() {
            this.enableTree = !1
        }
        Init(e) {
            this.rootNode = e
        }
        Tick() {
            return this.enableTree ? null == this.rootNode ? E.Failed : this.rootNode.Tick() : E.Ready
        }
        StartTree() {
            this.enableTree = !0
        }
        ForceQuit() {
            this.enableTree = !1, this.rootNode.ForceQuit()
        }
    }
    class Oe {
        constructor() {
            this.mapNav = {}, this.tempVec = new Laya.Vector3
        }
        static getIns() {
            return this.instance || (this.instance = new Oe), this.instance
        }
        loadMap(e, t) {
            if (this.mapKey = e, this.mapNav[e]) return void Cs.getIns().handlerFun(t, this.mapNav[e]);
            let s = "sub/online/Sprites/Conventional/" + e + ".txt";
            Z.getIns().loadTxt(s, s => {
                let i = NevMesh.buildNodesByJson(JSON.parse(s));
                NevMesh.setZoneData(e, i), this.mapNav[e] = i, Cs.getIns().handlerFun(t)
            })
        }
        createNavMeshGroup(e) {
            this.playerNavMeshGroup || (this.playerNavMeshGroup = NevMesh.getGroup(this.mapKey, e))
        }
        hasInMap(e) {
            let t = NevMesh.zoneNodes[this.mapKey].groups[this.playerNavMeshGroup],
                s = NevMesh.zoneNodes[this.mapKey].vertices;
            if (!s || !t) return !1;
            for (let i = 0; i < t.length; i++)
                if (NevMesh.Vector3.isVectorInPolygon(e, t[i], s)) return !0;
            return !1
        }
        getPath(e, t) {
            return NevMesh.findPath(e, t, this.mapKey, this.playerNavMeshGroup)
        }
        getNearPos(e, t) {
            return NevMesh.getRandomNode(this.mapKey, this.playerNavMeshGroup, e, t)
        }
    }
    class Re extends xe {
        constructor() {
            super(...arguments), this.treeFsm = new Ee, this.tmepVec1 = new Laya.Vector3, this.moveVec = new Laya.Vector3, this._moveSpeed = .02, this.normalSpeed = .1, this.roadPath = null, this.roadIndex = 0, this.curMoveForward = new Laya.Vector3, this.curMovePos = new Laya.Vector3
        }
        getWaterId() {
            return 6001
        }
        init() {
            this.waterConfig = fe.ins.getDataById(this.getWaterId()), super.init(), this.isMainPlayer = !1, this.rig && this.rig.destroy(), this.initActionTree(), this.waiterUpLv(), e.getIns().addEventListerner(i.WAITERUPDATE, this.waiterUpLv, this), e.getIns().addEventListerner(i.SHOWWAITEREF, this.showLvEf, this)
        }
        getWaiterData() {
            return this.waterConfig
        }
        showLvEf(e) {
            this.getWaterId() == e && Cs.getIns().createEf("Fx_LevelUp", Cs.zeroVec, this._node, 1.5, !0, Cs.zeroVec, !0)
        }
        onDestroy() {
            e.getIns().removeEventListerner(i.WAITERUPDATE, this.waiterUpLv, this), e.getIns().removeEventListerner(i.SHOWWAITEREF, this.showLvEf, this)
        }
        waiterUpLv() {
            let e = le.ins.getDataById(ks.getIns().getWaiterLv(this.getWaterId(), F.Carry, ut.getIns().getCurLevelId()));
            this.maxPickUpCount = e.waiterMaxCount;
            let t = le.ins.getDataById(ks.getIns().getWaiterLv(this.getWaterId(), F.speed, ut.getIns().getCurLevelId()));
            this.setSpeed(t.waiterSpeed), Laya.Vector3.normalize(this.curMoveForward, this.curMoveForward), Laya.Vector3.scale(this.curMoveForward, this.moveSpeed, this.moveVec)
        }
        initActionTree() {}
        checkToTarget(e) {
            return Laya.Vector3.subtract(e, this._node.transform.position, this.tmepVec1), this.tmepVec1.y = 0, Laya.Vector3.dot(this.tmepVec1, this.curMoveForward) < 0
        }
        startWaiter() {
            this.fsm.changeState(U.MoveToProduct), this.treeFsm.StartTree()
        }
        setSpeed(e) {
            this._moveSpeed = e, this.setAnimSpeed(this.moveSpeed / this.normalSpeed)
        }
        doMove() {
            ut.getIns().isGameStart() && this._node.transform.translate(this.moveVec, !1)
        }
        recordMoveForward(e) {
            Laya.Vector3.subtract(e, this._node.transform.position, this.curMoveForward), this.curMoveForward.y = 0, Laya.Vector3.normalize(this.curMoveForward, this.curMoveForward), Laya.Vector3.scale(this.curMoveForward, this.moveSpeed, this.moveVec)
        }
        toNextMovePos() {
            if (!this.roadPath || 0 == this.roadPath.length) return void(this.roadPath = null);
            this.roadIndex++, this.roadPath[this.roadIndex].cloneTo(this.curMovePos), this.recordMoveForward(this.curMovePos), this.changeRot(this.curMovePos)
        }
        changeRot(e) {
            Cs.getIns().lookAtTarget(this.tempSp, e), this.tempSp.transform.rotation.cloneTo(this.rotQua)
        }
        changeStateEnd(e) {
            switch (e) {
                case U.MoveToPark:
                case U.MoveToProduct:
                case U.ToTrach:
                    this.playAnim(ie.B_run), this.checkPlayWalkAnim(), this.setAnimSpeed(this.moveSpeed / this.normalSpeed);
                    break;
                case U.PickProduct:
                case U.PickDwonProduct:
                case U.Idle:
                    this.playAnim(ie.B_idleloop), this.hasHandleGoods() ? this.playAnim(ie.U_banyun, null, !1, 1, 1) : this.playAnim(ie.U_idleloop, null, !1, 1, 1);
                    break;
                case U.ShouYin:
                    this.playAnim(ie.B_idleloop), this.playAnim(ie.U_idleloop, null, !1, 1, 1)
            }
        }
        getNextPath(e) {
            let t = this._node.transform.position.clone();
            t.y = fs.getIns().startPos.transform.position.y, this.roadPath = Oe.getIns().getPath(t, e), this.roadIndex = -1
        }
        offectPlayerPos(e) {
            let t = this._node.transform.position;
            t.x = e.x, t.y = e.y, this._node.transform.position = t
        }
        doAction(e) {
            this.toRot(), this.itemTween.update(), this.treeFsm.Tick()
        }
    }
    class We extends Re {
        constructor() {
            super(...arguments), this.workId = 6001
        }
        getWaterId() {
            return this.workId
        }
        setWorkId(e) {
            this.workId = e
        }
        init() {
            this.waterConfig = fe.ins.getDataById(this.getWaterId()), this.hatIndex = this.waterConfig.hat, this.kuIndex = this.waterConfig.pants, super.init(), this.parkProduct = fs.getIns().getNotWorkProductByType(this.waterConfig.workParkType)
        }
        changeStateEnd(e) {
            switch (super.changeStateEnd(e), this.showWorkTools(-1), e) {
                case U.Work:
                    this.showWorkTools(this.waterConfig.workTools), this.playAnim(this.waterConfig.workAnim, () => {
                        this.fsm.getState() == U.Work && this.fsm.changeState(U.WaitWork)
                    }, !1, 1, 1), this.playAnim(ie.B_idleloop);
                    break;
                case U.WaitWork:
                    this.showWorkTools(this.waterConfig.workTools), this.playAnim(ie.B_idleloop), this.playAnim(ie.U_idleloop, null, !1, 1, 1)
            }
        }
        playChelfAnim(e) {
            this.fsm.getState() != U.Work && this.fsm.getState() != U.WaitWork || (e ? this.fsm.changeState(U.Work) : this.fsm.changeState(U.WaitWork))
        }
        moveToWaiterPos() {
            if (this.fsm.getState() != U.MoveToPark) return E.Success;
            if (!this.productPos) {
                this.productPos = this.parkProduct.getWaiterPos().transform.position.clone(), this.recordMoveForward(this.productPos);
                let e = new Laya.Vector3;
                Laya.Vector3.subtract(this.productPos, this._node.transform.position, e), this.lookForward(e)
            }
            if (this.checkToTarget(this.productPos)) {
                this.offectPlayerPos(this.productPos);
                let e = new Laya.Vector3;
                return this.parkProduct.getWaiterPos().transform.getForward(e), e.x = -e.x, e.z = -e.z, this.lookForward(e), this.roadPath = null, this.fsm.changeState(U.Idle), E.Success
            }
            return this.doMove(), E.Running
        }
        setToMoveWaiterPos() {
            this.productPos = null, this.fsm.changeState(U.MoveToPark)
        }
        setMoveToProduct() {
            this.productPos = null, this.fsm.changeState(U.MoveToProduct)
        }
        initActionTree() {
            let e = new Fe,
                t = new De;
            t.SetNodeAction(this.moveToPark.bind(this));
            let s = new De;
            s.SetNodeAction(this.toWork.bind(this));
            let i = new De;
            i.SetNodeAction(this.moveToWaiterPos.bind(this)), e.AddChildNode(t), e.AddChildNode(s), e.AddChildNode(i), this.treeFsm.Init(e)
        }
        toWork() {
            return this.fsm.getState() != U.Work ? E.Success : E.Running
        }
        startWaiter() {
            super.startWaiter()
        }
        moveToPark() {
            if (this.fsm.getState() != U.MoveToProduct) return E.Success;
            if (!this.productPos) {
                this.productPos = this.parkProduct.getWorkPos().transform.position.clone(), this.recordMoveForward(this.productPos);
                let e = new Laya.Vector3;
                Laya.Vector3.subtract(this.productPos, this._node.transform.position, e), this.lookForward(e)
            }
            if (this.checkToTarget(this.productPos)) {
                this.offectPlayerPos(this.productPos);
                let e = new Laya.Vector3;
                return this.parkProduct.getWorkPos().transform.getForward(e), e.x = -e.x, e.z = -e.z, this.lookForward(e), this.roadPath = null, this.fsm.changeState(U.WaitWork), this.parkProduct.setWork(this), E.Success
            }
            return this.doMove(), E.Running
        }
    }
    class Ge {
        static getCreateList() {
            let e = ut.getIns().getCurLevelId();
            return 1 == e ? [R.ParkCashier, R.ParkShadingyu, R.ParkShadingyuProcess, R.ParkYuguangtou, R.ParkYuguangtouProcess, R.ParkJinqiangyu, R.ParkJinqiangyuProcess, R.ParkShengyupian, R.ParkShengyupianProcess, R.ParkPangxie, R.ParkPangxieProcess, R.ParkKaoxietui, R.ShaoKao, R.ParkDalongxia, R.ParkDalongxiaProcess, R.ParkLongxiadacang, R.ChaoCai, R.ParkXiaozhangyu, R.ParkXiaozhangyuProcess, R.ParkYuwang, R.ParkXia, R.ParkXiaProcess, R.ParkYoumengxia] : 2 == e ? [R.ParkCashier, R.ParkHailuo, R.ParkDalongxiaProcess, R.ParkDalongxiaProcess, R.ParkDalongxiaProcess, R.ParkDalongxiaProcess, R.ParkShaokao, R.ParkShaokaoProcess, R.ParkShaokaoProcess, R.ParkXiangbabanProcess, R.ParkShaokaoProcess, R.ParkShaokaoProcess, R.ParkXiaozhangyu, R.ParkXiaozhangyuProcess, R.ParkXiaozhangyuProcess, R.ParkXiaozhangyuProcess, R.ParkXiaozhangyuProcess, R.ParkYouyu, R.ParkYouyuProcess, R.ParkYouyuProcess, R.ParkShengyupian, R.ParkShengyupianProcess, R.ParkCashier, R.ParkXia, R.ParkXiaProcess, R.Park2] : 3 == e ? [R.ParkCashier, R.ParkKaoshenghao, R.ParkKaoshenghaoProcess, R.ParkKaoshenghaoProcess, R.ParkKaoyouyu, R.ParkKaoyouyuProcess, R.ParkKaoyouyuProcess, R.ParkYuwang, R.ParkYuwangProcess, R.ParkYuwangProcess, R.ParkLongxiadacang, R.ParkLongxiadacangProcess] : void 0
        }
        static getCreateList1() {
            let e = ut.getIns().getCurLevelId();
            return 1 == e ? [R.ParkCashier] : 2 == e ? [R.ParkPangxie, R.ParkKaoxietuiProcess, R.ParkDalongxiaProcess, R.ParkDalongxiaProcess, R.ParkXiangbaban, R.ParkShaokaoProcess, R.ParkShaokaoProcess, R.ParkXiaozhangyuProcess, R.ParkXiaozhangyuProcess, R.ParkXiaozhangyuProcess, R.ParkXiaozhangyuProcess] : 3 == e ? [R.ParkKaoshenghaoProcess, R.ParkKaoshenghaoProcess, R.ParkKaoshenghaoProcess, R.ParkKaoshenghaoProcess, R.ParkKaoyouyuProcess, R.ParkKaoyouyuProcess, R.ParkKaoyouyuProcess, R.ParkKaoyouyuProcess, R.ParkYuwangProcess, R.ParkYuwangProcess, R.ParkYuwangProcess, R.ParkYuwangProcess] : void 0
        }
        static checkCreateBuild(e, t) {
            let s = ut.getIns().getCurLevelId();
            if (1 == s) return e == R.ParkYuguangtou ? ks.getIns().getWaiterCountByID(6005, s) >= 1 : e != R.ParkCashier || 2 != t || !!fs.getIns().buildIsCreate(R.ShaoKao);
            if (2 == s) {
                if (e == R.ParkPangxie) return fs.getIns().getBuildCount(R.ParkDalongxiaProcess) >= 2;
                if (e == R.ParkDalongxiaProcess) {
                    if (2 == t) return fs.getIns().getBuildCount(e) >= 4
                } else {
                    if (e == R.ParkXiangbaban) return fs.getIns().getBuildCount(R.ParkShaokaoProcess) >= 4;
                    if (e == R.ParkShaokaoProcess) {
                        if (2 == t) return fs.getIns().getBuildCount(R.ParkShaokaoProcess) >= 4
                    } else if (e == R.ParkXiaozhangyuProcess && 2 == t) return fs.getIns().getBuildCount(e) >= 4
                }
                return !0
            }
            if (3 == s)
                if (e == R.ParkKaoshenghaoProcess) {
                    if (2 == t) return fs.getIns().getBuildCount(e) >= 2
                } else if (e == R.ParkKaoyouyuProcess) {
                if (2 == t) return fs.getIns().getBuildCount(e) >= 2
            } else if (e == R.ParkYuwangProcess && 2 == t) return fs.getIns().getBuildCount(e) >= 2;
            return !0
        }
        static checkWaiterOpen(e) {
            let t = e.getWaiterData(),
                s = ks.getIns().getWaiterCountByID(t.id, ut.getIns().getCurLevelId()),
                i = ut.getIns().getCurLevelId();
            if (1 == i) {
                if (6001 == t.id) {
                    if (0 == s) {
                        if (fs.getIns().buildIsCreate(R.ParkJinqiangyuProcess)) return void e.openPoint()
                    } else if (1 == s && fs.getIns().getBuildCount(R.ParkCashier) >= 2) return void e.openPoint();
                    e.closePoint()
                } else if (6002 == t.id) {
                    if (0 == s && fs.getIns().buildIsCreate(R.ParkYuguangtouProcess)) return void e.openPoint();
                    e.closePoint()
                } else if (6003 == t.id) {
                    if (0 == s) {
                        if (fs.getIns().buildIsCreate(R.ShaoKao)) return void e.openPoint()
                    } else if (1 == s && fs.getIns().buildIsCreate(R.ChaoCai)) return void e.openPoint();
                    e.closePoint()
                } else if (6004 == t.id) e.closePoint();
                else if (t.id >= 6005 && t.id <= 6014) {
                    if (0 == s) {
                        if (!fs.getIns().buildIsCreate(t.workParkType)) return void e.closePoint();
                        if (6005 != t.id) return 0 == ks.getIns().getWaiterCountByID(6005, ut.getIns().getCurLevelId()) ? void e.closePoint() : void e.openPoint();
                        if (this.isFirstShowYin) return void e.openPoint()
                    }
                    e.closePoint()
                }
            } else if (2 == i) {
                if (6001 == t.id) {
                    if (0 == s) {
                        if (fs.getIns().buildIsCreate(R.ParkKaoxietuiProcess)) return void e.openPoint()
                    } else if (1 == s && 2 == fs.getIns().getBuildCount(R.ParkCashier)) return void e.openPoint();
                    e.closePoint()
                } else if (6002 == t.id) {
                    if (0 == s) {
                        if (fs.getIns().buildIsCreate(R.ParkXiangbabanProcess)) return void e.openPoint()
                    } else if (1 == s && fs.getIns().getBuildCount(R.ParkXiaozhangyu) > 0) return void e.openPoint();
                    e.closePoint()
                } else if (6003 == t.id) {
                    if (0 == s) {
                        if (fs.getIns().buildIsCreate(R.ParkKaoxietuiProcess)) return void e.openPoint()
                    } else if (1 == s && fs.getIns().getBuildCount(R.ParkXiaProcess) > 0) return void e.openPoint();
                    e.closePoint()
                } else if (6004 == t.id) {
                    if (0 == s) {
                        if (fs.getIns().buildIsCreate(R.ParkKaoxietuiProcess)) return void e.openPoint()
                    } else if (1 == s && fs.getIns().getBuildCount(R.ParkXiaProcess) > 0) return void e.openPoint();
                    e.closePoint()
                }
            } else if (3 == i)
                if (6001 == t.id) {
                    if (0 == s && fs.getIns().buildIsCreate(R.ParkKaoshenghao)) return void e.openPoint();
                    e.closePoint()
                } else if (6002 == t.id) {
                if (0 == s && fs.getIns().getBuildCount(R.ParkKaoyouyuProcess) >= 2) return void e.openPoint();
                e.closePoint()
            }
            e.closePoint()
        }
        static checkBuff(e) {
            let t = ut.getIns().getCurLevelId();
            if (1 == t) {
                if (e.getBuffType() == V.Carry) {
                    let t = ks.getIns().getPlayerCarryLv();
                    le.ins.isMaxById(t) || fs.getIns().buildIsCreate(R.ParkYuguangtouProcess) && e.openPoint()
                }
            } else if (2 == t) {
                if (e.getBuffType() == V.Carry) {
                    let t = ks.getIns().getPlayerCarryLv();
                    le.ins.isMaxById(t) || fs.getIns().buildIsCreate(R.ParkShaokao) && e.openPoint()
                }
            } else if (3 == t && e.getBuffType() == V.Carry) {
                let t = ks.getIns().getPlayerCarryLv();
                le.ins.isMaxById(t) || fs.getIns().buildIsCreate(R.ParkKaoshenghao) && e.openPoint()
            }
        }
        static addWork(e, t) {
            if (e) {
                let t = e.addComponent(We);
                return t.init(), t
            }
        }
        static checkWaiterUpOpen(e) {
            return 1 != ut.getIns().getCurLevelId() || 6005 != e.id || !!fs.getIns().buildIsCreate(R.ParkJinqiangyuProcess)
        }
    }
    Ge.isFirstShowYin = !1, Ge.hasPKey = "hasPKey";
    class Ye extends Laya.Script3D {
            constructor() {
                super(...arguments), this.parkType = R.ParkCashier, this.showNodes = [], this.goodDatas = [], this.standPoss = [], this.hasGood = !1, this.isCreate = !1, this.itemTween = new be, this.sellType = W.None, this.isShowShadow = !0, this.isOpen = 0, this.enterTimes = 0
            }
            getCreatePos() {
                return this.createPos ? this.createPos : this.node
            }
            getSellType() {
                return this.sellType
            }
            init() {
                this.node = this.owner, this.createPos = this.node.getChildByName("createPos"), this.fx_Arrow = this.owner.getChildByName("Fx_Arrow"), this.buildData = te.ins.getDataById(this.getBuildId());
                let t = Cs.getIns().seekNodeByName(this.owner, "showNode"),
                    s = this.node.getComponent(Laya.PhysicsCollider);
                s.collisionGroup = r.Store, s.canCollideWith = r.player, s.isTrigger = !0;
                let a = [];
                Cs.getIns().getChildBySgin(this.owner, "col_", a);
                for (let e = 0; e < a.length; e++) {
                    let t = a[e].getComponent(Laya.PhysicsCollider);
                    t.collisionGroup = r.item, t.canCollideWith = r.player
                }
                let n = Cs.getIns().seekNodeByName(this.owner, "S");
                if (n && (this.bottomScaleAnim = n.getComponent(Laya.Animator), this.closeShadow()), t) {
                    Cs.getIns().getChildInParBySgin(t, "p", this.showNodes);
                    for (let e = 0; e < this.showNodes.length; e++) {
                        let t = new Te;
                        t.item = this.showNodes[e].getChildAt(0), t.setItemState(0), this.goodDatas.push(t)
                    }
                }
                let o = Cs.getIns().seekNodeByName(this.owner, "standPos");
                if (o) {
                    Cs.getIns().getChildBySgin(o, "p", this.standPoss);
                    for (let e = 0; e < this.standPoss.length; e++) {
                        let t = this.standPoss[e].transform.position;
                        t.y = fs.getIns().startPos.transform.position.y, this.standPoss[e].transform.position = t
                    }
                }
                let h = this.node.getChildByName("bingxiang");
                h && (this.bingxiangAnim = h.getChildByName("bingxiang").getComponent(Laya.Animator)), this.playBingXiang(ie.bingxiangclose), this.checkHasGoods(), this.showArrow(!1), e.getIns().addEventListerner(i.LOADMAPEND, this.createUI, this)
            }
            playBingXiang(e) {
                this.bingxiangAnim && this.bingxiangAnim.lastName != e && (this.bingxiangAnim.play(e, 0, 0), this.bingxiangAnim.lastName = e)
            }
            createUI() {
                if (!this.autoFullViewItem) {
                    let e = Cs.getIns().createPrefab("prefab/item/autoFullView.json");
                    ut.getIns().gameView.owner.addChild(e), this.autoFullViewItem = e.addComponent(ne), this.autoFullViewItem.init(), this.autoFullViewItem.setIndex(200), this.autoFullViewItem.adCallBackFun = (() => {
                        this.fullGoods()
                    }), this.hideUI()
                }
            }
            fullGoods() {
                for (let e = 0; e < this.goodDatas.length; e++) 0 == this.goodDatas[e].itemState && this.goodDatas[e].setItemState(2);
                this.checkHasGoods(), this.hideUI()
            }
            showUI() {
                this.autoFullViewItem && this.autoFullViewItem.setShow(!0)
            }
            hideUI() {
                this.autoFullViewItem && this.autoFullViewItem.setShow(!1)
            }
            onDestroy() {
                this.autoFullViewItem && (this.autoFullViewItem.owner.destroy(), this.autoFullViewItem = null), e.getIns().removeEventListerner(i.LOADMAPEND, this.createUI, this)
            }
            showArrow(e) {
                this.fx_Arrow && (this.fx_Arrow.active = e)
            }
            openShadow() {
                this.isShowShadow || (this.isShowShadow = !0, this.playBottomAnim(ie.ShadowActive))
            }
            playBottomAnim(e) {
                this.bottomScaleAnim && this.bottomScaleAnim.play(e, 0, 0)
            }
            closeShadow() {
                this.isShowShadow && (this.isShowShadow = !1, this.playBottomAnim(ie.ShadowClose))
            }
            getBuildId() {
                return 1001
            }
            getRandomStandPos() {
                if (0 == this.standPoss.length) return null;
                for (let e = 0; e < this.standPoss.length; e++)
                    if (!this.standPoss[e][Ge.hasPKey]) return this.standPoss[e];
                return this.standPoss[Cs.getIns().randomNum(0, this.standPoss.length - 1)]
            }
            checkHasGoods() {
                this.hasGood = !1;
                for (let e = 0; e < this.goodDatas.length; e++) 2 == this.goodDatas[e].itemState && (this.hasGood = !0)
            }
            hasGoods() {
                return this.hasGood
            }
            getCurContain() {
                let e = 0;
                for (let t = 0; t < this.goodDatas.length; t++) 0 == this.goodDatas[t].itemState && e++;
                return e
            }
            getGoodsByCount(e) {
                let t = [],
                    s = 0;
                for (let i = 0; i < this.goodDatas.length && (2 == this.goodDatas[i].itemState && (t.push(this.goodDatas[i]), s++), s != e); i++);
                return t
            }
            getParkType() {
                return this.parkType
            }
            getSellItemType() {
                return Cs.getItemTypeByParkType(this.parkType)
            }
            pickDownItem(e) {
                for (let t = 0; t < e.length; t++) {
                    let s = this.getProductPos();
                    if (!s) {
                        console.error("没有位置!");
                        break
                    }
                    s.setItemState(1), s.hideItem();
                    let i = e[t],
                        a = i.item.transform.position.clone();
                    i.item.parent.removeChild(i.item), s.item.parent.addChild(i.item), i.item.transform.position = a, this.itemTween.toLocal(i.item, () => {
                        s.setItemState(2), i.item.destroy(), this.checkHasGoods()
                    }, 100 * t)
                }
            }
            getProductPos() {
                for (let e = 0; e < this.goodDatas.length; e++)
                    if (0 == this.goodDatas[e].itemState) return this.goodDatas[e];
                return null
            }
            onUpdate() {
                if (this.itemTween.update(), this.autoFullViewItem) {
                    let e;
                    e = fs.getIns().cameraMgr.worldPosToScreenPos(this.node.transform.position), this.autoFullViewItem.setPos(e.x, e.y - 250)
                }
            }
            openStore() {
                1 != this.isOpen && (this.isOpen = 1, this.isCreate = !0, Cs.getIns().createEf("Fx_GetNew", this.node.transform.position, fs.getIns().owner, 1.5, !0), Laya.timer.once(400, this, () => {
                    this.owner.active = !0
                }), this.openStoreEnd())
            }
            openStoreEnd() {}
            enterStore(e = !1) {
                this.enterTimes++, 1 == this.enterTimes && (this.openShadow(), this.playBingXiang(ie.bingxiang)), this.getCurContain() > 0 && e && this.showUI()
            }
            outStore(e = !1) {
                e && this.hideUI(), 0 != this.enterTimes && (this.enterTimes--, 0 == this.enterTimes && (this.closeShadow(), this.playBingXiang(ie.bingxiangclose)))
            }
            closeStore() {
                -1 != this.isOpen && (this.isOpen = -1, this.owner.active = !1, this.isCreate = !1)
            }
            getIsCreate() {
                return this.isCreate
            }
        }! function (e) {
            e[e.None = 0] = "None", e[e.ParkCashier = 1] = "ParkCashier", e[e.ParkJinqiangyu = 2] = "ParkJinqiangyu", e[e.ParkShadingyu = 3] = "ParkShadingyu", e[e.ParkDalongxia = 4] = "ParkDalongxia", e[e.ParkJinqiangyuProcess = 5] = "ParkJinqiangyuProcess", e[e.ParkDalongxiaProcess = 6] = "ParkDalongxiaProcess", e[e.ParkShadingyuProcess = 7] = "ParkShadingyuProcess", e[e.ParkYuguangtouProcess = 8] = "ParkYuguangtouProcess", e[e.ParkYuguangtou = 9] = "ParkYuguangtou", e[e.ParkHailuo = 10] = "ParkHailuo", e[e.ParkHailuoProcess = 11] = "ParkHailuoProcess", e[e.ParkKaoxietuiProcess = 12] = "ParkKaoxietuiProcess", e[e.ParkKaoxietui = 13] = "ParkKaoxietui", e[e.Trash = 14] = "Trash", e[e.Plane2 = 1017] = "Plane2", e[e.Plane3 = 1018] = "Plane3", e[e.ParkPangxie = 17] = "ParkPangxie", e[e.ParkPangxieProcess = 18] = "ParkPangxieProcess", e[e.ParkShaokao = 19] = "ParkShaokao", e[e.ParkShaokaoProcess = 20] = "ParkShaokaoProcess", e[e.ParkXiangbaban = 21] = "ParkXiangbaban", e[e.ParkXiangbabanProcess = 22] = "ParkXiangbabanProcess", e[e.ParkXia = 23] = "ParkXia", e[e.ParkXiaProcess = 24] = "ParkXiaProcess", e[e.ParkXiaozhangyu = 25] = "ParkXiaozhangyu", e[e.ParkXiaozhangyuProcess = 26] = "ParkXiaozhangyuProcess", e[e.ParkYouyu = 27] = "ParkYouyu", e[e.ParkYouyuProcess = 28] = "ParkYouyuProcess", e[e.ParkShengyupian = 29] = "ParkShengyupian", e[e.ParkShengyupianProcess = 30] = "ParkShengyupianProcess", e[e.Park2 = 1031] = "Park2", e[e.Park3 = 1032] = "Park3", e[e.ParkKaoyouyu = 31] = "ParkKaoyouyu", e[e.ParkKaoyouyuProcess = 32] = "ParkKaoyouyuProcess", e[e.ParkKaoshenghao = 33] = "ParkKaoshenghao", e[e.ParkKaoshenghaoProcess = 34] = "ParkKaoshenghaoProcess", e[e.ParkYuwang = 35] = "ParkYuwang", e[e.ParkYuwangProcess = 36] = "ParkYuwangProcess", e[e.ParkLongxiadacang = 37] = "ParkLongxiadacang", e[e.ParkLongxiadacangProcess = 38] = "ParkLongxiadacangProcess", e[e.ParkYoumengxia = 39] = "ParkYoumengxia", e[e.ParkYoumengxiaProcess = 40] = "ParkYoumengxiaProcess", e[e.ShaoKao = 2001] = "ShaoKao", e[e.ChaoCai = 2002] = "ChaoCai"
        }(R || (R = {})),
        function (e) {
            e[e.None = 0] = "None", e[e.Jinqiangyu = 1] = "Jinqiangyu", e[e.Shadingyu = 2] = "Shadingyu", e[e.Shengyupian = 3] = "Shengyupian", e[e.Dalongxia = 4] = "Dalongxia", e[e.Yuguangtou = 5] = "Yuguangtou", e[e.Hailuo = 6] = "Hailuo", e[e.Cashier = 7] = "Cashier", e[e.Money = 8] = "Money", e[e.Pangxie = 9] = "Pangxie", e[e.Xia = 10] = "Xia", e[e.Xiangbaban = 11] = "Xiangbaban", e[e.Xiaozhangyu = 12] = "Xiaozhangyu", e[e.Youyu = 13] = "Youyu", e[e.Kaoshenghao = 14] = "Kaoshenghao", e[e.Kaoxietui = 15] = "Kaoxietui", e[e.Kaoyouyu = 16] = "Kaoyouyu", e[e.Shaokao = 17] = "Shaokao", e[e.Yuwang = 18] = "Yuwang", e[e.Longxiadacang = 19] = "Longxiadacang", e[e.Youmengxia = 20] = "Youmengxia", e[e.All = 10001] = "All"
        }(W || (W = {})),
        function (e) {
            e[e.None = 0] = "None", e[e.Catch = 1] = "Catch", e[e.Product = 2] = "Product", e[e.Player = 3] = "Player"
        }(G || (G = {}));
    class Ke {
        constructor() {
            this.mistakeData = new He, this.shaderCompiled = !1, this.wxSdkVesion = "1.00.00", this.cityData = new Xe, this.misCityData = new Xe, this.cityHide = !1, this.curVivoTime = -1, this.curWxTime = -1
        }
        static getIns() {
            return this.instance || (this.instance = new Ke), this.instance
        }
        init(e) {
            l.getIns().init(), d.getIns(), Cs.getIns().handlerFun(e)
        }
        loadOverConfig() {}
        cloneLevelConfig(e, t, s) {
            for (let i = 0; i < s.length; i++) e[s[i]] = t[s[i]]
        }
        getMistakeData() {
            return this.mistakeData
        }
        preloadAsset(e) {
            Cs.getIns().handlerFun(e)
        }
        preCompileShader(e) {
            if (this.shaderCompiled) return void Cs.getIns().handlerFun(e);
            this.shaderCompiled = !0;
            Cs.getIns().loadTxt("res/tempConf/shaderCompile.txt", t => {
                (t => {
                    let s = JSON.parse(t);
                    Cs.getIns().compileShader(s, e)
                })(t)
            })
        }
        debugModeShader() {
            Laya.Shader3D.debugMode = !0;
            let e = [];
            for (let t = 0; t < Laya.Shader3D.debugShaderVariantCollection.variantCount; t++) {
                let s = Laya.Shader3D.debugShaderVariantCollection.getByIndex(t),
                    i = {};
                i.shaderName = s.shader.name, i.defineNames = s.defineNames, i.passIndex = s.passIndex, i.subShaderIndex = s.subShaderIndex, e.push(i)
            }
            console.error(JSON.stringify(e))
        }
        resetMisByNode(e) {
            e.clickTimes = 0, e.isMisShowBanner = !1, e.isCallBack = !1
        }
        canMis() {
            return !this.cityHide && (1 == this.mistakeData.misSwitch && Math.random() < this.mistakeData.misRate)
        }
        getStartMis() {
            return this.canMis() && 1 == this.mistakeData.startMis
        }
        getStartAdv() {
            return this.canMis() && 1 == this.mistakeData.startVideo
        }
        getEnterVideo() {
            return this.canMis() && 1 == this.mistakeData.enterVideo
        }
        getReadViewInterstitialAd() {
            return this.canMis() && 1 == this.mistakeData.readViewInterstitialAd
        }
        getBackHomeVideo() {
            return this.canMis() && 1 == this.mistakeData.backHomeVideo
        }
        getShowTaskViewBanner() {
            return this.canMis() && 1 == this.mistakeData.showTaskViewBanner
        }
        getEffectViewVideo() {
            return this.canMis() && 1 == this.mistakeData.effectViewVideo
        }
        getRebornViewMis() {
            return this.canMis() && 1 == this.mistakeData.rebornViewMis
        }
        getGameoverBox() {
            return this.canMis() && 1 == this.mistakeData.gameoverBox
        }
        getWantedView() {
            return 1 == this.mistakeData.wantedView
        }
        getVivoMaxPic() {
            return this.canMis() && 1 == this.mistakeData.vivoMaxPic
        }
        getBannerRef() {
            return this.mistakeData.bannerRef
        }
        getshowInsertAd() {
            return this.canMis() ? this.mistakeData.insertAdTimes : 0
        }
        getinsertAdRate() {
            return this.canMis() ? this.mistakeData.insertAdRate : 0
        }
        getshareTime() {
            return this.mistakeData.shareTime
        }
        showVivoMaxByTime() {
            if (!xs.getIns().isVIVOPlatform()) return !1;
            if (0 == this.mistakeData.vivoShowNativeTime) return !1;
            if (-1 == this.curVivoTime) return void(this.curVivoTime = ee.getIns().getServerTime());
            return ee.getIns().getServerTime() - this.curVivoTime > 1e3 * this.mistakeData.vivoShowNativeTime && (this.curVivoTime = ee.getIns().getServerTime(), !0)
        }
        showOppoNativeByTime() {
            if (!xs.getIns().isOPPOPlatform() && !xs.getIns().isXiaoMiPlatform()) return !1;
            if (!fs.getIns().buildIsCreate(R.ParkYuguangtouProcess)) return !1;
            if (0 == this.mistakeData.oppoNativeTime) return !1;
            if (-1 == this.curVivoTime) return void(this.curVivoTime = ee.getIns().getServerTime());
            return ee.getIns().getServerTime() - this.curVivoTime > 1e3 * this.mistakeData.oppoNativeTime && (this.curVivoTime = ee.getIns().getServerTime(), !0)
        }
        resetVideoTime() {
            this.curWxTime = ee.getIns().getServerTime()
        }
        showWxMaxByTime() {
            if (!xs.getIns().isWXPlatform()) return !1;
            if (0 == this.mistakeData.wxShowNativeeTime) return !1;
            if (-1 == this.curWxTime) return void(this.curWxTime = ee.getIns().getServerTime());
            return ee.getIns().getServerTime() - this.curWxTime > 1e3 * this.mistakeData.wxShowNativeeTime && (this.curWxTime = ee.getIns().getServerTime(), !0)
        }
        showXMNative() {
            return 1 == this.mistakeData.xmNativeShow
        }
    }
    class He {
        constructor() {
            this.misSwitch = 1, this.startMis = 1, this.showTools = 1, this.startVideo = 0, this.enterVideo = 0, this.readViewInterstitialAd = 0, this.backHomeVideo = 0, this.showTaskViewBanner = 0, this.effectViewVideo = 0, this.rebornViewMis = 0, this.gameoverBox = 0, this.misRate = 1, this.Store1BuffCount = 0, this.Store2BuffCount = 0, this.Store3BuffCount = 0, this.wantedView = 0, this.vivoMaxPic = 0, this.bannerRef = 10, this.insertAdTimes = 0, this.insertAdRate = 0, this.shareTime = 90, this.vivoShowNativeTime = 0, this.wxShowNativeeTime = 0, this.oppoNativeTime = 0, this.xmNativeShow = 1
        }
    }
    class Xe {
        constructor() {
            this.city = [], this.isOpen = 0
        }
        check(e) {
            if (1 == this.isOpen) return !0;
            if (0 == this.isOpen) return !1;
            if ("国内未能识别的地区" == e.cname) return !0;
            if ("CHina" == e.cname) return !0;
            for (let t = 0; t < this.city.length; t++)
                if (e.cname.indexOf(this.city[t]) >= 0) return !0;
            return !1
        }
    }
    class ze {
        static get Ins() {
            return this._ins || (this._ins = new ze, this._ins.init()), this._ins
        }
        init() {}
        loadSub(e, t) {
            console.log("在这尝试分包，包名是------>",e)
            let s = xs.getIns().getPlat();
            s ? s.loadSubpackage({
                name: e,
                success: s => {
                    console.info("加载分包成功", e), Cs.getIns().handlerFun(t)
                },
                fail: t => {
                    console.info("加载分包失败", e, t)
                }
            }) : (console.log("不需要加载分包!"), Cs.getIns().handlerFun(t))
        }
    }
    class qe {
        constructor() {
            this.gameServerName = "游戏服", this.gameServerId = "1", this.userId = null, this.token = null, this.isLogin = !1, this.isInit = !1, this.gameId = 2211, this.appId = ""
        }
        static getIns() {
            return this.instance || (this.instance = new qe), this.instance
        }
        preInit() {
            if (xs.getIns().isWXPlatform()) {
                window.wx.uma.init({
                    appKey: "",
                    useOpenid: !0,
                    autoGetOpenid: !0,
                    debug: !1,
                    uploadUserInfo: !0
                })
            }
        }
        init(e) {
            this.isInit = !0, this.appId = ct.getIns().getAppid(), Cs.getIns().handlerFun(e)
        }
        login(e) {
            if (!this.isInit || this.isLogin) return void Cs.getIns().handlerFun(e);
            let t = (t, s) => {
                this.isLogin = !0, this.userId = s, l.getIns().setMgr(t), Cs.getIns().handlerFun(e)
            };
            xs.getIns().isWINPlatform(), t(null, "")
        }
        getUId() {
            return this.isLogin ? this.userId : ""
        }
        getAppId() {
            if (this.isInit) return this.appId;
            console.error("xiyou 没有初始化!")
        }
    }
    class je extends L {
        constructor() {
            super(), this.loadMinTime = 1
        }
        pageInit() {
            super.pageInit()
        }
        pageOpen(e) {
            super.pageOpen(e), this.startLoading()
        }
        startLoading() {
            this.resetLoading(), j.init();
            let e = new Promise(e => {
                    qe.getIns().init(() => {
                        qe.getIns().login(() => {
                            Ke.getIns().init(() => {
                                e(null)
                            })
                        })
                    })
                }),
                t = new Promise(e => {
                    Laya.Tween.to(this.viewProp.m_pro, {
                        value: .99
                    }, 1e3 * this.loadMinTime, Laya.Ease.linearOut, Laya.Handler.create(this, () => {
                        e(null)
                    }))
                }),
                s = new Promise(e => {
                    ze.Ins.loadSub("sub", () => {
                        e(null)
                    })
                }),
                i = new Promise(e => {
                    e(null)
                }),
                a = new Promise(e => {
                    z.ins.init(), z.ins.getAdData(z.ins.adv_key, () => {
                        console.log("导出毁掉"), e(null)
                    })
                });
            Promise.all([e, t, s, i, a]).then(() => {
                this.viewProp.m_pro.value = 0, $.Ins.load3DScenes(() => {
                    this.loadEnd()
                }, e => {
                    this.viewProp.m_pro.value = e
                })
            })
        }
        loadEnd() {
            ut.getIns().toGame(ks.getIns().getLevelId(), 1, () => {
                ut.getIns().gameStart(null, () => {
                    console.log("=====closeui GameLoading")
                    Y.UIMgr.ins.closeUI(Y.UIType.GameLoading)
                })
            })
        }
        resetLoading() {
            this.viewProp.m_pro.value = 0
        }
    }
    class Qe extends Laya.Script {
        constructor() {
            super(), this.allPages = new A, this.activePages = [], this.curPageDepth = 0, this.uiPagePath = "prefab/page/{0}.json", this.maxPageCount = 100, this.spaceDepth = 20, this.openPageOrderArray = [], this.inOpenPageArray = [], this.box = null, this.openWaitFun = new Object
        }
        preLoad(e) {
            let t = [];
            if (t.push(Y.UIType.BottomView), t.push(Y.UIType.TopView), 0 == t.length) return void Cs.getIns().handlerFun(e);
            let s = 0;
            for (let i = 0; i < t.length; i++) this.openUI(t[i], null, () => {
                s++, t.length == s && Cs.getIns().handlerFun(e)
            }, !0)
        }
        createMask() {
            this.box || (this.box = new Laya.Box, this.owner.addChild(this.box), this.box.width = 1e4, this.box.height = 1e4, this.box.centerX = 0, this.box.centerY = 0, this.box.zOrder = 1e4, this.box.mouseThrough = !1, this.box.mouseEnabled = !0)
        }
        cretaActivePageData(e, t) {
            let s = {
                pageBase: null,
                vals: null
            };
            return s.pageBase = e, s.vals = t, s
        }
        init() {
            this.createMask(), this.tipView = this.owner.getChildByName("tipView"), this.tipView.zOrder = 1e5, this.tipsTween = new _;
            let e = [];
            e.push({
                time: 500,
                prop: {
                    centerY: -100
                },
                ease: Laya.Ease.linearOut
            }), e.push({
                time: 500,
                prop: {
                    centerY: -300
                },
                ease: Laya.Ease.linearOut
            }), this.tipsTween.setTweenVals(e), this.tipsTween.setTarget(this.tipView), this.hideTips(), Cs.getIns().log("mainUI init")
        }
        showTips(e) {
            Laya.timer.clear(this, this.hideTips), this.tipView.visible = !0, this.tipView.getChildByName("tip").text = e, this.tipsTween.end(), this.tipsTween.play(), Laya.timer.once(1500, this, this.hideTips)
        }
        hideTips() {
            this.tipView.visible = !1
        }
        setBoxMask() {
            this.showMask(this.inOpenPageArray.length > 0)
        }
        showMask(e) {
            this.box && (this.box.visible = e)
        }
        addInOpen(e, t = null) {
            this.inOpenPageArray.indexOf(e) < 0 && (this.inOpenPageArray.push(e), this.setBoxMask()), t && (this.openWaitFun[e] || (this.openWaitFun[e] = []), this.openWaitFun[e].push(t))
        }
        removeInOpen(e) {
            let t = this.inOpenPageArray.indexOf(e);
            if (t >= 0 && (this.inOpenPageArray.splice(t, 1), this.setBoxMask()), this.openWaitFun[e]) {
                let t = this.openWaitFun[e];
                for (let e = 0; e < t.length; e++) t[e] && t[e]();
                this.openWaitFun[e] = null
            }
        }
        hasInOpen(e) {
            return this.inOpenPageArray.indexOf(e) >= 0
        }
        openUI(e, t = null, s = null, i = !1) {
            if (!e) return void Cs.getIns().error("界面name不为空");
            if (i && this.getPageByName(e)) return Cs.getIns().handlerFun(s), void console.log("界面已经存在 不需要预加载!");
            if (this.hasInOpen(e)) return i ? this.addInOpen(e, s) : this.addInOpen(e, () => {
                this.openUI(e, t, s, !1)
            }), void console.log("界面正在创建:", e);
            if (!this.canOperate(e, t)) return void Cs.getIns().handlerFun(s);
            this.addInOpen(e, s);
            let a = () => {
                    this.removeInOpen(e)
                },
                n = this.getPageByName(e),
                r = () => {
                    n ? (n.owner.visible = !1, n.pageName = e, this.changePage(!0, n), n.pageInit()) : Cs.getIns().error("请添加界面脚本到", e)
                },
                o = () => {
                    let s = this.getEndActivePage();
                    s && !n.isPartPage && s.hightPageOpen(e), this.changeActivePage(!0, n, t), this.changePageOrder(!0, e), this.offectPageDepth(), n.setPageOpenCallBack(a), n.pageOpen(t), n.isDealAdView && this.showAdView(n, null);
                    n.tweenOpen(() => {
                        n.pageOpenTweenOver()
                    })
                };
            n ? o() : this.createUI(e, t => {
                (n = t.getComponent(L)) || (n = this.autoAddClass(e, t)), r(), n.pagePreload(() => {
                    i ? (console.log("预加载界面成功:", e), a()) : o()
                })
            })
        }
        autoAddClass(e, t) {
            if (e == Y.UIType.GameLoading) return t.addComponent(je)
        }
        tweenScale(e, t, s, i) {
            let a = N.getIns().getTween();
            a.setLoop(!1), s ? a.setTweenVals(t.tweenOpenVals) : a.setTweenVals(t.tweenCloseVals), a.setTarget(e), a.setEndCallBack(() => {
                Cs.getIns().handlerFun(i), N.getIns().recycleTween(a)
            }), a.play()
        }
        reShowAd() {
            let e = this.getEndActivePage();
            e && this.showAdView(e, null)
        }
        showAdView(e, t) {
            if (e.isPartPage) return void Cs.getIns().handlerFun(t);
            let s = 0,
                i = 0,
                a = () => {
                    ++i == s && Cs.getIns().handlerFun(t)
                };
            (e.isShowBottom || 2 == e.adObj.num) && (s++, this.openUI(Y.UIType.BottomView, e.adObj, () => {
                a()
            })), e.isShowTop && (s++, this.openUI(Y.UIType.TopView, null, () => {
                a()
            })), e.showAdCallBack(), 0 == s && Cs.getIns().handlerFun(t)
        }
        changeActivePage(e, t, s) {
            if (!t) return void Cs.getIns().error("添加的激活页面不为空");
            let i = this.getActivePageIndexByName(t.pageName);
            if (e) i >= 0 && this.activePages.splice(i, 1), this.activePages.push(this.cretaActivePageData(t, s));
            else {
                if (i < 0) return;
                this.activePages.splice(i, 1)
            }
        }
        getActivePageIndexByName(e) {
            for (var t = 0; t < this.activePages.length; t++)
                if (this.activePages[t].pageBase.pageName == e) return t;
            return -1
        }
        getActivePageByName(e) {
            for (var t = 0; t < this.activePages.length; t++)
                if (this.activePages[t].pageBase.pageName == e) return this.activePages[t].pageBase;
            return null
        }
        changePage(e, t) {
            if (!t) return void Cs.getIns().error("添加的页面不存在");
            let s = this.getPageByName(t.pageName);
            e ? s || this.allPages.addKey(t.pageName, t) : s ? this.allPages.removeKey(t.pageName) : Cs.getIns().error("界面不存在", t)
        }
        offectPageDepth() {
            let e = null,
                t = null;
            for (let s = 0; s < this.activePages.length; s++)(e = this.activePages[s].pageBase).autoDepth && (e.owner.zOrder = 0 + s * this.spaceDepth, this.curPageDepth = e.owner.zOrder), e.pageName == Y.UIType.LodingView && (t = e);
            t && (t.owner.zOrder = this.curPageDepth + this.spaceDepth);
            for (let e = 0; e < this.activePages.length; e++) this.activePages[e].pageBase.depChangeCallBack()
        }
        offectPageCount() {
            let e = this.allPages.getCount();
            if (e > this.maxPageCount) {
                let s = e - this.maxPageCount,
                    i = null,
                    a = this.allPages.getKeys();
                for (var t = 0; t < a.length && (i = this.allPages.getValue(a[t]), this.isActivePage(i.pageName) || !i.isAutoDestroy || this.hasInOpen(i.pageName) || (this.changePage(!1, i), this.changeActivePage(!1, i, null), i.pageDestroy(), i.owner.destroy(), !(--s <= 0))); t++);
            }
        }
        isActivePage(e) {
            for (var t = 0; t < this.activePages.length; t++)
                if (e == this.activePages[t].pageBase.pageName) return !0;
            return !1
        }
        getPageByName(e) {
            return this.allPages.getValue(e)
        }
        getEndActivePage() {
            if (0 == this.activePages.length) return null;
            for (var e = this.activePages.length - 1; e >= 0; e--)
                if (!this.activePages[e].pageBase.isPartPage) return this.activePages[e].pageBase;
            return null
        }
        createUI(e, t) {
            let s = this.uiPagePath.format(e),
                i = s => {
                    let i = new Laya.Prefab;
                    i.json = s;
                    let a = i.create();
                    if (!a) return void console.error("createUI prefab create failed:", e);
                    this.owner.addChild(a), a.name = e, this.offectUI(a), Cs.getIns().handlerFun(t, a)
                },
                a = this.owner.getChildByName(e);
            a ? (this.offectUI(a), Cs.getIns().handlerFun(t, a)) : Laya.loader.create(s, Laya.Handler.create(this, i))
        }
        offectUI(e) {
            e.width = this.owner.width, e.height = this.owner.height, e.centerX = 0, e.centerY = 0
        }
        closeUI(e) {
            //ddsh
            if (this.hasInOpen(e)) return void console.error("正在关闭");
            if (!this.canOperate(e, null)) return;
            let t = this.getPageByName(e);
            if (t) {
                if (!t.isOpen) return;
                this.changePageOrder(!1, e), this.changeActivePage(!1, t, null);
                let s = null,
                    i = () => {
                        t.isPartPage || (s = this.getEndActivePage()), s && (s.hightPageClose(e), s.isDealAdView && this.showAdView(s, null)), t.pageClose(), this.offectPageCount(), this.removeInOpen(e)
                    };
                this.addInOpen(e), t.tweenClose(i)
            } else Cs.getIns().error("关闭的界面不存在:", e)
        }
        printActivePage() {
            for (var e = 0; e < this.activePages.length; e++) console.log(e + "", this.activePages[e].pageBase)
        }
        changePageOrder(e, t) {
            if (e) {
                let e = this.openPageOrderArray.length - 1;
                if (e >= 0 && t == this.openPageOrderArray[e]) return;
                this.openPageOrderArray.push(t)
            } else {
                let e = this.openPageOrderArray.length - 1;
                if (e < 0) return;
                this.openPageOrderArray.splice(e, 1)
            }
        }
        canOperate(e, t) {
            return !0
        }
        hintAllUI(e) {
            for (var t = 0; t < this.activePages.length; t++) this.activePages[t].pageBase.pageName != e && (this.activePages[t].pageBase.owner.visible = !1)
        }
        closeAllPage(e) {
            let t = null,
                s = [];
            s = s.concat(this.activePages);
            for (let i = 0; i < s.length; i++) t = s[i].pageBase, e && e.indexOf(t.pageName) >= 0 || this.closeUI(t.pageName)
        }
        showAllUI() {
            for (var e = 0; e < this.activePages.length; e++) this.activePages[e].pageBase.owner.visible = !0
        }
        hintUIByName(e) {
            let t = this.getActivePageByName(e);
            t && (t.owner.visible = !1)
        }
        reShowHintUIByName(e) {
            let t = this.getActivePageByName(e);
            t && (t.owner.visible = !0)
        }
        pageIsOpen(e) {
            let t = this.getPageByName(e);
            return !(!t || !t.isOpen)
        }
    }
    class Je {}
    Je.ReadyView = "readyView", Je.nodeSgin = "m_", Je.TopView = "topView", Je.BottomView = "bottomView", Je.GameOverView = "gameOverView", Je.GameView = "gameView", Je.GameOverViewEnd = "GameOverEndPage", Je.LodingView = "LodingView", Je.SkinView = "SkinView", Je.GetGoldView = "getGoldView", Je.TryUseSkinView = "TryUseSkin", Je.UpdateView = "UpdateView", Je.GetDiamView = "GetDiamView", Je.SginView = "SginView", Je.TeachView = "TeachView", Je.ShareView = "shareView", Je.GetPowerView = "GetPowerView", Je.GetRewardView = "GetRewardView", Je.GoldFingerView = "GoldFingerView", Je.SelectLevelModel = "SelectLevelModel", Je.GameOverFirst = "GameOverFirst", Je.ToolsView = "toolsView", Je.RebornView = "rebornView", Je.GameLoading = "gameLoading", Je.ShowEvolutionView = "showEvolutionView", Je.FreeCreate = "freeCreate", Je.StartMistake = "startMistake", Je.TaskView = "taskView", Je.PictureView = "pictureView", Je.MisRebronView = "misRebronView", Je.HotAdView = "hotAdView", Je.PageMarkView = "pageMarkView", Je.PageSetting = "pageSetting", Je.LoadingView = "loadingView", Je.NewStoreView = "newStoreView", Je.DelineView = "delineView", Je.BuffView = "buffView", Je.YinsiView = "yinsiView", Je.PageUpLv = "pageUpLv", Je.NativePicture = "nativePicture", Je.FuWuView = "fuwuView", Je.YinSiFuWuView = "yinsifuwuView", Je.ExportAdList = "exportAdList",
        function (e) {
            class t extends Qe {
                static get ins() {
                    return this._ins
                }
                static set ins(e) {
                    this._ins = e
                }
                init() {
                    super.init(), t.ins = this
                }
            }
            e.UIMgr = t;
            e.UIType = class extends Je {}
        }(Y || (Y = {}));
    class Ze {
        constructor() {
            this.maxSaveAdCount = 2, this.isInLoadBanner = !1, this.isShowBanner = !1, this.isInLoadVideo = !1, this.canUseBanners = [], this.canUseVideos = [], this.canUseNativeAd = [], this.congifName = "winc", this.curBannerAd = null, this.adConfig = new $e, this.gamePortalAd = null
        }
        init() {
            this.initShare(), e.getIns().addEventListerner(i.ENTERGAME, this.onBack, this)
        }
        getAppid() {
            return this.appId
        }
        getConfigName() {
            return this.congifName
        }
        onBack() {}
        getCanUseBanner() {
            return 0 == this.canUseBanners.length ? null : this.canUseBanners.shift()
        }
        addToCanUseBanner(e) {
            this.canUseBanners.indexOf(e) < 0 && this.canUseBanners.push(e)
        }
        getCanUseVideo() {
            return 0 == this.canUseVideos.length ? null : this.canUseVideos.shift()
        }
        addToCanUseVideo(e) {
            this.canUseVideos.indexOf(e) < 0 && this.canUseVideos.push(e)
        }
        getCanUseNativeAd() {
            return 0 == this.canUseNativeAd.length ? null : this.canUseNativeAd.shift()
        }
        addToCanUseNativeAd(e) {
            this.canUseNativeAd.indexOf(e) < 0 && this.canUseNativeAd.push(e)
        }
        hasVideo() {
            return this.adConfig.videoId.length > 0
        }
    }
    class $e {
        constructor() {
            this.bannerIds = [], this.nativeId = [], this.videoId = [], this.boxId = []
        }
    }
    class et {
        constructor() {
            this.title = "跟我一起来对战吧!", this.imageUrl = ""
        }
    }
    class tt {
        constructor() {
            this.platType = K.None
        }
        static get ins() {
            return this._ins || (this._ins = new tt, this._ins.init()), this._ins
        }
        init() {
            if (window.conchConfig) {
                let e = window.PlatformClass,
                    t = window.conchConfig.getOS();
                "Conch-ios" == t ? (this.platType = K.Ios, this.bridge = e.createClass("JSBridge")) : "Conch-android" == t && (this.platType = K.Android, this.bridge = e.createClass("demo.JSBridge"))
            }
            window.playVideoSucc = (e => {
                this.playVideoSucc && this.playVideoSucc(e)
            }), window.playVideoFail = (() => {
                this.playVideoFail && this.playVideoFail()
            })
        }
        playVideo(e, t, s) {
            this.playVideoSucc = t, this.playVideoFail = s;
            //this.bridge.call("playVideo", e)
        }
        playFullVideo(e) {
            this.bridge.call("playFullVideo", e)
        }
    }! function (e) {
        e[e.None = 0] = "None", e[e.Android = 1] = "Android", e[e.Ios = 2] = "Ios"
    }(K || (K = {}));
   
    class at {
        constructor() {
            this.imgUrlList = []
        }
    }
    
    class ht extends Ze {
        initBase() {
            this.appId = "winTest", this.congifName = "winc"
        }
        createBanner(e, t, s) {
            Cs.getIns().handlerFun(e)
        }
        hideBanner() {}
        showBanner() {}
        desBanner() {}
        desBannerNotSgin() {}
        createVideo(e, t) {
            Cs.getIns().handlerFun(e)
        }
        showVideo(e, t) {}
        desVideo() {}
        desVideoNotSgin() {}
        doCreateNextBanner() {}
        doCreateNextVideo() {}
        createNativeAd(e, t) {}
        showNativeAd(e, t) {}
        reportNativeAdShow(e, t) {}
        reportNativeAdClick(e, t) {}
        doCreateNextNativeAd() {}
        shareAppMessage(e) {}
        initShare() {}
        cretaeBoxAd(e) {}
    }
   
    class ct {
        constructor() {
            this.adBase = null
        }
        static getIns() {
            return this.ins || (this.ins = new ct, this.ins.init()), this.ins
        }
        init() {
            //ddsh
            this.adBase = new ht, this.adBase && (this.adBase.initBase(), this.adBase.init())
            // xs.getIns().isQQPlatform() ? this.adBase = new nt : xs.getIns().isWXPlatform() ? this.adBase = new lt : xs.getIns().isOPPOPlatform() ? this.adBase = new it : xs.getIns().isVIVOPlatform() ? this.adBase = new ot : xs.getIns().isTTPlatform() ? this.adBase = new rt : xs.getIns().is233Platform() ? this.adBase = new st : xs.getIns().isXiaoMiPlatform() ? this.adBase = new dt : this.adBase = new ht, this.adBase && (this.adBase.initBase(), this.adBase.init())
        }
        getAppid() {
            return this.adBase.getAppid()
        }
        insertAdList(e, t) {
            let s = e.split(",");
            for (let e = 0; e < s.length; e++) t.push(s[e])
        }
        getConfigName() {
            return this.adBase.getConfigName()
        }
        hideBanner() {
            this.adBase && this.adBase.hideBanner()
        }
        desBanner() {
            this.adBase && this.adBase.desBanner()
        }
        showBanner() {
            this.adBase && this.adBase.showBanner()
        }
        showVideo(e, t) {
            this.adBase ? this.adBase.showVideo(e, t) : Cs.getIns().handlerFun(t)
        }
        showNativeAd(e, t) {
            this.adBase ? this.adBase.showNativeAd(e, t) : Cs.getIns().handlerFun(t)
        }
        reportNativeAdShow(e, t) {
            this.adBase && this.adBase.reportNativeAdShow(e, t)
        }
        shareAppMessage(e) {
            if (!this.adBase) return xs.getIns().showToast(""), void Cs.getIns().handlerFun(e.fail);
            this.adBase.shareAppMessage(e)
        }
        hasVideo() {
            return this.adBase.hasVideo()
        }
        addDesk() {
            this.adBase && this.adBase.addDesk && this.adBase.addDesk()
        }
        canCreateBanner() {
            return !!this.adBase && (!!this.adBase.canCreateBanner && this.adBase.canCreateBanner())
        }
        showInterstitialAd() {
            this.adBase && this.adBase.showInterstitialAd && this.adBase.showInterstitialAd()
        }
        createCustomAd(e = 2, t = 20, s = 0, i = "", a = null, n = !0, r = null, o = !0) {
            this.adBase && this.adBase.createCustomAd && this.adBase.createCustomAd(e, t, s, i, a, n, r, o)
        }
        createAppBox(e) {
            this.adBase && this.adBase.createAppBox && this.adBase.createAppBox(e)
        }
        destoryBlockAd() {
            this.adBase && this.adBase.destoryBlockAd && this.adBase.destoryBlockAd()
        }
        destoryCustomAd() {
            this.adBase && this.adBase.destoryCustomAd && this.adBase.destoryCustomAd()
        }
        createTwoBlockAd() {
            this.adBase && this.adBase.createTwoBlockAd && this.adBase.createTwoBlockAd()
        }
        cretaeCenterBlockAd(e = 0, t = 4, s = "landscape") {
            this.adBase && this.adBase.cretaeCenterBlockAd && this.adBase.cretaeCenterBlockAd(e, t, s)
        }
        cretaeBoxAd(e) {
            this.adBase && this.adBase.cretaeBoxAd ? this.adBase.cretaeBoxAd(e) : e && e()
        }
        createNativeAd(e, t, s) {
            this.adBase && this.adBase.createNativeAd ? this.adBase.createNativeAd(e, t, s) : t && t()
        }
        reportNativeAdClick(e, t) {
            this.adBase && this.adBase.reportNativeAdClick && this.adBase.reportNativeAdClick(e, t)
        }
        createCustomAdVivo(e, t) {
            this.adBase && this.adBase.createCustomAd ? this.adBase.createCustomAd(e, t) : e && e()
        }
        createBoxPortalAd(e) {
            return !!this.adBase && (!this.adBase.createBoxPortalAd || void this.adBase.createBoxPortalAd(e))
        }
        createInterstitialAd() {
            return !!this.adBase && (!this.adBase.createInterstitialAd || void this.adBase.createInterstitialAd())
        }
        startRecord() {
            this.adBase && this.adBase.startRecord && this.adBase.startRecord()
        }
        stopRecord(e) {
            this.adBase && this.adBase.stopRecord && this.adBase.stopRecord(e)
        }
        shareVideo(e) {
            this.adBase && this.adBase.shareVideo && this.adBase.shareVideo(e)
        }
        createXFQ(e) {
            this.adBase && this.adBase.createXFQ && this.adBase.createXFQ(e)
        }
    }
    class ut {
        constructor() {
            this.gameScene = null, this.levelData = null, this.notLimitConfig = null, this.trainConfig = null, this.levelType = 1, this.isPause = !1, this.lastIsFail = !1, this.isTest = !1, this.isPauseMusic = !1, this.isShowLoadingPage = !1, this.mapInit = !1, this.gameMul = 1, this.gameState = -1, this.enableHDR = !1, this.task01 = 0, this.gameStartTime = 0, this.isFirstReborn = !0, this.teachConfig = {
                config: "TeachLv1",
                startBuffCount: 0
            }, this.trySkinId = null, this.isTryUseSkin = !1, this.curFloorId = 1, this.isFirstEnterLevel = !1, this.gameGold = 0
        }
        static getIns() {
            return this.instance || (this.instance = new ut), this.instance
        }
        getGameScene() {
            return this.gameScene
        }
        initScene(e) {
            Laya.stage.addChildAt(e, 0), this.gameScene = e, this.gameScene.physicsSimulation.continuousCollisionDetection = !1, this.gameScene.physicsSimulation.maxSubSteps = 20, this.gameScene.physicsSimulation.fixedTimeStep = 1 / 60, this.checkHdR(), xs.getIns().getPlat() && (this.isTest = !1), Laya.MouseManager.multiTouchEnabled = !1, this.setSky(e), Cs.getIns().seekNodeByName(e, "Map").addComponent(fs).init()
        }
        canshow3DImage() {
            return !0
        }
        checkHdR() {
            this.enableHDR = Laya.SystemUtils.supportRenderTextureFormat(Laya.RenderTextureFormat.R16G16B16A16)
        }
        isEnableHDR() {
            return this.enableHDR
        }
        getCurLevelId() {
            return this.levelData.id
        }
        getCurLevelData() {
            return this.levelData
        }
        getLevelMul() {
            return this.levelData.itemMul
        }
        toGame(e, t, s = null) {
            this.mapInit ? xs.getIns().showToast("Customer is coming!") : this.isShowLoadingPage || (this.levelType = t, this.gameReady(e, s))
        }
        rePlay() {
            this.toGame(this.levelData.id, this.levelType)
        }
        setFogRang(e, t) {
            this.gameScene.enableFog = !1, this.gameScene.fogStart = e, this.gameScene.fogRange = t
        }
        setSky(e) {}
        setSceneFog(e) {}
        gamePause() {
            this.isPause = !0, e.getIns().dispatchEvent(i.EN_GAMEPAUSE)
        }
        gameResume() {
            this.isPause = !1
        }
        isGameStart() {
            return 2 == this.gameState && !this.isPause
        }
        setGameState(e) {
            this.gameState = e
        }
        isGameReady() {
            return 0 == this.gameState
        }
        isGameOver() {
            return 3 == this.gameState || 4 == this.gameState
        }
        gameReady(e, t) {
            if (1 == this.levelType) {
                this.levelData = m.ins.getDataById(e);
                this.levelData && ks.getIns().setLevelId(e);
                let t = ks.getIns().getShowLevelCount();
                this.gameStartSumbit(t)
            } else if (2 == this.levelType);
            else if (3 == this.levelType);
            else if (4 != this.levelType) return void console.error("关卡类型错误:", this.levelType);
            this.curFloorId = this.levelData.floorId, this.isFirstReborn = !0, this.gameGold = 0, this.gameScene && this.gameScene.destroy(), Laya.Scene3D.load(a.scenePath.format(this.levelData.config), Laya.Handler.create(this, e => {
                this.initScene(e), this.setGameState(0), fs.getIns().toStart(t)
            }))
        }
        getLevelData(e, t) {
            let s = new Object,
                i = Object.keys(e),
                a = null;
            for (let t = 0; t < i.length; t++) s[a = i[t]] = e[a];
            i = Object.keys(t);
            for (let e = 0; e < i.length; e++) s[a = i[e]] = t[a];
            return s
        }
        gameStart(t, s) {
            if (!this.isGameReady()) return xs.getIns().showToast("Wait Loading!"), void Cs.getIns().handlerFun(s);
            let a = [];
            a.push(Y.UIType.LodingView), Y.UIMgr.ins.closeAllPage(a), f.getIns().stopMusic(), this.gameResume(), this.gameStartTime = 0, this.beginGameTimer();
            let n = new Object;
            n.endFun = (() => {
                 fs.getIns().loadLevelEnd(), this.setGameState(2), e.getIns().dispatchEvent(i.GAMESTART), Cs.getIns().handlerFun(t), ut.getIns().isFirstEnterLevel && (ut.getIns().isFirstEnterLevel = !1, Y.UIMgr.ins.openUI(Y.UIType.NewStoreView));
                setTimeout(() => {
                    f.getIns().playMusic(P.SN_Mp3.format("gameBg"))
                }, 4000);
                // setInterval(() => {
                //     f.getIns().playMusic(P.SN_Mp3.format("gameBg"))
                // }, 9000);
            }), Y.UIMgr.ins.openUI(Y.UIType.GameView, n)
        }
        refershGameTime(e) {
            this.isGameStart() && (this.gameStartTime += e)
        }
        clearGameTimer() {
            Laya.timer.clear(this, this.refershGameTime)
        }
        beginGameTimer() {
            this.clearGameTimer(), Laya.timer.loop(1e3, this, this.refershGameTime, [1e3])
        }
        outGame() {
            this.clearGameTimer()
        }
        gameSuccess() {
            this.isGameOver() || (1 == this.levelType ? (this.setGameState(4), this.gameEndSumbit(ks.getIns().getShowLevelCount(), !0), ks.getIns().addContinueLevel(1), ks.getIns().setToNextLevelID(), Laya.timer.once(1600, this, () => {
                Laya.timer.once(1e3, this, this.toSuccFun)
            })) : 2 == this.levelType || 3 == this.levelType || (4 == this.levelType ? (this.setGameState(4), Laya.timer.once(500, this, () => {
                this.toSuccFun()
            })) : console.error("没有成功逻辑:", this.levelType)))
        }
        toSuccFun() {
            this.outGame(), f.getIns().playSound(P.SN_SUCC), this.isPauseMusic = !1;
            let t = ks.getIns().getPlayerGrowUpId();
            le.ins.getDataById(t);
            ks.getIns().playerGrowUp();
            let s = ks.getIns().getPlayerGrowUpId();
            le.ins.getDataById(s);
            Laya.timer.scale = 1, this.lastIsFail = !1, e.getIns().dispatchEvent(i.END_CHECK_OVER, !0);
            let a = new Object;
            a.isWin = !0, a.lvId = this.levelData.id, a.slvId = ks.getIns().getShowLevelCount() - 1, Y.UIMgr.ins.closeUI(Y.UIType.GameView);
            let n = () => {
                d.getIns().showNewFullAd(() => {
                    Y.UIMgr.ins.openUI(Y.UIType.GameOverView, a, null)
                })
            };
            xs.getIns().isTTPlatform() ? ct.getIns().stopRecord(() => {
                n()
            }) : n()
        }
        toReady(e) {
            Y.UIMgr.ins.openUI(Y.UIType.ReadyView, null, e)
        }
        gameFail() {
            this.isGameOver() || (1 == this.levelType ? (this.setGameState(3), this.toFailFun()) : 2 == this.levelType ? (this.setGameState(3), Laya.timer.once(2e3, this, () => {
                this.toFailFun()
            })) : 3 == this.levelType ? (this.setGameState(4), l.getIns().Enter_click(47), this.toFailFun()) : 4 == this.levelType ? (this.setGameState(3), this.toFailFun()) : console.error("没有失败逻辑:", this.levelType))
        }
        toFailFun() {
            this.outGame(), f.getIns().playSound(P.SN_FAIL);
            let t = ks.getIns().getShowLevelCount();
            this.gameEndSumbit(t, !1), Laya.timer.scale = 1, this.lastIsFail = !0, this.isPauseMusic = !0, e.getIns().dispatchEvent(i.END_CHECK_OVER, !1);
            let s = new Object;
            s.isWin = !1, s.lvId = this.levelData.id, s.slvId = t;
            let a = () => {
                d.getIns().showNewFullAd(() => {
                    Y.UIMgr.ins.closeUI(Y.UIType.GameView), Y.UIMgr.ins.openUI(Y.UIType.GameOverView, s, null)
                })
            };
            if (this.isFirstReborn && Ke.getIns().getRebornViewMis()) {
                this.isFirstReborn = !1;
                let e = {};
                e.callBack = (() => {
                    this.gameReborn()
                }), Y.UIMgr.ins.openUI(Y.UIType.MisRebronView, e)
            } else {
                let e = {};
                e.rebornFun = (e => {
                    e ? this.gameReborn() : xs.getIns().isTTPlatform() ? ct.getIns().stopRecord(() => {
                        a()
                    }) : a()
                }), Y.UIMgr.ins.openUI(Y.UIType.RebornView, e)
            }
        }
        gameReborn() {
            Y.UIMgr.ins.openUI(Y.UIType.GameView, null, () => {
                this.gameResume(), this.setGameState(2), fs.getIns().reborn(), f.getIns().resumeMusic()
            })
        }
        mobileShake() {
            if (ks.getIns().isMuteEnable()) {
                this.shakeIndex++;
                for (var e = 0; e < 3; e++) Laya.timer.once(20 * e, this, () => {
                    xs.getIns().vibratePhone(!1)
                })
            }
        }
        mobileShakeSgin() {
            xs.getIns().vibratePhone(!1)
        }
        mobileShakeLong() {
            xs.getIns().vibratePhone(!0)
        }
        getRandomSkinIds() {
            let e = this.getNotSkinId();
            if (0 == e.length) return null;
            let t = [],
                s = null;
            for (var i = 0; i < e.length; i++) s = y.ins.getDataById(e[i]), t.push({
                id: e[i],
                rate: s.recomedRate
            });
            t.sort((e, t) => e.rate < t.rate ? -1 : e.rate > t.rate ? 1 : 0);
            let a = 0;
            for (i = 0; i < t.length; i++) a += t[i].rate;
            let n = Math.floor(Math.random() * a),
                r = t.length;
            for (i = 0; i < r; i++)
                if ((n -= t[i].rate) <= 0) return t[i].id;
            return e[0]
        }
        getNotSkinId() {
            let e = y.ins.getAllDatas(),
                t = [],
                s = 0;
            for (var i = 0; i < e.length; i++) {
                let a = e[i];
                s = a.id, 1 == a.isOpen && (ks.getIns().hasSkinById(s) || t.push(s))
            }
            return t
        }
        gameStartSumbit(e) {
            ks.getIns().setLevelPlayTime(3, e), u.getIns().gameStartSumbit(e)
        }
        gameRebornSumbit(e, t) {}
        trySkinSumbit(e, t) {}
        gameEndSumbit(e, t) {
            t ? ks.getIns().setLevelPlayTime(1, e) : ks.getIns().setLevelPlayTime(2, e), u.getIns().gameEndSumbit({
                lv: e,
                isWin: t
            })
        }
    }
    class gt extends Laya.Script {
        constructor() {
            super(), this.camrera = null, this.rotTemp = new Laya.Vector3, this.camreraCanShake = !1, this.shakeVal = .05, this.isUpdatePos = !1, this.screenPosTemp = new Laya.Vector3, this.upVec = new Laya.Vector3(0, 1, 0), this.cur_ca_move_time = 0, this.ca_move_time = 0, this.moveStartPos = null, this.moveEndPos = null, this.rPoint = new Laya.Vector3, this.moveTarget = null, this.rayOb = new Laya.Ray(new Laya.Vector3, new Laya.Vector3), this.obRayResult = new Laya.HitResult, this.tempV1 = new Laya.Vector3, this.lastToPos = new Laya.Vector3, this.moveSpeed = .5, this.tempV2 = new Laya.Vector3, this.lookAtCallBack = null, this.clientScaleX = 1, this.clientScaleY = 1, this.upTemp = new Laya.Vector3, this.isForceMove = !1, this.forceMoveTime = 0, this.forceMoveTimer = 0, this.forceMoveWaiterTime = 0, this.worldPosTemp = new Laya.Vector4, this.shakeTime = 0, this.outpos = new Laya.Vector4
        }
        init() {
            this.clientScaleX = 1 / Laya.stage.clientScaleX, this.clientScaleY = 1 / Laya.stage.clientScaleY, this._node = this.owner, this.camrera = Cs.getIns().seekNodeByName(this.owner, "Camera"), this.camrera.viewport.project = function (e, t, s) {
                Laya.Vector3.transformV3ToV4(e, t, s);
                var i = s.x,
                    a = s.y,
                    n = s.z,
                    r = s.w;
                1 !== r && 0 != r && (i /= r, a /= r, n /= r), s.x = .5 * (i + 1) * this.width + this.x, s.y = .5 * (1 - a) * this.height + this.y, s.z = n * (this.maxDepth - this.minDepth) + this.minDepth
            };
            Cs.getIns().seekNodeByName(fs.getIns().owner, "modelCamera");
            this.camrera.farPlane = 1e3, this.camrera.nearPlane = .01, this.camrera.removeLayer(h.ShowModel), this.camrera.removeLayer(h.hint), this.camrera.removeLayer(h.Evolution), this.closeCameraHDR(this.camrera, !1), this.camrera.clearFlag = Laya.CameraClearFlags.Sky, this.rayOb.origin = this._node.transform.position.clone(), this.rayOb.direction = new Laya.Vector3(0, 0, 0)
        }
        getBackMirror() {
            if (this.backCamera) return this.backCamera;
            let e = new Laya.Camera(1, .01, 300);
            return this.closeCameraHDR(e, !1), e.clearFlag = Laya.CameraClearFlags.SolidColor, e.fieldOfView = 60, e.removeLayer(h.ShowModel), e.removeLayer(h.hint), e.removeLayer(h.player), e.renderTarget = new Laya.RenderTexture(512, 512, Laya.RenderTextureFormat.R8G8B8A8, Laya.RenderTextureDepthFormat.DEPTHSTENCIL_24_8), this.owner.parent.addChild(e), this.backCamera = e, this.backCamera
        }
        recycleBackMirror(e) {
            this.owner.parent.addChild(e), this.backCamera = e, this.setBackMirror(!1)
        }
        setBackMirror(e) {
            this.backCamera && (this.backCamera.active = e)
        }
        setCameraField(e) {
            this.camrera.fieldOfView = e
        }
        easeCameraField(e) {
            Laya.Tween.to(this.camrera, {
                fieldOfView: e
            }, 1e3, Laya.Ease.linearOut)
        }
        checkOb() {
            return this.rayOb.origin = this._node.transform.position, Laya.Vector3.subtract(fs.getIns().playerMgr._node.transform.position, this._node.transform.position, this.tempV1), this.tempV1.cloneTo(this.rayOb.direction), ut.getIns().getGameScene().physicsSimulation.raycastFromTo(this._node.transform.position, fs.getIns().playerMgr._node.transform.position.clone(), this.obRayResult, r.ray, r.rayTarget), this.obRayResult.succeeded ? this.obRayResult.collider : null
        }
        closeCameraHDR(e, t) {
            e && (e.enableHDR = t)
        }
        cameraToResetPos(e, t, s, i = null, a = Laya.Ease.expoOut, n = fs.getIns().playerMgr.owner) {
            this.startPos = this._node.transform.position.clone(), this.startRot = this._node.transform.rotationEuler.clone(), this.cur_ca_move_time = 0, this.ca_move_time = s, this.moveTarget = n;
            let r = e,
                o = t;
            this.moveStartPos = this.startPos.clone(), this.moveEndPos = r.clone(), Laya.Vector3.add(this.startPos, r, this.rPoint), Laya.Vector3.scale(this.rPoint, .5, this.rPoint), Laya.Tween.to(this.startRot, {
                x: o.x,
                y: o.y,
                z: o.z
            }, s, a, null, 0, !1, !1), Laya.Tween.to(this.startPos, {
                x: r.x,
                y: r.y,
                z: r.z
            }, s, a, Laya.Handler.create(this, () => {
                Cs.getIns().handlerFun(i), this.isUpdatePos = !1
            }), 0, !1, !1), this.isUpdatePos = !0
        }
        onUpdate() {
            if (this.isUpdatePos) {
                let e = this._node.transform.position;
                this.cycleRot(this.moveStartPos, this.moveEndPos, e, this.rPoint), this._node.transform.position = e;
                let t = this._node.transform.localRotationEuler;
                this._node.transform.lookAt(this.moveTarget.transform.position, this.upVec, !1), this.rotTemp.y = this._node.transform.localRotationEulerY + 180, t.setValue(this.rotTemp.x, this.rotTemp.y, this.rotTemp.z), this._node.transform.localRotationEuler = t
            }
            if (this.camreraCanShake) {
                let e = this.camrera.transform.localPosition;
                e.setValue(this.shakeVal * Math.random(), this.shakeVal * Math.random(), 0), this.camrera.transform.localPosition = e, this.shakeTime -= Laya.timer.delta, this.shakeTime <= 0 && (this.shakeTime = 0, this.cameraShake(!1))
            }
            if (this.isForceMove) {
                this.forceMoveTimer += Laya.timer.delta;
                let e = this.forceMoveTimer / this.forceMoveTime;
                e = e > 1 ? 1 : e;
                let t = this._node.transform.position;
                Laya.Vector3.lerp(this.forceMoveStartPos, this.forceMovePos, e, t), this._node.transform.position = t, e >= 1 && (this.forceMoveWaiterTime -= Laya.timer.delta, this.forceMoveWaiterTime <= 0 && (this.isForceMove = !1, this.forceMoveCallBack && this.forceMoveCallBack(), this.forceMoveCallBack = null))
            }
        }
        cycleRot(e, t, s, i) {
            this.cur_ca_move_time += Laya.timer.delta, this.cur_ca_move_time = this.cur_ca_move_time < 0 ? 0 : this.cur_ca_move_time;
            let a = this.cur_ca_move_time / this.ca_move_time,
                n = -Math.PI * a;
            s.y = t.y;
            let r = s,
                o = Math.sin(n),
                h = Math.cos(n);
            return r.x = (e.x - i.x) * h - (e.z - i.z) * o + i.x, r.z = (e.x - i.x) * o + (e.z - i.z) * h + i.z, r
        }
        setCameraAngle(e) {
            let t = this._node.transform.localRotationEuler;
            e.cloneTo(t), this._node.transform.localRotationEuler = t
        }
        setLookAtCallBack(e) {
            this.lookAtCallBack = e
        }
        lookAtTarget(e) {
            e.transform.getUp(this.upTemp), this.rotTemp.y = this._node.transform.localRotationEulerY + 180, Laya.Vector3.subtract(e.transform.position, this._node.transform.position, this.tempV1), Laya.Vector3.subtract(this._node.transform.position, this.tempV1, this.tempV1), this._node.transform.lookAt(this.tempV1, this.upTemp, !1)
        }
        setCameraPos(e, t = .5) {
            if (this.isForceMove) return;
            let s = this._node.transform.position;
            Laya.Vector3.lerp(s, e, t, s), this._node.transform.position = s
        }
        forceCameraTweenMove(e, t, s = 0, i, a = !0) {
            this.isForceMove || (fs.getIns().playerMgr && fs.getIns().playerMgr.rockerUp(), this.forceMoveStartPos = this._node.transform.position.clone(), this.isForceMove = !0, this.forceMovePos = e.clone(), this.forceMoveWaiterTime = s, a && (this.forceMovePos.y = this.forceMoveStartPos.y, this.forceMovePos.z -= 30, this.forceMovePos.x -= 6), this.forceMoveTimer = 0, this.forceMoveTime = t, this.forceMoveCallBack = i)
        }
        cameraInMove() {
            return this.isForceMove
        }
        backPos(e, t) {
            this.forceCameraTweenMove(fs.getIns().playerMgr.getCameraPos().clone(), t, 0, e, !1)
        }
        setCameraMove(e) {
            e.cloneTo(this.lastToPos), Laya.Vector3.subtract(this.lastToPos, this._node.transform.position, this.tempV2), Laya.Vector3.scalarLength(this.tempV2) > this.moveSpeed && (Laya.Vector3.normalize(this.tempV2, this.tempV2), Laya.Vector3.scale(this.tempV2, this.moveSpeed, this.tempV2)), this._node.transform.translate(this.tempV2, !1)
        }
        setCameraRot(e) {
            let t = this._node.transform.rotation;
            e.cloneTo(t), this._node.transform.rotation = t
        }
        setColor(e) {
            this.camrera.clearColor = e.clone()
        }
        worldPosToScreenPos(e) {
            return this.camrera.viewport.project(e, this.camrera.projectionViewMatrix, this.worldPosTemp), this.screenPosTemp.x = this.worldPosTemp.x * this.clientScaleX, this.screenPosTemp.y = this.worldPosTemp.y * this.clientScaleY, this.screenPosTemp.z = this.worldPosTemp.z, this.screenPosTemp
        }
        cameraShake(e, t = 500, s = this.shakeVal) {
            if (this.camreraCanShake = e, this.shakeVal = s, this.shakeTime = t, !e) {
                let e = this.camrera.transform.localPosition;
                e.setValue(0, 0, 0), this.camrera.transform.localPosition = e
            }
        }
        isVisible(e) {
            let t = this.camrera;
            return t.viewport.project(e.transform.position, t.projectionViewMatrix, this.outpos), this.outpos.z < 1
        }
    }
    class pt {
        constructor() {
            this.pool = new A
        }
        recycle(e, t) {
            if (!t) return;
            if (!fs.getIns() && fs.getIns().recycleNode) return void t.destroy();
            t.parent != fs.getIns().recycleNode && fs.getIns().recycleNode.addChild(t), t.active = !1, this.pool.hasKey(e) || this.pool.addKey(e, []), this.pool.getValue(e).push(t)
        }
        getGo(e) {
            if (!this.pool.hasKey(e)) return null;
            let t = this.pool.getValue(e);
            if (0 == t.length) return null;
            let s = t[0];
            return t.splice(0, 1), s.active = !0, s
        }
        clearGo() {
            let e = this.pool.getValues();
            for (let t = 0; t < e.length; t++)
                for (let s = 0; s < e[t].length; s++) {
                    let i = e[t][s];
                    i && i.destroy()
                }
            this.pool.clear()
        }
    }
    class mt extends Laya.Script {
        constructor() {
            super(...arguments), this.floorId = -1, this.sceneBorder = new Laya.Vector4
        }
        init() {}
    }
    class It extends Laya.Script {
        constructor() {
            super(...arguments), this.offectLen = 50, this.initRang = 1, this.maxRang = this.initRang, this.initBottom = 200, this.initLeft = 200, this.mouseDownPos = null, this.midPoint = null, this.bgRangX = 0, this.bgRangY = 0, this.lastRot = 0, this.rockerUp = null, this.rockerMove = null, this.rockerDown = null, this.vec1Temp = new Laya.Vector3, this.vec2Temp = new Laya.Vector3, this.rot = null
        }
        init() {
            this.bgRangX = this.rockerBG.width / 2, this.bgRangY = this.rockerBG.height / 2, this.initRang = this.bgRangX, this.maxRang = this.initRang * this.initRang, this.midVec = new Laya.Vector3(this.bgRangX, 0, this.bgRangY), this.bindListener()
        }
        bindListener() {
            this.clickBg.on(Laya.Event.MOUSE_MOVE, this, this.moveRocker), Laya.stage.on(Laya.Event.MOUSE_UP, this, this.upRocker), this.clickBg.on(Laya.Event.MOUSE_DOWN, this, this.downRocker)
        }
        removeListener() {
            this.clickBg.off(Laya.Event.MOUSE_MOVE, this, this.moveRocker), this.clickBg.off(Laya.Event.MOUSE_UP, this, this.upRocker), this.clickBg.off(Laya.Event.MOUSE_DOWN, this, this.downRocker)
        }
        moveRocker(e) {
            if (!this.mouseDownPos) return;
            let t = new Laya.Vector3(e.stageX, 0, e.stageY),
                s = t.x - this.mouseDownPos.x,
                i = t.z - this.mouseDownPos.z;
            s * s + i * i < this.maxRang || (this.vec1Temp.x = s, this.vec1Temp.z = i, Laya.Vector3.normalize(this.vec1Temp, this.vec1Temp), Laya.Vector3.scale(this.vec1Temp, this.initRang, this.vec1Temp), s = this.vec1Temp.x, i = this.vec1Temp.z);
            let a = 0;
            0 != s && 0 != i ? (this.vec1Temp.x = 1, this.vec1Temp.z = 0, this.vec2Temp.x = s, this.vec2Temp.z = i, a = 180 * Math.acos(Laya.Vector3.dot(this.vec1Temp, this.vec2Temp) / (Laya.Vector3.scalarLength(this.vec1Temp) * Laya.Vector3.scalarLength(this.vec2Temp))) / Math.PI, i <= 0 && (a = -a), this.lastRot = a) : this.rot = this.lastRot, this.setRocketForward(a), this.rockerPoint.centerX = s, this.rockerPoint.centerY = i, Cs.getIns().handlerFun(this.rockerMove, s / (this.initRang - this.offectLen), i / (this.initRang - this.offectLen), a)
        }
        setRocketForward(e) {
            this.rockerForward && (this.rockerForward.rotation = e)
        }
        upRocker(e) {
            this.rockerBG.pos(this.initLeft, this.initBottom), this.rockerPoint.centerY = 0, this.rockerPoint.centerX = 0, this.mouseDownPos = null, this.rockerBG.alpha = 0, this.setRocketForward(this.lastRot), Cs.getIns().handlerFun(this.rockerUp)
        }
        downRocker(e) {
            this.rockerPoint.centerY = 0, this.rockerPoint.centerX = 0, this.rockerBG.alpha = .5;
            let t = new Laya.Vector3(e.stageX, 0, e.stageY);
            this.mouseDownPos = t, this.rockerBG.pos(e.stageX, e.stageY), Cs.getIns().handlerFun(this.rockerDown)
        }
        onDestroy() {
            this.removeListener()
        }
    }
    class yt extends Laya.Script {
        constructor() {
            super(...arguments), this.isAutoShow = !1, this.autoShowDealy = 1e4, this.isShow = !1
        }
        init() {
            this.ow = this.owner, this.close = this.owner.getChildByName("close"), this.icon = this.owner.getChildByName("icon"), this.close.on(Laya.Event.CLICK, this, () => {
                this.hide()
            }), this.icon.on(Laya.Event.CLICK, this, () => {
                this.adClick()
            }), this.tempAd = new at, this.tempAd.imgUrlList = [], this.ow.visible = !1, this.hide()
        }
        addCheckBtn(e) {
            this.checkBtn = e, this.checkBtn && (this.checkBtn.visible = this.isShow, e.on(Laya.Event.CLICK, this, () => {
                this.adClick()
            }))
        }
        setAdBtn(e) {
            this.curAdBtn = e, e && (e.on(Laya.Event.CLICK, this, () => {
                this.adClick()
            }), e.visible = !1)
        }
        adClick() {
            (xs.getIns().isOVPlatform() || xs.getIns().isXiaoMiPlatform()) && (this.curAdData && ct.getIns().reportNativeAdClick(this.curAdData.adObj, this.curAdData.adId), this.curAdBtn && (this.curAdBtn.visible = !1)), this.hide(), this.isAutoShow && (Laya.timer.clear(this, this.reShowAd), Laya.timer.once(this.autoShowDealy, this, this.reShowAd))
        }
        reShowAd() {
            this.show()
        }
        show() {
            this.isShow || (this.isShow = !0, xs.getIns().isOVPlatform() ? ct.getIns().createNativeAd(e => {
                this.insertAdobj(e)
            }, () => {
                this.hide()
            }) : xs.getIns().isXiaoMiPlatform() ? Ke.getIns().showXMNative() ? ct.getIns().createNativeAd(e => {
                this.insertAdobj(e)
            }, () => {
                this.hide()
            }) : this.hide() : xs.getIns().isWINPlatform() && this.insertAdobj(this.tempAd))
        }
        insertAdobj(e) {
            if (!e) return void this.hide();
            let t;
            this.checkBtn && (this.checkBtn.visible = !0), this.curAdData = e, this.isShow && (this.ow.visible = !0, this.curAdBtn && (this.curAdBtn.visible = !0)), (t = e.imgUrlList.length > 0 ? e.imgUrlList[0] : e.icon) ? this.icon.skin = t : this.hide()
        }
        hide() {
            this.isShow && (this.curAdBtn && (this.curAdBtn.visible = !1), this.isShow = !1, this.ow.visible = !1, this.checkBtn && (this.checkBtn.visible = !1))
        }
    }
    class wt extends L {
        constructor() {
            super(...arguments), this.showTimerBar = !1, this.curCpTimer = 0, this.curCpTime = 2e3, this.curWantedId = 0, this.maxWantedId = 16, this.teachIds = [1, 2, 3, 4], this.curTeachId = -1, this.isCheckDeline = !1, this.curBuffTime = 0
        }
        pageInit() {
            super.pageInit(), this.m_cai = this.viewProp.m_cai, this.m_gameUI = this.viewProp.m_gameUI, this.m_cRangBar1 = this.viewProp.m_cRangBar1, this.m_cRangBar = this.viewProp.m_cRangBar, this.m_wantedView = this.viewProp.m_wantedView, this.m_wantedTips = this.viewProp.m_wantedTips, this.m_wantedView.zOrder = 1e4, this.viewProp.m_teachView.zOrder = 10001, this.m_native_bottom = this.viewProp.m_native_bottom.getComponent(yt), this.m_native_bottom.init(), this.m_native_bottom.hide(), this.m_native_left = this.viewProp.m_native_left.getComponent(yt), xs.getIns().isOPPOPlatform() && (this.m_native_left.adId = "605496"), this.m_native_left.init(), this.m_native_left.hide(), this.m_buff = this.viewProp.m_buff, this.m_buffIcon = this.viewProp.m_buffIcon, ut.getIns().gameView = this, this.isShowTop = !0;
            let t = this.viewProp.m_clickBg.getComponent(It);
            t.init(), this.rockerMgr = t, this.speedTimeLable = Cs.getIns().seekNodeByName(this.viewProp.m_speed, "time"), this.carryTimeLable = Cs.getIns().seekNodeByName(this.viewProp.m_carry, "time"), this.viewProp.m_speed.on(Laya.Event.CLICK, this, this.speedUp), this.viewProp.m_carry.on(Laya.Event.CLICK, this, this.carryUp), this.viewProp.m_setting.on(Laya.Event.CLICK, this, () => {
                Cs.getIns().btnAction(this.viewProp.m_setting, () => {
                    Y.UIMgr.ins.openUI(Y.UIType.PageSetting)
                })
            }), this.viewProp.m_levelEnter.on(Laya.Event.CLICK, this, () => {
                Cs.getIns().btnAction(this.viewProp.m_levelEnter, () => {
                    Y.UIMgr.ins.openUI(Y.UIType.PageMarkView)
                })
            }), this.showTeach(1, !1), this.viewProp.m_teack_skip.on(Laya.Event.CLICK, this, () => {
                Cs.getIns().btnAction(this.viewProp.m_teack_skip, () => {
                    1 == this.curTeachId && this.showWantedById(1), this.showTeach(1, !1)
                })
            }), this.viewProp.m_more.on(Laya.Event.CLICK, this, () => {
                Cs.getIns().btnAction(this.viewProp.m_more, () => {
                    xs.getIns().isQQPlatform() ? ct.getIns().createAppBox(null) : xs.getIns().isOPPOPlatform() || xs.getIns().isXiaoMiPlatform() ? ct.getIns().cretaeBoxAd(null) : (xs.getIns().isWXPlatform() || xs.getIns().isWINPlatform()) && Y.UIMgr.ins.openUI(Y.UIType.ExportAdList)
                })
            }), this.viewProp.m_yinsi.on(Laya.Event.CLICK, this, () => {
                Y.UIMgr.ins.openUI(Y.UIType.YinSiFuWuView)
            }), xs.getIns().isWXPlatform() && (this.viewProp.m_yinsi.visible = !1), this.viewProp.m_adTips.on(Laya.Event.CLICK, this, () => {}), Cs.getIns().onClick(this.viewProp.m_clearData, () => {
                ks.getIns().clear()
            }), Cs.onClick(this.viewProp.m_addToDesk, () => {
                ct.getIns().addDesk()
            }), Cs.onClick(this.viewProp.m_uplv, () => {
                Y.UIMgr.ins.openUI(Y.UIType.PageUpLv)
            }), Cs.onClick(this.viewProp.m_cai, () => {
                this.showWantedById(this.maxWantedId + 1), Y.UIMgr.ins.openUI(Y.UIType.PictureView)
            }), Cs.onClick(this.viewProp.m_toShare, () => {
                Y.UIMgr.ins.openUI(Y.UIType.ShareView)
            }), Cs.onClick(this.viewProp.m_qqyinsi, () => {
                Y.UIMgr.ins.openUI(Y.UIType.YinsiView)
            }), Cs.onClick(this.viewProp.m_qqfuwu, () => {
                Y.UIMgr.ins.openUI(Y.UIType.FuWuView)
            }), Cs.onClick(this.viewProp.m_openall, () => {
                let e = Ge.getCreateList();
                for (let t = 0; t < e.length; t++) ks.getIns().addBuildByType(e[t], ut.getIns().getCurLevelId());
                e = Ge.getCreateList1();
                for (let t = 0; t < e.length; t++) ks.getIns().addBuildByType(e[t], ut.getIns().getCurLevelId())
            });
            if (xs.getIns().isWINPlatform() || (this.viewProp.m_clearData.visible = !1, this.viewProp.m_openall.visible = !1), xs.getIns().isVIVOPlatform()) ct.getIns().createBoxPortalAd(null), Cs.getIns().createBanner(), Laya.timer.loop(1e3, this, () => {
                if (Ke.getIns().showVivoMaxByTime()) {
                    let e = Y.UIMgr.ins.getPageByName(Y.UIType.NativePicture);
                    e && e.isOpen || Y.UIMgr.ins.openUI(Y.UIType.NativePicture)
                }
            });
            else if (xs.getIns().isTTPlatform()) {
                let e = Ke.getIns().getshowInsertAd();
                e >= 0 && Laya.timer.loop(1e3 * e, this, () => {
                    100 * Math.random() < Ke.getIns().getinsertAdRate() && ct.getIns().createInterstitialAd()
                }), Laya.timer.loop(1e3 * Ke.getIns().getshareTime(), this, () => {
                    Y.UIMgr.ins.openUI(Y.UIType.ShareView)
                })
            } else if (xs.getIns().isOPPOPlatform() || xs.getIns().isXiaoMiPlatform()) this.m_native_bottom.show(), this.m_native_bottom.isAutoShow = !0, xs.getIns().isOPPOPlatform() && this.m_native_left.show(), ct.getIns().createXFQ(null), e.getIns().addEventListerner(i.MISCLICKBANNER, () => {
                Ke.getIns().showOppoNativeByTime() && this.m_native_bottom.adClick()
            }, this);
            else if (xs.getIns().isWXPlatform()) {
                let e = !1;
                Laya.timer.loop(1e3, this, () => {
                    e || Ke.getIns().showWxMaxByTime() && (e = !0, Cs.getIns().shareOrAd(() => {
                        e = !1, Ke.getIns().resetVideoTime()
                    }, () => {
                        e = !1, Ke.getIns().resetVideoTime()
                    }))
                })
            }
        }
        reShowBanner() {
            this.m_native_bottom.show()
        }
        checkCai() {
            this.m_cai.visible = fs.getIns().buildIsCreate(R.ParkYuguangtouProcess)
        }
        showChangePlayerTimerBar(e, t, s) {
            this.showTimerBar = e, this.m_cRangBar.visible = e, this.cpCallBack = null, this.rangTar = t, e && (this.cpCallBack = s, this.curCpTimer = 0)
        }
        checkWantedPre(e) {
            8 == e ? (Ge.isFirstShowYin = !0, fs.getIns().checkWaiterCreatePointByType()) : 15 != e && 14 != e && 16 != e && 13 != e || (this.curWantedId = 0)
        }
        checkShowWanted(e) {
            if (!(ks.getIns().getWantedId() > this.maxWantedId))
                if (this.curWantedId + 1 == e) {
                    if (3 == e) fs.getIns().buildIsCreate(R.ParkShadingyu) ? e++ : fs.getIns().playerMgr.showTeachArray(fs.getIns().getStoreByType(R.ParkShadingyu).getCreatePos());
                    else if (4 == e) fs.getIns().buildIsCreate(R.ParkShadingyuProcess) ? e++ : fs.getIns().playerMgr.showTeachArray(fs.getIns().getProductByType(R.ParkShadingyuProcess).getCreatePos());
                    else if (10 == e) fs.getIns().buildIsCreate(R.ParkYuguangtouProcess) ? e++ : fs.getIns().playerMgr.showTeachArray(fs.getIns().getProductByType(R.ParkYuguangtouProcess).getCreatePos());
                    else if (2 == e) fs.getIns().buildIsCreate(R.ParkCashier) ? e++ : fs.getIns().playerMgr.showTeachArray(fs.getIns().getStoreByType(R.ParkCashier).getCreatePos());
                    else if (5 == e) fs.getIns().playerMgr.showTeachArray(fs.getIns().getProductByType(R.ParkShadingyuProcess).node);
                    else if (6 == e) {
                        let e = fs.getIns().getProductByType(R.ParkShadingyuProcess);
                        fs.getIns().playerMgr.showTeachArray(e.node), e.showArrow(!0)
                    } else if (7 == e) fs.getIns().playerMgr.showTeachArray(fs.getIns().getStoreByType(R.ParkCashier).node);
                    else if (9 == e) fs.getIns().buildIsCreate(R.ParkYuguangtou) ? e++ : fs.getIns().playerMgr.showTeachArray(fs.getIns().getStoreByType(R.ParkYuguangtou).getCreatePos());
                    else if (11 == e) {
                        let e = fs.getIns().getProductByType(R.ParkShadingyuProcess);
                        e && (fs.getIns().playerMgr.showTeachArray(e.node), e.showArrow(!0))
                    } else if (12 == e) {
                        let e = fs.getIns().getProductByType(R.ParkYuguangtouProcess);
                        e && e.showArrow(!0)
                    }
                    this.showWantedById(e)
                } else if (8 == e) ks.getIns().hasWaiterById(6005, ut.getIns().getCurLevelId()) ? e++ : (fs.getIns().checkWaiterCreatePointByType(), fs.getIns().playerMgr.showTeachArray(fs.getIns().getWaiterCreatePoint(6005).node)), this.showWantedById(e);
            else if (14 == e) this.showWantedById(e);
            else if (15 == e) ks.getIns().hasWaiterById(6007, ut.getIns().getCurLevelId()) ? e++ : (fs.getIns().checkWaiterCreatePointByType(), fs.getIns().playerMgr.showTeachArray(fs.getIns().getWaiterCreatePoint(6007).node)), this.showWantedById(e);
            else if (13 == e) {
                if (ks.getIns().getWaiterCountByID(6002, ut.getIns().getCurLevelId())) e = 16;
                else {
                    let e = fs.getIns().getWaiterCreatePoint(6002);
                    e && e.getIsOpen() && fs.getIns().cameraMgr.forceCameraTweenMove(e.node.transform.position, 1e3, 500, () => {
                        fs.getIns().cameraMgr.backPos(null, 1e3)
                    }), fs.getIns().playerMgr.showTeachArray(fs.getIns().getWaiterCreatePoint(6002).node)
                }
                this.showWantedById(e)
            } else 16 == e && (fs.getIns().playerMgr.showTeachArray(null), this.showWantedById(e))
        }
        showWantedById(e) {
            this.curWantedId = e, this.m_wantedView.visible = !0;
            let t = "";
            1 == e ? t = "拾取秘银币" : 2 == e ? t = "解锁黑羽结算台" : 3 == e ? t = "解锁秘银封柜" : 4 == e ? t = "解锁浸泡缸" : 5 == e ? t = "开始采集原料" : 6 == e ? t = "把原料放进封柜" : 7 == e ? t = "快去黑羽结算台，顾客在等你结算" : 8 == e ? t = "招募黑潮采集师" : 9 == e ? t = "解锁封印冷柜" : 10 == e ? t = "解锁炼制案台" : 11 == e ? t = "把原料带到炼制案台" : 12 == e ? t = "开始封蜡炼制" : 13 == e ? t = "解锁夜巷搬运侍" : 14 == e ? t = "收取散落秘银" : 15 == e ? t = "解锁秘药炼制师" : 16 == e && (t = "打开禁货图鉴查看更多配方"), ks.getIns().setWantedId(e), this.m_wantedTips.text = t, (e > this.maxWantedId || "" == t) && this.closeWanted()
        }
        closeWanted(e = -1) {
            -1 == e ? this.m_wantedView.visible = !1 : e == this.curWantedId && (this.m_wantedView.visible = !1)
        }
        showTeach(e, t) {
            if (!t || !wt.isTeach || 0 == this.teachIds.length) return void(this.viewProp.m_teachView.visible = !1);
            let s = this.teachIds.indexOf(e);
            s < 0 ? this.viewProp.m_teachView.visible = !1 : (this.teachIds.splice(s, 1), this.curTeachId = e, this.viewProp.m_teachView.visible = t, this.viewProp.m_teachTip.skin = "page/teachView/teach_" + e + ".png")
        }
        upRockerFun() {
            this.rockerMgr && this.rockerMgr.upRocker(null)
        }
        speedUp() {
            Cs.getIns().shareOrAd(() => {}, null)
        }
        showBuff(e, t, s) {
            this.m_buffIcon.skin = "page/gameView/buff_" + s + ".png", this.curBuffTime = t, this.m_buff.visible = e
        }
        showBuffTime(e) {
            this.viewProp.m_buff_time.text = e
        }
        carryUp() {
            Cs.getIns().shareOrAd(() => {}, null)
        }
        pagePreload(e) {
            Cs.getIns().loadUiJson(["prefab/item/productPro.json", "prefab/item/autoFullView.json", "prefab/item/buffUI.json", "prefab/item/waiterUpUIItem.json", "prefab/item/buildInfoUI.json", "prefab/item/waiterUIItem.json", "prefab/item/productNeedItem.json", "prefab/item/toCashierItem.json", "prefab/item/createUI.json", "prefab/item/buyTipsItem.json"], e)
        }
        pageOpen(e) {
            if (super.pageOpen(e), this.vals = e, this.showBuff(!1, 0, 1), this.upRockerFun(), !this.isCheckDeline) {
                this.isCheckDeline = !0;
                let e = ks.getIns().getOutTime();
                if (e > 600) {
                    let t = 7200;
                    e = e > t ? t : e;
                    let s = {};
                    s.count = Math.ceil(e / t * 500), Y.UIMgr.ins.openUI(Y.UIType.DelineView, s)
                }
                ks.getIns().canSaveOutTime = !0, ks.getIns().saveTime()
            }
            if (xs.getIns().isWXPlatform() ? (ct.getIns().createCustomAd(6, 5, 250, "adunit-"), ct.getIns().createCustomAd(7, 65, 250, "adunit-"), ct.getIns().createCustomAd(2, 360, 110, "adunit-")) : xs.getIns().isQQPlatform() && (ct.getIns().destoryBlockAd(), ct.getIns().createTwoBlockAd(), ct.getIns().cretaeCenterBlockAd(7, 5), Cs.getIns().createBanner()), ct.getIns().startRecord(), this.closeWanted(), ks.getIns().hasNewPlayer() && !wt.isTeach) wt.isTeach = !0, this.showTeach(1, !0);
            else if (console.log("教程id:", ks.getIns().getWantedId()), ks.getIns().getWantedId() <= this.maxWantedId) {
                let e = ks.getIns().getWantedId();
                e = Math.max(2, e), this.curWantedId = e - 1, this.checkWantedPre(e), this.checkShowWanted(e)
            }
            this.showChangePlayerTimerBar(!1, null, null), this.checkCai()
        }
        pageOpenTweenOver() {
            super.pageOpenTweenOver(), this.vals && this.vals.endFun && this.vals.endFun()
        }
        onUpdate() {
            if (this.curBuffTime > 0 && (this.curBuffTime -= Laya.timer.delta, this.curBuffTime = this.curBuffTime < 0 ? 0 : this.curBuffTime, this.showBuffTime(Cs.getIns().convertSecondToHourMinuteSecond(Math.floor(.001 * this.curBuffTime), !0)), 0 == this.curBuffTime && this.showBuff(!1, 0, 1)), this.showTimerBar) {
                this.curCpTimer += Laya.timer.delta;
                let e = this.curCpTimer / this.curCpTime;
                if (e = e > 1 ? 1 : e, Cs.getIns().setImgPercent(this.m_cRangBar1, 1 - e), this.rangTar) {
                    let e = fs.getIns().cameraMgr.worldPosToScreenPos(this.rangTar.transform.position);
                    this.m_cRangBar.x = e.x, this.m_cRangBar.y = e.y - 120
                }
                e >= 1 && (this.cpCallBack && this.cpCallBack(), this.showChangePlayerTimerBar(!1, null, null))
            }
        }
        addListerner() {
            super.addListerner(), this.rockerMgr.rockerDown = (() => {
                fs.getIns() && (fs.getIns().cameraMgr.cameraInMove() || ut.getIns().isGameStart() && fs.getIns().playerMgr.rockerDown())
            }), this.rockerMgr.rockerUp = (() => {
                fs.getIns() && ut.getIns().isGameStart() && (fs.getIns().cameraMgr.cameraInMove() || fs.getIns().playerMgr.rockerUp())
            }), this.rockerMgr.rockerMove = ((e, t, s) => {
                fs.getIns() && fs.getIns().playerMgr.changeForward(e, t, s)
            })
        }
        removeListerner() {
            super.removeListerner(), this.rockerMgr.rockerDown = null, this.rockerMgr.rockerMove = null, this.rockerMgr.rockerUp = null
        }
        hightPageClose(e) {
            super.hightPageClose(e), xs.getIns().isQQPlatform() && (ct.getIns().destoryBlockAd(), ct.getIns().createTwoBlockAd(), ct.getIns().cretaeCenterBlockAd(7, 5), Cs.getIns().createBanner())
        }
        hightPageOpen(e) {
            super.hightPageOpen(e), xs.getIns().isQQPlatform() && (ct.getIns().destoryBlockAd(), Cs.getIns().hintBanner())
        }
        pageClose() {
            super.pageClose(), xs.getIns().isWXPlatform() ? ct.getIns().destoryCustomAd() : xs.getIns().isQQPlatform() && (ct.getIns().destoryBlockAd(), Cs.getIns().hintBanner())
        }
    }
    wt.isTeach = !1;
    class ft extends Laya.Script {
        constructor() {
            super(...arguments), this.playerActor = null, this.isAddLis = !1
        }
        init() {}
        setActor(e) {
            // this.playerActor = e
        }
        resgistLis() {
            // this.isAddLis || (console.error("添加键位监听"), this.isAddLis = !0, Laya.stage.on(Laya.Event.KEY_DOWN, this, this.keyDown), Laya.stage.on(Laya.Event.KEY_UP, this, this.keyUp))
        }
        removeLis() {
            // this.isAddLis && (this.isAddLis = !1, Laya.stage.off(Laya.Event.KEY_DOWN, this, this.keyDown), Laya.stage.off(Laya.Event.KEY_UP, this, this.keyUp))
        }
        onDestroy() {
            // this.removeLis()
        }
        keyDown(e) {
            // e.keyCode == Laya.Keyboard.W || (e.keyCode, Laya.Keyboard.S), e.keyCode, Laya.Keyboard.A, e.keyCode, Laya.Keyboard.D, e.keyCode == Laya.Keyboard.SHIFT && this.playerActor.speedUp(this.playerActor.boneDis + 1), e.keyCode == Laya.Keyboard.SPACE && this.playerActor.addBodyBone(2), e.keyCode == Laya.Keyboard.C && this.playerActor.changeBodySpace(this.playerActor.boneDis - 1), e.keyCode == Laya.Keyboard.X && this.playerActor.punchOneMan(), e.keyCode == Laya.Keyboard.Z && this.playerActor.punchMan(.5), e.keyCode == Laya.Keyboard.V && this.playerActor.punchMan(1), e.keyCode == Laya.Keyboard.P && this.playerActor.punchMan(.2), e.keyCode == Laya.Keyboard.T && (Laya.timer.scale = 5)
        }
        keyUp(e) {
            // e.keyCode == Laya.Keyboard.SHIFT ? this.playerActor.speedEnd() : e.keyCode == Laya.Keyboard.SPACE && this.playerActor.cancelBrake(), e.keyCode == Laya.Keyboard.T && (Laya.timer.scale = 1)
        }
    }
    class Pt extends Ye {
        constructor() {
            super(...arguments), this.money = 0, this.accountPosData = [], this.carryBox = null, this.carryNodes = [], this.moneys = [], this.moneyCount = 0, this.moneyRate = 1, this.tweenMove = new me, this.hasBox = !0
        }
        init() {
            super.init(), this.parkType = R.ParkCashier, this.carryBox = Cs.getIns().seekNodeByName(this.owner, "carryBox");
            let e = Cs.getIns().seekNodeByName(this.carryBox, "carryNode");
            this.boxAnim = this.carryBox.getComponent(Laya.Animator), this.playBoxAnim(ie.Box_Open), this.shouYinPos = Cs.getIns().seekNodeByName(this.owner, "shouYinPos"), Cs.getIns().getChildBySgin(e, "p", this.carryNodes);
            let t = Cs.getIns().seekNodeByName(this.owner, "sortPos"),
                s = [];
            Cs.getIns().getChildBySgin(t, "p", s);
            for (let e = 0; e < s.length; e++) {
                let t = new Ct;
                t.pos = s[e], t.index = e, this.accountPosData.push(t)
            }
            let i = Cs.getIns().seekNodeByName(this.owner, "money"),
                a = [];
            Cs.getIns().getChildBySgin(i, "p", a);
            for (let e = 0; e < a.length; e++) {
                let t = a[e];
                t.getChildAt(0).getComponent(Laya.PhysicsCollider).destroy();
                let s = new Te;
                s.itemType = W.Money, s.item = t.getChildAt(0), s.setItemState(0), this.moneys.push(s)
            }
        }
        setWaiter(e) {
            this.waiter = e
        }
        getWaiter() {
            return this.waiter
        }
        stopBoxAnim() {
            this.boxAnim.speed = 0
        }
        playBoxAnim(e) {
            this.boxAnim.speed = 1, this.boxAnim.play(e, 0, 0)
        }
        collectMoney(e) {
            if (0 == this.moneyCount) return;
            if (!this.hasMoneyModel()) return;
            if (this.tweenMove.hasTween()) return;
            let t = 0;
            for (let s = 0; s < this.moneys.length; s++) {
                if (2 != this.moneys[s].itemState) continue;
                let i = this.moneys[s];
                i.setItemState(1), t += this.moneyRate, this.tweenMove.toTarget(i.item, e, 100 * s, 2, () => {
                    i.setItemState(0)
                })
            }
            0 != t && (Ge.isFirstShowYin || (Ge.isFirstShowYin = !0, ut.getIns().gameView && 14 == ks.getIns().getWantedId() && ut.getIns().gameView.checkShowWanted(8)), l.getIns().umLevel("event_shouyin", 1), f.getIns().playSound(P.revivecoin), t = Math.ceil(t), ks.getIns().plusCoin(t), this.moneyCount -= t, this.moneyCount = this.moneyCount < 0 ? 0 : this.moneyCount)
        }
        hasMoneyModel() {
            for (let e = 0; e < this.moneys.length; e++)
                if (2 == this.moneys[e].itemState) return !0;
            return !1
        }
        getShouYinPos() {
            return this.shouYinPos.transform.position
        }
        getShowYinNode() {
            return this.shouYinPos
        }
        getBuildId() {
            return 1003
        }
        getAccountPos() {
            for (let e = 0; e < this.accountPosData.length; e++)
                if (!this.accountPosData[e].isUse) return this.accountPosData[e];
            return null
        }
        getAccountPosByIndex(e) {
            return this.accountPosData[e]
        }
        resetAccountPos(e) {
            for (let t = 0; t < this.accountPosData.length; t++)
                if (this.accountPosData[t].pos == e) {
                    this.accountPosData[t].isUse = !1;
                    break
                }
        }
        showMoneyCount(e, t, s) {
            if (0 == e) return void Cs.getIns().handlerFun(s);
            let i = 0,
                a = () => {
                    ++i != e || Cs.getIns().handlerFun(s)
                };
            for (let s = 0; s < e; s++) {
                let e = this.getMoneyPosData();
                if (!e) {
                    a();
                    continue
                }
                e.setItemState(1);
                let i = e.item.transform.position;
                t.cloneTo(i), e.item.transform.position = i, this.itemTween.toLocal(e.item, () => {
                    e.setItemState(2), a()
                }, 100 * s, 400)
            }
        }
        getMoneyPosData() {
            for (let e = 0; e < this.moneys.length; e++)
                if (0 == this.moneys[e].itemState) return this.moneys[e];
            return null
        }
        onUpdate() {
            super.onUpdate(), this.tweenMove.update()
        }
        toSell(e, t, s, i) {
            let a = 0;
            for (let t = 0; t < e.length; t++) {
                let s = Q.ins.getDataByItemType(e[t].itenType);
                s && (a += s.sellPrice * e[t].curCount * ut.getIns().getLevelMul())
            }
            this.moneyCount += a;
            let n = t.length;
            if (0 == n) return void Cs.getIns().handlerFun(s);
            fs.getIns().isCreateSpcCus() && fs.getIns().createCustomById();
            let r = 0,
                o = () => {
                    ++r == n && (this.playBoxAnim(ie.Box_Closing), Laya.timer.once(600, this, () => {
                        this.clearLastCarry(), this.showMoneyCount(Math.ceil(a / this.moneyRate), i.transform.position.clone(), s), 1 == ut.getIns().getCurLevelId() && ut.getIns().gameView && 7 == ks.getIns().getWantedId() && ut.getIns().gameView.showWantedById(14)
                    }))
                };
            for (let e = 0; e < t.length; e++) {
                if (this.carryNodes.length <= e) {
                    t[e].destroy(), o();
                    continue
                }
                let s = t[e],
                    i = s.transform.position.clone(),
                    a = Laya.Sprite3D.instantiate(s);
                this.carryNodes[e].addChild(a), a.transform.position = i, s.destroy(), this.itemTween.toLocal(a, () => {
                    o()
                }, 100 * e, 500)
            }
        }
        hasInBuy() {
            for (let e = 0; e < this.moneys.length; e++)
                if (1 == this.moneys[e].itemState) return !0;
            return !1
        }
        clearLastCarry() {
            for (let e = 0; e < this.carryNodes.length; e++) Cs.getIns().removeChild(this.carryNodes[e])
        }
        hasPackingBox() {
            return this.hasBox
        }
        setBox(e) {
            1 == ut.getIns().getCurLevelId() && ut.getIns().gameView && e && ks.getIns().getWantedId() <= 6 || e != this.hasBox && (this.hasBox = e, this.carryBox.active = e, e && this.playBoxAnim(ie.Box_Open))
        }
        openStoreEnd() {
            super.openStoreEnd(), this.setBox(!1)
        }
    }
    class Ct {
        constructor() {
            this.index = 0, this.isUse = !1
        }
    }
    class vt extends Ye {
        init() {
            this.parkType = R.ParkJinqiangyu, this.sellType = W.Jinqiangyu, super.init()
        }
        getBuildId() {
            return 1004
        }
    }
    class Tt extends ve {
        init() {
            this.parkType = R.ParkJinqiangyuProcess, this.productItemType = Cs.getItemTypeByParkType(this.parkType), super.init()
        }
        getBuildId() {
            return 1002
        }
    }
    class St extends ae {
        init() {
            super.init(), this.icon = this.owner.getChildByName("icon"), this.count = this.owner.getChildByName("count")
        }
        setIcon(e) {
            this.icon.skin = e
        }
        setCount(e, t) {
            this.count.text = e + "/" + t
        }
    }
    class kt extends ae {
        init() {
            super.init(), this.icon = this.owner.getChildByName("icon")
        }
        setIcon(e) {
            this.icon.skin = "page/gameView/" + e + ".png"
        }
    }
    class Bt extends re {
        constructor() {
            super(...arguments), this.roadPath = [], this.roadIndex = 0, this.treeFsm = new Ee, this.rotQua = new Laya.Quaternion, this.fsm = new oe, this.pickUpPosDatas = [], this.needDatas = [], this.buySort = [], this.buyIndex = 0, this.isDeath = !1, this.trolley = null, this.tuiCheQua = null, this.hats = [], this.kuzis = [], this.curMoveForward = new Laya.Vector3, this.tempVec1 = new Laya.Vector3, this.tempV2 = new Laya.Vector3, this.tempForward = new Laya.Vector3, this.moveVec = new Laya.Vector3, this.moveSpeed = .04, this.curPark = null, this.tmepVec1 = new Laya.Vector3, this.lastCount = -1, this.itemTween = new be, this.accountPosData = null, this.lastWaitAnimName = null, this.isShowTeach = !0, this.buyGoodState = 0, this.curMovePos = new Laya.Vector3
        }
        init() {
            super.init();
            let e = Cs.getIns().seekNodeByName(this.owner, "head"),
                t = Cs.getIns().randomNum(0, e.numChildren - 1);
            for (let s = 0; s < e.numChildren; s++) this.hats.push(e.getChildAt(s)), this.hats[s].active = s == t;
            let s = this._node.getChildByName("Model");
            Cs.getIns().getChildInParBySgin(s, "ku0", this.kuzis);
            let i = Cs.getIns().randomNum(0, this.kuzis.length);
            for (let e = 0; e < this.kuzis.length; e++) this.kuzis[e].active = e == i;
            this.m_carryBox = Cs.getIns().seekNodeByName(this.owner, "m_carryBox"), this.boxAnim = this.m_carryBox.getComponent(Laya.Animator), this.trolley = Cs.getIns().seekNodeByName(this.owner, "trolley"), this.showTrolley(!0), this.showCarryBox(!1);
            let a = Cs.getIns().seekNodeByName(this.owner, "pickUpNode");
            if (a) {
                let e = [];
                Cs.getIns().getChildBySgin(a, "p", e);
                for (let t = 0; t < e.length; t++) {
                    let s = new Ue;
                    s.par = e[t], this.pickUpPosDatas.push(s)
                }
            }
            this.tempSp = new Laya.Sprite3D("rotSp"), this._node.addChild(this.tempSp), Cs.getIns().resetTransform(this.tempSp), this.initFsm(), this.initTreeState(), this.createUI(), this.radomColor()
        }
        radomColor() {
            let e = fs.getIns().getRadomMat(),
                t = this._node.getChildByName("Model").getChildByName("man"),
                s = t.skinnedMeshRenderer.materials;
            s[1] = e, t.skinnedMeshRenderer.materials = s
        }
        stopBoxAnim() {
            this.boxAnim.speed = 0
        }
        createUI() {
            if (!this.buytipsMgr) {
                let e = Cs.getIns().createPrefab("prefab/item/buyTipsItem.json");
                ut.getIns().gameView.owner.addChild(e), this.buytipsMgr = e.addComponent(St), this.buytipsMgr.init(), e = Cs.getIns().createPrefab("prefab/item/toCashierItem.json"), ut.getIns().gameView.owner.addChild(e), this.toCashierItem = e.addComponent(kt), this.toCashierItem.init(), this.toCashierItem.setShow(!1)
            }
        }
        showTrolley(e) {
            this.trolley && (this.trolley.active = e)
        }
        showCarryBox(e) {
            this.m_carryBox.active = e, e && this.boxAnim.play(ie.Box_Closing, 0, 1)
        }
        setCustomData(e) {
            this.customData = e, e.getNeedGoods().forEach((e, t) => {
                this.buySort.push(Cs.getParkTypeTypeByItemType(t)), this.setNeedCount(t, e)
            })
        }
        getEmptyPosData() {
            for (let e = 0; e < this.pickUpPosDatas.length; e++)
                if (null == this.pickUpPosDatas[e].item) return this.pickUpPosDatas[e];
            return null
        }
        setNeedCount(e, t) {
            let s = new Lt;
            s.itenType = e, s.needCount = t, this.needDatas.push(s)
        }
        getNeedDataByType(e) {
            for (let t = 0; t < this.needDatas.length; t++)
                if (this.needDatas[t].itenType == e) {
                    return this.needDatas[t]
                } return null
        }
        showIdleUp() {
            let e = "";
            return 1 == this.customData.type ? e = this.hasGoods() ? ie.U_banyun : ie.U_idleloop : 2 == this.customData.type && (e = this.fsm.getState() == H.Account ? ie.U_idleloop : this.trolley && this.trolley.active ? ie.U_tuiche : this.hasGoods() ? ie.U_banyun : ie.U_idleloop), "" != e && this.playAnim(e, null, !1, 1, 1), e
        }
        changeStateEnd(e) {
            switch (e) {
                case H.MoveToShop:
                    this.playAnim(ie.B_walk), this.showIdleUp();
                    break;
                case H.Shopping:
                    this.playAnim(ie.B_idleloop), this.showIdleUp();
                    break;
                case H.MoveToAccount:
                    this.playAnim(ie.B_walk), this.showIdleUp(), this.toCashierItem.setShow(!0), this.buytipsMgr.setShow(!1);
                    break;
                case H.Account:
                    this.playAnim(ie.B_idleloop), this.showIdleUp();
                    break;
                case H.MoveToOut:
                    this.toCashierItem.setIcon("face_" + Cs.getIns().randomNum(1, 2)), this.playAnim(ie.B_walk), this.m_carryBox.active ? this.playAnim(ie.U_banyun, null, !1, 1, 1) : this.playAnim(ie.U_idleloop, null, !1, 1, 1);
                    break;
                case H.ShoppingEnd:
            }
        }
        initFsm() {
            this.fsm.setChangeStateEndFun(this.changeStateEnd.bind(this))
        }
        initTreeState() {
            let e = new Fe;
            e.enterFun = (() => this.roadPath && 0 != this.roadPath.length ? E.Success : E.Failed);
            let t = new Fe,
                s = new De;
            s.SetNodeAction(this.moveToShop.bind(this));
            let i = new De;
            i.SetNodeAction(this.shoppingInShop.bind(this)), t.AddChildNode(s), t.AddChildNode(i);
            let a = new Fe,
                n = new De;
            n.SetNodeAction(this.moveToCashier.bind(this));
            let r = new De;
            r.SetNodeAction(this.toCashier.bind(this)), a.AddChildNode(n), a.AddChildNode(r);
            let o = new De;
            o.SetNodeAction(this.moveOutDoor.bind(this)), e.AddChildNode(t), e.AddChildNode(a), e.AddChildNode(o), this.treeFsm.Init(e), this.treeFsm.StartTree()
        }
        changeRot(e) {
            Cs.getIns().lookAtTarget(this.tempSp, e), this.tempSp.transform.rotation.cloneTo(this.rotQua)
        }
        lookForward(e) {
            Laya.Vector3.add(e, this._node.transform.position, this.tempV2), this.tempV2.y = this._node.transform.position.y, Cs.getIns().lookAtTarget(this.tempSp, this.tempV2), this.tempSp.transform.rotation.cloneTo(this.rotQua)
        }
        toRot() {
            let e = this._node.transform.rotation;
            if (Laya.Quaternion.lerp(e, this.rotQua, .2, e), this._node.transform.rotation = e, this.tuiCheQua && this.trolley) {
                let e = this.trolley.transform.rotation;
                this.tuiCheQua.cloneTo(e), this.trolley.transform.rotation = e
            }
        }
        recordMoveForward(e) {
            Laya.Vector3.subtract(e, this._node.transform.position, this.curMoveForward), this.curMoveForward.y = 0, Laya.Vector3.normalize(this.curMoveForward, this.curMoveForward), Laya.Vector3.scale(this.curMoveForward, this.moveSpeed, this.moveVec)
        }
        offectPlayerPos(e) {
            let t = this._node.transform.position;
            t.x = e.x, t.y = e.y, this._node.transform.position = t
        }
        playAndCheckDownAnim(e) {
            this.lasDownAnim != e && (this.lasDownAnim = e, this.playAnim(e))
        }
        moveToShop() {
            if (this.fsm.getState() != H.MoveToShop) return E.Success;
            if (this.itemTween.hasTween()) return this.playAndCheckDownAnim(ie.B_idleloop), E.Running;
            if (this.playAndCheckDownAnim(ie.B_walk), this.checkToTarget(this.curMovePos)) {
                if (this.offectPlayerPos(this.curMovePos), this.roadIndex >= this.roadPath.length - 1) {
                    let e = this.buySort[this.buyIndex];
                    return this.curPark = fs.getIns().getStoreByType(e), this.fsm.changeState(H.Shopping), this.curPark.getIsCreate() && this.curPark.enterStore(), this.lastWaitAnimName = null, E.Success
                }
                return this.toNextMovePos(), E.Running
            }
            return this._node.transform.translate(this.moveVec, !1), E.Running
        }
        checkToTarget(e) {
            return Laya.Vector3.subtract(e, this._node.transform.position, this.tmepVec1), this.tmepVec1.y = 0, Laya.Vector3.dot(this.tmepVec1, this.curMoveForward) < 0
        }
        shoppingInShop() {
            if (this.fsm.getState() != H.Shopping) return E.Success;
            if (this.curPark.getIsCreate()) {
                if (this.curPark.hasGoods()) {
                    let e = this.getNeedDataByType(this.curPark.getSellItemType());
                    if (null == e);
                    else {
                        let t = this.curPark.getGoodsByCount(e.needCount - e.curCount),
                            s = !1;
                        for (let i = 0; i < t.length; i++) {
                            e.curCount++;
                            let a = this.getEmptyPosData();
                            if (!a) continue;
                            let n = t[i].getItem(a.par);
                            a.item = n, this.itemTween.toLocal(n, () => {}, 100 * i, 250), t[i].setItemState(0), s = !0
                        }
                        if (1 == this.customData.type && (s ? this.lastWaitAnimName != ie.U_banyun && (this.lastWaitAnimName = this.showIdleUp()) : this.lastWaitAnimName != ie.B_idleloop && (this.lastWaitAnimName = this.showIdleUp())), e.needCount - e.curCount > 0) return this.lastCount != e.curCount && (this.lastCount = e.curCount, this.setBuyUIInfo(this.needDatas[this.buyIndex])), E.Running
                    }
                    return this.buySort.length - 1 == this.buyIndex ? (this.fsm.changeState(H.MoveToAccount), this.curPark.outStore(), this.standPos && (this.standPos[Ge.hasPKey] = !1, this.standPos = null)) : (this.lastCount = -1, this.toNextStore()), E.Success
                }
                return E.Running
            }
            return this.buySort.length - 1 == this.buyIndex ? this.itemTween.hasTween() ? E.Running : (this.fsm.changeState(H.MoveToAccount), E.Success) : (this.toNextStore(), E.Success)
        }
        toNextMovePos() {
            if (!this.roadPath) return;
            this.roadIndex++, this.roadPath[this.roadIndex].cloneTo(this.curMovePos), this.recordMoveForward(this.curMovePos), this.changeRot(this.curMovePos)
        }
        moveToCashier() {
            if (this.fsm.getState() != H.MoveToAccount) return E.Success;
            if (this.itemTween.hasTween()) return this.playAndCheckDownAnim(ie.B_idleloop), E.Running;
            if (this.playAndCheckDownAnim(ie.B_walk), this.accountPosData) {
                if (this.checkToTarget(this.curMovePos)) {
                    if (this.roadIndex < this.roadPath.length - 1) return this.toNextMovePos(), E.Running;
                    if (this.offectPlayerPos(this.curMovePos), 0 == this.accountPosData.index) return this.trolley && (this.tuiCheQua = new Laya.Quaternion, this.trolley.transform.rotation.cloneTo(this.tuiCheQua)), this.fsm.changeState(H.Account), this.accountPosData.pos.transform.getForward(this.tempForward), this.lookForward(this.tempForward), E.Success; {
                        let e = this.parkCashier.getAccountPosByIndex(this.accountPosData.index - 1);
                        return this.accountPosData.pos.transform.getForward(this.tempForward), this.lookForward(this.tempForward), e.isUse ? this.lastWaitAnimName != ie.B_idleloop && (this.playAnim(ie.B_idleloop), this.showIdleUp(), this.lastWaitAnimName = ie.B_idleloop) : (this.accountPosData.isUse = !1, this.accountPosData = e, this.accountPosData.isUse = !0, this.getNextPath(this.accountPosData.pos.transform.position), this.toNextMovePos()), E.Running
                    }
                }
                return this.lastWaitAnimName != ie.B_walk && (this.playAnim(ie.B_walk), this.showIdleUp(), this.lastWaitAnimName = ie.B_walk), this._node.transform.translate(this.moveVec, !1), E.Running
            }
            return this.parkCashier = fs.getIns().getNearParkCashier(this._node.transform.position), this.accountPosData = this.parkCashier.getAccountPos(), this.accountPosData ? (this.accountPosData.isUse = !0, this.getNextPath(this.accountPosData.pos.transform.position), this.toNextMovePos(), this.lastWaitAnimName != ie.B_walk && (this.playAnim(ie.B_walk), this.showIdleUp(), this.lastWaitAnimName = ie.B_walk)) : this.lastWaitAnimName != ie.B_idleloop && (this.playAnim(ie.B_idleloop), this.showIdleUp(), this.lastWaitAnimName = ie.B_idleloop), E.Running
        }
        setLastAccountPosCanUse() {
            this.accountPosData && (this.accountPosData.isUse = !1)
        }
        toCashier() {
            return this.fsm.getState() != H.Account ? E.Success : 1 == this.buyGoodState ? E.Running : 2 == this.buyGoodState ? (this.parkCashier.setBox(!1), this.showCarryBox(!0), this.setLastAccountPosCanUse(), fs.getIns().outPos.transform.position.cloneTo(this.curMovePos), this.recordMoveForward(this.curMovePos), this.changeRot(this.curMovePos), this.getNextPath(this.curMovePos), this.toNextMovePos(), this.fsm.changeState(H.MoveToOut), l.getIns().umLevel("event_jiezhang", 1), E.Success) : this.hasGoods() ? this.parkCashier.hasPackingBox() ? (this.buyGoods(), this.buyGoodState = 1, this.showIdleUp(), E.Running) : (this.isShowTeach && (ut.getIns().gameView.showTeach(3, !0), this.isShowTeach = !1), ut.getIns().gameView.checkShowWanted(7), E.Running) : (fs.getIns().outPos.transform.position.cloneTo(this.curMovePos), this.recordMoveForward(this.curMovePos), this.changeRot(this.curMovePos), this.setLastAccountPosCanUse(), this.getNextPath(this.curMovePos), this.toNextMovePos(), void this.fsm.changeState(H.MoveToOut))
        }
        buyGoods() {
            let e = [];
            for (let t = 0; t < this.pickUpPosDatas.length; t++) this.pickUpPosDatas[t].item && (e.push(this.pickUpPosDatas[t].item), this.pickUpPosDatas[t].item = null);
            this.parkCashier.toSell(this.needDatas, e, () => {
                this.showTrolley(!1), this.buyGoodState = 2
            }, this._node)
        }
        hasGoods() {
            for (let e = 0; e < this.pickUpPosDatas.length; e++)
                if (this.pickUpPosDatas[e].item) return !0;
            return !1
        }
        moveOutDoor() {
            return this.fsm.getState() != H.MoveToOut ? E.Success : this.checkToTarget(this.curMovePos) ? this.roadIndex < this.roadPath.length - 1 ? (this.toNextMovePos(), E.Running) : (this.offectPlayerPos(this.curMovePos), this.fsm.changeState(H.ShoppingEnd), this.isDeath = !0, fs.getIns().customByOver(this), E.Success) : (this._node.transform.translate(this.moveVec, !1), E.Running)
        }
        getNextPath(e) {
            let t = this._node.transform.position.clone();
            t.y = fs.getIns().startPos.transform.position.y, this.roadPath = Oe.getIns().getPath(t, e), this.roadIndex = -1
        }
        toShopping() {
            this.buyIndex = -1, this.toNextStore()
        }
        toNextStore() {
            this.buyIndex++, this.standPos && (this.standPos[Ge.hasPKey] = !1), this.standPos = fs.getIns().getStoreRandomStandPos(this.buySort[this.buyIndex]), this.standPos && (this.standPos[Ge.hasPKey] = !0), this.getNextPath(this.standPos.transform.position), this.setBuyUIInfo(this.needDatas[this.buyIndex]), this.toNextMovePos(), this.fsm.changeState(H.MoveToShop)
        }
        setBuyUIInfo(e) {
            this.buytipsMgr.setIcon(a.itemIconPath.format(Cs.getItemIconPathByItemType(e.itenType))), this.buytipsMgr.setCount(e.curCount, e.needCount)
        }
        onUpdate() {
            if (ut.getIns().isGameStart() && !this.isDeath) {
                if (this.buytipsMgr) {
                    let e = fs.getIns().cameraMgr.worldPosToScreenPos(this._node.transform.position);
                    this.buytipsMgr.setPos(e.x, e.y - 170), this.toCashierItem.setPos(e.x, e.y - 100)
                }
                this.toRot(), this.itemTween.update(), this.treeFsm.Tick()
            }
        }
        onDestroy() {
            this.buytipsMgr && (this.buytipsMgr.owner.destroy(), this.buytipsMgr = null, this.toCashierItem.owner.destroy(), this.toCashierItem = null)
        }
    }! function (e) {
        e[e.MoveToShop = 1] = "MoveToShop", e[e.Shopping = 2] = "Shopping", e[e.MoveToAccount = 3] = "MoveToAccount", e[e.Account = 4] = "Account", e[e.MoveToOut = 5] = "MoveToOut", e[e.ShoppingEnd = 6] = "ShoppingEnd"
    }(H || (H = {}));
    class Lt {
        constructor() {
            this.itenType = W.None, this.needCount = 1, this.curCount = 0
        }
    }
    class At extends ve {
        constructor() {
            super(...arguments), this.isShowTeach = !1
        }
        init() {
            this.parkType = R.ParkShadingyuProcess, this.productItemType = Cs.getItemTypeByParkType(this.parkType), super.init()
        }
        createItem(e, t) {
            super.createItem(e, t), 1 == ut.getIns().getCurLevelId() && ut.getIns().gameView && (5 != ut.getIns().gameView.curWantedId || this.isShowTeach || (this.isShowTeach = !0, ut.getIns().gameView.checkShowWanted(6)))
        }
        getBuildId() {
            return 1001
        }
    }
    class _t extends Ye {
        init() {
            this.parkType = R.ParkShadingyu, this.sellType = W.Shadingyu, super.init()
        }
        getBuildId() {
            return 1005
        }
        pickDownItem(e) {
            super.pickDownItem(e), 6 == ut.getIns().gameView.curWantedId && (ut.getIns().gameView.closeWanted(6), fs.getIns().playerMgr.showTeachArray(null), this.showArrow(!1))
        }
    }
    class Nt extends p {
        getConfigTarget() {
            return new xt
        }
        static get ins() {
            return this._ins || (this._ins = new Nt), this._ins
        }
        getCusids(e, t) {
            if (0 == e.length) return console.log("顾客问题!"), 1;
            let s = [];
            for (let t = 0; t < e.length; t++) {
                let i = this.getDataById(e[t]).getBuyTypes();
                for (let e = 0; e < i.length; e++) s.indexOf(i[e]) < 0 && s.push(i[e])
            }
            let i = new Map;
            for (let e = 0; e < t.length; e++) {
                let s = t[e].customData.getBuyTypes();
                for (let e = 0; e < s.length; e++) {
                    let t = 0;
                    i.has(s[e]) && (t = i.get(s[e])), t++, i.set(s[e], t)
                }
            }
            let a = W.None,
                n = 0;
            i.forEach((e, t) => {
                e > n && (n = e, a = t)
            });
            let r = 1e3,
                o = W.None;
            for (let e = 0; e < s.length; e++) {
                let t = s[e];
                if (!i.has(t)) {
                    o = t;
                    break
                } {
                    let e = i.get(t);
                    e < r && (r = e, o = t)
                }
            }
            if (0 == o) return e[Cs.getIns().randomNum(0, e.length - 1)];
            let h = [];
            for (let t = 0; t < e.length; t++) {
                let s = this.getDataById(e[t]);
                s.getBuyTypes().indexOf(o) >= 0 && s.getBuyTypes().indexOf(a) < 0 && h.push(e[t])
            }
            return 0 == h.length ? e[Cs.getIns().randomNum(0, e.length - 1)] : h[Cs.getIns().randomNum(0, h.length - 1)]
        }
    }
    class xt extends g {
        constructor() {
            super(...arguments), this.buyGoodsMap = new Map, this.buyTypes = []
        }
        init(e) {
            super.init(e);
            let t, s = this.buyGoods.split(",");
            for (let e = 0; e < s.length; e++) t = s[e].split("&"), this.buyGoodsMap.set(parseInt(t[0]), parseInt(t[1])), this.buyTypes.push(parseInt(t[0]))
        }
        getBuyTypes() {
            return this.buyTypes
        }
        getNeedGoods() {
            return this.buyGoodsMap
        }
    }
    class Ut extends ve {
        init() {
            this.parkType = R.ParkDalongxiaProcess, this.productItemType = Cs.getItemTypeByParkType(this.parkType), super.init()
        }
        getBuildId() {
            return 1006
        }
    }
    class Mt extends ve {
        constructor() {
            super(...arguments), this.proYDis = 200
        }
        init() {
            this.showNeedUI = !0, this.parkType = R.ParkYuguangtouProcess, this.productItemType = Cs.getItemTypeByParkType(this.parkType), this.useItemType = W.Shadingyu, super.init()
        }
        getBuildId() {
            return 1007
        }
        setUseItem(e, t) {
            super.setUseItem(e, t), e.length > 0 && ut.getIns().gameView && ut.getIns().gameView.checkShowWanted(12)
        }
        createItem(e, t) {
            super.createItem(e, t), 1 == ut.getIns().getCurLevelId() && ut.getIns().gameView && 12 == ut.getIns().gameView.curWantedId && ut.getIns().gameView.checkShowWanted(15)
        }
    }
    class bt extends Ye {
        init() {
            this.parkType = R.ParkDalongxia, this.sellType = W.Dalongxia, super.init()
        }
        getBuildId() {
            return 1008
        }
    }
    class Vt extends Ye {
        init() {
            this.parkType = R.ParkHailuo, this.sellType = W.Hailuo, super.init()
        }
        getBuildId() {
            return 1009
        }
    }
    class Dt extends ve {
        init() {
            this.parkType = R.ParkHailuoProcess, this.productItemType = Cs.getItemTypeByParkType(this.parkType), super.init()
        }
        getBuildId() {
            return 1010
        }
    }
    class Ft extends Re {
        constructor() {
            super(...arguments), this.curShouTimes = 0, this.needShouTime = 3e3, this.curParkTime = 3e3
        }
        getWaterId() {
            return 6001
        }
        init() {
            super.init(), this.parkCashier = fs.getIns().getNotWaiterCashier(), this.parkCashier.setWaiter(this), this.needShouTime = this.waterConfig.showTime
        }
        initActionTree() {
            let e = new Fe,
                t = new De;
            t.SetNodeAction(this.moveToPark.bind(this));
            let s = new De;
            s.SetNodeAction(this.showYin.bind(this)), e.AddChildNode(t), e.AddChildNode(s), this.treeFsm.Init(e)
        }
        showYin() {
            return this.curShouTimes += Laya.timer.delta, this.curShouTimes >= this.needShouTime && !this.parkCashier.hasInBuy() && (this.curShouTimes = 0), this.curParkTime += Laya.timer.delta, this.curParkTime >= this.waterConfig.parkTime && (this.curParkTime = 0, this.parkCashier.setBox(!0)), E.Running
        }
        moveToPark() {
            if (!this.roadPath) {
                let e = this.parkCashier.getShouYinPos();
                this.getNextPath(e), this.toNextMovePos()
            }
            if (this.checkToTarget(this.curMovePos)) {
                this.offectPlayerPos(this.curMovePos);
                let e = new Laya.Vector3;
                return this.parkCashier.getShowYinNode().transform.getForward(e), this.lookForward(e), this.roadPath.length - 1 == this.roadIndex ? (this.roadPath = null, this.fsm.changeState(U.ShouYin), E.Success) : (this.toNextMovePos(), E.Running)
            }
            return this.doMove(), E.Running
        }
    }
    class Et extends Ye {
        init() {
            super.init(), this.trashPos = Cs.getIns().seekNodeByName(this.owner, "trashPos"), this.parkType = R.Trash
        }
        getStandPos() {
            return this.standPoss[Cs.getIns().randomNum(0, this.standPoss.length - 1)]
        }
        getBuildId() {
            return 1012
        }
        onDestroy() {
            super.onDestroy(), this.createUIMgr && (this.createUIMgr.owner.destroy(), this.createUIMgr = null)
        }
        onUpdate() {
            if (this.createUIMgr) {
                let e = fs.getIns().cameraMgr.worldPosToScreenPos(this.node.transform.position);
                this.createUIMgr.setPos(e.x, e.y - 80)
            }
            this.itemTween.update()
        }
        createUI() {
            if (!this.createUIMgr) {
                let e = Cs.getIns().createPrefab("prefab/item/buildInfoUI.json");
                ut.getIns().gameView.owner.addChild(e), this.createUIMgr = e.addComponent(ye), this.createUIMgr.init(), this.createUIMgr.setName("page/gameView/lajitong.png"), this.createUIMgr.setIcon("page/gameView/paperBagIcon.png")
            }
        }
        pickDownItem(e) {
            for (let t = 0; t < e.length; t++) {
                let s = e[t],
                    i = s.item.transform.position.clone();
                s.item.parent.removeChild(s.item), this.trashPos.addChild(s.item), s.item.transform.position = i, this.itemTween.toLocal(s.item, () => {
                    s.item.destroy(), this.checkHasGoods()
                }, 100 * t, 200)
            }
        }
    }
    class Ot extends Ye {
        init() {
            this.parkType = R.ParkKaoxietui, this.sellType = W.Kaoxietui, super.init()
        }
        getBuildId() {
            return 1013
        }
    }
    class Rt extends ve {
        init() {
            this.showNeedUI = !0, this.parkType = R.ParkKaoxietuiProcess, this.productItemType = Cs.getItemTypeByParkType(this.parkType), this.useItemType = W.Pangxie, super.init()
        }
        getBuildId() {
            return 1011
        }
    }
    class Wt extends Ye {
        init() {
            this.parkType = R.ParkYuguangtou, this.sellType = W.Yuguangtou, super.init()
        }
        getBuildId() {
            return 1014
        }
    }
    class Gt extends Ve {
        Init() {
            super.Init(), this.nodeType = O.Composite
        }
        Tick() {
            let e = this.EnterNode();
            return e == E.Failed ? (this.LeaveNode(), E.Failed) : 0 == this.treeNodes.length ? E.Success : this.curNodeIndex == this.treeNodes.length ? (this.LeaveNode(), E.Success) : (e = this.treeNodes[this.curNodeIndex].Tick()) == E.Running ? E.Running : e == E.Success ? (this.LeaveNode(), E.Success) : (this.curNodeIndex++, this.curNodeIndex == this.treeNodes.length ? (this.LeaveNode(), E.Failed) : E.Running)
        }
    }
    class Yt extends Re {
        constructor() {
            super(...arguments), this.hatIndex = 11
        }
        getWaterId() {
            return 6002
        }
        initActionTree() {
            let e = new Gt,
                t = new Fe;
            t.enterFun = (() => 0 == this.curPickItems.length ? E.Success : E.Failed);
            let s = new De;
            s.SetNodeAction(this.moveToProduct.bind(this));
            let i = new De;
            i.SetNodeAction(this.pickUpProduct.bind(this)), t.AddChildNode(s), t.AddChildNode(i);
            let a = new Fe;
            a.enterFun = (() => 0 == this.curPickItems.length ? E.Failed : E.Success);
            let n = new De;
            n.SetNodeAction(this.moveToPark.bind(this));
            let r = new De;
            r.SetNodeAction(this.pickDownProduct.bind(this));
            let o = new De;
            o.SetNodeAction(this.toTrashDown.bind(this)), a.AddChildNode(n), a.AddChildNode(r), a.AddChildNode(o), e.AddChildNode(t), e.AddChildNode(a), this.treeFsm.Init(e)
        }
        getRadomProduct() {
            let e = fs.getIns().getProducts(),
                t = [];
            for (let s = 0; s < e.length; s++) e[s].getIsCreate() && (e[s].productItemType == W.All && t.push(e[s]), e[s].getIsCreate() && fs.getIns().buildIsCreate(Cs.getParkByProductType(e[s].parkType)) && t.push(e[s]));
            if (0 == t.length) return null;
            if (t.sort((e, t) => e.hasProduct() && !t.hasProduct() ? -1 : !e.hasProduct() && t.hasProduct() ? 1 : e.useItemType == W.None && t.useItemType != W.None ? -1 : e.useItemType != W.None && t.useItemType == W.None ? 1 : Math.random() - .5), this.curProduct = t[0], this.curProduct.productItemType == W.All) {
                let e = this.curProduct.getProductItems(),
                    t = W.None;
                for (let s = 0; s < e.length; s++)
                    if (2 == e[s].itemState) {
                        t = e[s].itemType;
                        break
                    } if (t == W.None) this.curProduct = null;
                else {
                    let e = Cs.getParkTypeTypeByItemType(t);
                    fs.getIns().buildIsCreate(e) ? this.curSellPark = fs.getIns().getStoreByType(e) : this.curProduct = null
                }
            } else this.curSellPark = fs.getIns().getStoreByType(Cs.getParkByProductType(this.curProduct.parkType))
        }
        moveToProduct() {
            if (this.itemTween.hasTween()) return E.Running;
            if (!this.roadPath) {
                if (this.getRadomProduct(), !this.curProduct) return this.fsm.changeState(U.Idle), E.Running;
                this.fsm.changeState(U.MoveToProduct);
                let e = this.curProduct.getRandomStandPos();
                this.getNextPath(e), this.toNextMovePos()
            }
            return this.roadPath ? this.checkToTarget(this.curMovePos) ? (this.offectPlayerPos(this.curMovePos), this.roadPath.length - 1 == this.roadIndex ? (this.curProduct.enterStore(), this.roadPath = null, this.fsm.changeState(U.PickProduct), E.Success) : (this.toNextMovePos(), E.Running)) : (this.doMove(), E.Running) : E.Running
        }
        pickUpProduct() {
            return this.curProduct.getIsCreate() && this.curProduct.hasProduct() ? (this.checkPickUp(this.curProduct), this.curProduct.outStore(), this.fsm.changeState(U.MoveToPark), E.Success) : E.Running
        }
        moveToPark() {
            if (this.itemTween.hasTween()) return E.Running;
            if (!this.roadPath) {
                let e = this.curSellPark.getRandomStandPos().transform.position;
                this.getNextPath(e), this.toNextMovePos()
            }
            return this.roadPath ? this.checkToTarget(this.curMovePos) ? (this.offectPlayerPos(this.curMovePos), this.roadPath.length - 1 == this.roadIndex ? (this.roadPath = null, this.curSellPark.enterStore(), this.fsm.changeState(U.PickDwonProduct), E.Success) : (this.toNextMovePos(), E.Running)) : (this.doMove(), E.Running) : E.Running
        }
        pickDownProduct() {
            if (this.fsm.getState() != U.PickDwonProduct) return E.Success;
            if (!this.curSellPark.getIsCreate()) return E.Running;
            if (0 == this.curSellPark.getCurContain()) {
                this.curTrash = fs.getIns().getRadomTrash();
                let e = this.curTrash.getStandPos().transform.position.clone();
                return this.getNextPath(e), this.toNextMovePos(), this.curSellPark.outStore(), this.curProduct = null, this.fsm.changeState(U.ToTrach), E.Success
            }
            return this.itemTween.hasTween() ? E.Running : (this.checkPickDown(this.curSellPark), 0 == this.curPickItems.length ? (this.curSellPark.outStore(), this.fsm.changeState(U.MoveToProduct), this.curProduct = null, E.Success) : E.Running)
        }
        toTrashDown() {
            if (this.fsm.getState() != U.ToTrach) return E.Success;
            if (!this.roadPath) {
                this.curTrash = fs.getIns().getRadomTrash();
                let e = this.curTrash.getStandPos().transform.position.clone();
                return this.getNextPath(e), this.toNextMovePos(), E.Running
            }
            return this.checkToTarget(this.curMovePos) ? (this.offectPlayerPos(this.curMovePos), this.roadPath.length - 1 == this.roadIndex ? (this.roadPath = null, this.trashDown(this.curTrash), this.fsm.changeState(U.MoveToProduct), E.Success) : (this.toNextMovePos(), E.Running)) : (this.doMove(), E.Running)
        }
    }
    class Kt extends Yt {
        constructor() {
            super(...arguments), this.hatIndex = 2, this.useProduct = null
        }
        getWaterId() {
            return 6003
        }
        initActionTree() {
            let e = new Gt,
                t = new Fe;
            t.enterFun = (() => 0 == this.curPickItems.length ? E.Success : E.Failed);
            let s = new De;
            s.SetNodeAction(this.moveToProduct.bind(this));
            let i = new De;
            i.SetNodeAction(this.pickUpProduct.bind(this)), t.AddChildNode(s), t.AddChildNode(i);
            let a = new Fe;
            a.enterFun = (() => 0 == this.curPickItems.length ? E.Failed : E.Success);
            let n = new De;
            n.SetNodeAction(this.moveToPark.bind(this));
            let r = new De;
            r.SetNodeAction(this.pickDownProduct.bind(this));
            let o = new De;
            o.SetNodeAction(this.toTrashDown.bind(this)), a.AddChildNode(n), a.AddChildNode(r), a.AddChildNode(o), e.AddChildNode(t), e.AddChildNode(a), this.treeFsm.Init(e)
        }
        moveToPark() {
            if (this.itemTween.hasTween()) return E.Running;
            if (!this.roadPath) {
                if (!this.useProduct) return this.useProduct = this.getRadomUseProduct(this.curProduct.productItemType), E.Running;
                let e = this.useProduct.getRandomStandPos();
                this.getNextPath(e), this.toNextMovePos()
            }
            return this.roadPath ? this.checkToTarget(this.curMovePos) ? (this.offectPlayerPos(this.curMovePos), this.roadPath.length - 1 == this.roadIndex ? (this.useProduct.enterStore(), this.roadPath = null, this.fsm.changeState(U.PickDwonProduct), E.Success) : (this.toNextMovePos(), E.Running)) : (this.doMove(), E.Running) : E.Running
        }
        pickDownProduct() {
            console.log("999999999999999999999999");
            if (!this.useProduct.getIsCreate()) return E.Running;
            if (0 == this.useProduct.getCurFoodContainByIndex(0) && 0 == this.useProduct.getCurFoodContainByIndex(1)) {
                this.curTrash = fs.getIns().getRadomTrash();
                let e = this.curTrash.getStandPos().transform.position.clone();
                return this.getNextPath(e), this.toNextMovePos(), this.curProduct = null, this.fsm.changeState(U.ToTrach), E.Success
            }
            return this.checkPickDownFood(this.useProduct), 0 == this.curPickItems.length ? (this.fsm.changeState(U.MoveToProduct), this.curProduct = null, E.Success) : E.Running
        }
        useProductHasOpenAndContain(e) {
            let t = fs.getIns().getProducts();
            for (let s = 0; s < t.length; s++)
                if (t[s].getIsCreate())
                    if (t[s].useItemType == e) {
                        if (0 != t[s].getCurFoodContainByIndex(0)) return !0
                    } else if (t[s].secondUseItemType == e) {
                if (0 != t[s].getCurFoodContainByIndex(1)) return !0
            } else if (t[s].thirdUseItemType == e && 0 != t[s].getCurFoodContainByIndex(2)) return !0;
            return !1
        }
        getRadomUseProduct(e) {
            let t = [],
                s = fs.getIns().getProducts();
            for (let i = 0; i < s.length; i++)
                if (s[i].getIsCreate())
                    if (s[i].useItemType == e) 0 != s[i].getCurFoodContainByIndex(0) && t.push(s[i]);
                    else if (s[i].secondUseItemType == e) 0 != s[i].getCurFoodContainByIndex(1) && t.push(s[i]);
            else if (s[i].thirdUseItemType == e) 0 != s[i].getCurFoodContainByIndex(2) && t.push(s[i]);
            else if (s[i].useItemType == W.All) {
                Q.ins.getDataById(e).JGBuild == s[i].parkType && t.push(s[i])
            }
            return 0 == t.length ? null : (t.sort((e, t) => e.hasProduct() && !t.hasProduct() ? -1 : !e.hasProduct() && t.hasProduct() ? 1 : e.useItemType == W.None && t.useItemType != W.None ? -1 : e.useItemType != W.None && t.useItemType == W.None ? 1 : Math.random()), t[0])
        }
        getRadomProduct() {
            let e = fs.getIns().getProducts(),
                t = [];
            for (let s = 0; s < e.length; s++)
                if (e[s].getIsCreate() && e[s].hasProduct() && e[s].productItemType != W.All) {
                    let i = e[s].productItemType;
                    this.useProductHasOpenAndContain(i) && t.push(e[s])
                } if (0 == t.length) return null;
            this.curProduct = t[Cs.getIns().randomNum(0, t.length - 1)], this.useProduct = this.getRadomUseProduct(this.curProduct.productItemType)
        }
    }
    class Ht extends Ye {
        init() {
            this.parkType = R.ParkPangxie, this.sellType = W.Pangxie, super.init()
        }
        getBuildId() {
            return 1015
        }
    }
    class Xt extends ve {
        init() {
            this.parkType = R.ParkPangxieProcess, this.productItemType = Cs.getItemTypeByParkType(this.parkType), super.init()
        }
        getBuildId() {
            return 1016
        }
    }
    class zt extends Ye {
        init() {
            this.parkType = R.ParkShaokao, this.sellType = W.Shaokao, super.init()
        }
        getBuildId() {
            return 1019
        }
    }
    class qt extends Ye {
        init() {
            this.parkType = R.ParkXiangbaban, this.sellType = W.Xiangbaban, super.init()
        }
        getBuildId() {
            return 1021
        }
    }
    class jt extends Ye {
        init() {
            this.parkType = R.ParkXia, this.sellType = W.Xia, super.init()
        }
        getBuildId() {
            return 1023
        }
    }
    class Qt extends ve {
        init() {
            this.showNeedUI = !0, this.parkType = R.ParkShaokaoProcess, this.productItemType = Cs.getItemTypeByParkType(this.parkType), this.useItemType = W.Hailuo, super.init()
        }
        getBuildId() {
            return 1020
        }
    }
    class Jt extends ve {
        init() {
            this.parkType = R.ParkXiangbabanProcess, this.productItemType = Cs.getItemTypeByParkType(this.parkType), super.init()
        }
        getBuildId() {
            return 1022
        }
    }
    class Zt extends ve {
        init() {
            this.parkType = R.ParkXiaProcess, this.productItemType = Cs.getItemTypeByParkType(this.parkType), super.init()
        }
        getBuildId() {
            return 1024
        }
    }
    class $t extends ve {
        init() {
            this.parkType = R.ParkXiaozhangyuProcess, this.productItemType = Cs.getItemTypeByParkType(this.parkType), super.init()
        }
        getBuildId() {
            return 1026
        }
    }
    class es extends ve {
        init() {
            this.parkType = R.ParkYouyuProcess, this.productItemType = Cs.getItemTypeByParkType(this.parkType), super.init()
        }
        getBuildId() {
            return 1028
        }
    }
    class ts extends ve {
        constructor() {
            super(...arguments), this.proYDis = 200
        }
        init() {
            this.showNeedUI = !0, this.parkType = R.ParkShengyupianProcess, this.productItemType = Cs.getItemTypeByParkType(this.parkType), this.useItemType = W.Jinqiangyu, super.init()
        }
        getBuildId() {
            return 1030
        }
    }
    class ss extends Ye {
        init() {
            this.parkType = R.ParkXiaozhangyu, this.sellType = W.Xiaozhangyu, super.init()
        }
        getBuildId() {
            return 1025
        }
    }
    class is extends Ye {
        init() {
            this.parkType = R.ParkYouyu, this.sellType = W.Youyu, super.init()
        }
        getBuildId() {
            return 1027
        }
    }
    class as extends Ye {
        init() {
            this.parkType = R.ParkShengyupian, this.sellType = W.Shengyupian, super.init()
        }
        getBuildId() {
            return 1029
        }
    }
    class ns extends Kt {
        constructor() {
            super(...arguments), this.hatIndex = 7
        }
        getWaterId() {
            return 6004
        }
        getRadomProduct() {
            let e = fs.getIns().getProducts(),
                t = [];
            for (let s = 0; s < e.length; s++)
                if (e[s].getIsCreate() && e[s].hasProduct() && e[s].useItemType == W.None && e[s].productItemType != W.All) {
                    let i = e[s].productItemType;
                    this.useProductHasOpenAndContain(i) && t.push(e[s])
                } if (0 == t.length) return null;
            this.curProduct = t[Cs.getIns().randomNum(0, t.length - 1)], this.useProduct = this.getRadomUseProduct(this.curProduct.productItemType)
        }
    }
    class rs extends Laya.Script3D {
        init() {
            this.node = this.owner;
            let e = this.owner.getChildByName("Move");
            this.anim = e.getComponent(Laya.Animator);
            let t = [];
            Cs.getIns().getChildBySgin(this.owner, "col_", t);
            for (let e = 0; e < t.length; e++) {
                let s = t[e].getComponent(Laya.PhysicsCollider);
                s.collisionGroup = r.item, s.canCollideWith = r.player
            }
        }
        toNext() {
            this.anim.play("CarMove", 0, 0), Laya.timer.once(1500, this, () => {
                Y.UIMgr.ins.closeUI(Y.UIType.GameView);
                Y.UIMgr.ins.openUI(Y.UIType.LoadingView);

                ut.getIns().toGame(ut.getIns().getCurLevelId() + 1, 1, () => {
                    ut.getIns().gameStart(null, () => {
                        Y.UIMgr.ins.closeUI(Y.UIType.LoadingView)
                    })
                })
            })
        }
    }
    class os extends Ye {
        init() {
            this.parkType = R.ParkKaoyouyu, this.sellType = W.Kaoyouyu, super.init()
        }
        getBuildId() {
            return 1033
        }
    }
    class hs extends Ye {
        init() {
            this.parkType = R.ParkKaoshenghao, this.sellType = W.Kaoshenghao, super.init()
        }
        getBuildId() {
            return 1035
        }
    }
    class ls extends Ye {
        init() {
            this.parkType = R.ParkYuwang, this.sellType = W.Yuwang, super.init()
        }
        getBuildId() {
            return 1037
        }
    }
    class ds extends Ye {
        init() {
            this.parkType = R.ParkLongxiadacang, this.sellType = W.Longxiadacang, super.init()
        }
        getBuildId() {
            return 1039
        }
    }
    class cs extends ve {
        init() {
            this.showNeedUI = !0, this.parkType = R.ParkKaoyouyuProcess, this.productItemType = Cs.getItemTypeByParkType(this.parkType), this.useItemType = W.Youyu, super.init()
        }
        getBuildId() {
            return 1034
        }
    }
    class us extends ve {
        init() {
            this.showNeedUI = !0, this.parkType = R.ParkKaoshenghaoProcess, this.productItemType = Cs.getItemTypeByParkType(this.parkType), this.useItemType = W.Hailuo, super.init()
        }
        getBuildId() {
            return 1036
        }
    }
    class gs extends ve {
        init() {
            this.showNeedUI = !0, this.parkType = R.ParkYuwangProcess, this.productItemType = Cs.getItemTypeByParkType(this.parkType), this.useItemType = W.Xiaozhangyu, super.init()
        }
        getBuildId() {
            return 1038
        }
    }
    class ps extends ve {
        init() {
            this.showNeedUI = !0, this.parkType = R.ParkLongxiadacangProcess, this.productItemType = Cs.getItemTypeByParkType(this.parkType), this.useItemType = W.Dalongxia, super.init()
        }
        getBuildId() {
            return 1040
        }
    }
    class ms extends Ye {
        init() {
            this.parkType = R.ParkYoumengxia, this.sellType = W.Youmengxia, super.init()
        }
        getBuildId() {
            return 1041
        }
    }
    class Is extends ve {
        init() {
            this.showNeedUI = !0, this.parkType = R.ParkYoumengxiaProcess, this.productItemType = Cs.getItemTypeByParkType(this.parkType), this.useItemType = W.Xia, super.init()
        }
        getBuildId() {
            return 1042
        }
    }
    class ys extends ve {
        constructor() {
            super(...arguments), this.proYDis = 200
        }
        init() {
            this.showNeedUI = !0, this.parkType = this.getParkType(), this.productItemType = W.All, this.useItemType = W.All, super.init()
        }
        getParkType() {
            return R.ShaoKao
        }
        getBuildId() {
            return 2001
        }
        getDefaultItemIcon() {
            return "new2"
        }
        setUseItem(e, t) {
            if (0 != e.length)
                for (let s = 0; s < e.length; s++) {
                    let i = this.getFoodItemPosByIndex(t);
                    if (!i) return void console.log("没有位置!");
                    let a = e[s];
                    i.clone(a), i.setItemState(1), i.item = a.getItem(i.par), Cs.getIns().resetTransform(i.item), i.hideItem();
                    let n = a.item.transform.position.clone();
                    a.item.parent.removeChild(a.item), i.par.addChild(a.item);
                    let r = a.item.transform.localRotationEuler;
                    r.setValue(0, 0, 0), a.item.transform.localRotationEuler = r, a.item.transform.position = n, this.itemTween.toLocal(a.item, () => {
                        i.setItemState(2), a.item.destroy(), this.setUseItemUI(), this.checkAnimPlay()
                    }, 100 * s)
                }
        }
        createItem(e, t) {
            if (t == W.None) return;
            let s = 0,
                i = this.getMaxUseCount();
            for (let a = 0; a < this.productItems.length && !(a >= i) && (0 != this.productItems[a].itemState || (this.productItems[a].desItem(), this.productItems[a].createItem(t), this.productItems[a].setItemState(2), ++s != e)); a++);
        }
    }
    class ws extends ys {
        getParkType() {
            return R.ChaoCai
        }
        getBuildId() {
            return 2002
        }
        getDefaultItemIcon() {
            return "new"
        }
    }
    class fs extends Laya.Script3D {
        constructor() {
            super(...arguments), this.isLoadPlayer = !1, this.configMgr = null, this.light = null, this.isOtherLoadOver = !1, this.recycleMgr = new pt, this.recycleNode = null, this.loadingAllCount = 2, this.loadingCurCount = 0, this.gameView = null, this.playerMgr = null, this.curPlayerId = -1, this.eveMgr = null, this.model_pos = null, this.showModels = new Object, this.curModel = null, this.curModelPath = null, this.inLoadModelPath = null, this.endMat = null, this.isLoadTex = !1, this.level_limit = [], this.level_plane = [], this.trashParks = [], this.stores = [], this.parkCashiers = [], this.tempV1 = new Laya.Vector3, this.products = [], this.moneyNodes = [], this.startPos = null, this.enterPos = [], this.outPos = null, this.createMgrs = [], this.customMats = [], this.waiterCreateMgrs = [], this.isShowCameraMove = !0, this.buffMgrs = [], this.buffPoss = [], this.isRandomBuff = !1, this.waiterUpdateMgrs = [], this.maxCusomCount = 8, this.curCustomCount = 0, this.cusIds = [], this.createSpcCus = !1, this.teachStart = !1, this.customMgrs = []
        }
        getRadomTrash() {
            return this.trashParks[Cs.getIns().randomNum(0, this.trashParks.length - 1)]
        }
        static getIns() {
            return this.instance || console.error("地图类不存在!"), this.instance
        }
        static setIns(e) {
            e instanceof fs && (this.instance = e, xs.getIns().isWINPlatform() && (window.G_MapMgr = e))
        }
        getNearParkCashier(e) {
            let t, s = 1e8;
            for (let i = 0; i < this.parkCashiers.length; i++) {
                if (!this.parkCashiers[i].getIsCreate()) continue;
                Laya.Vector3.subtract(this.parkCashiers[i].node.transform.position, e, this.tempV1), this.tempV1.y = 0;
                let a = Laya.Vector3.scalarLengthSquared(this.tempV1);
                a < s && (t = this.parkCashiers[i], s = a)
            }
            return t
        }
        getNotWaiterCashier() {
            for (let e = 0; e < this.parkCashiers.length; e++)
                if (this.parkCashiers[e].getIsCreate() && !this.parkCashiers[e].getWaiter()) return this.parkCashiers[e];
            return null
        }
        getNotWorkProductByType(e) {
            for (let t = 0; t < this.products.length; t++)
                if (this.products[t].getIsCreate() && e == this.products[t].parkType && !this.products[t].getWork()) return this.products[t];
            return null
        }
        initStore() {
            let e = [];
            Cs.getIns().getChildBySgin(this.owner, "m_Store_", e);
            for (let t = 0; t < e.length; t++) {
                let s = e[t],
                    i = s.name.split("_"),
                    a = parseInt(i[2]),
                    n = null;
                a == R.ParkCashier ? (n = s.addComponent(Pt), this.parkCashiers.push(n)) : a == R.ParkJinqiangyu ? n = s.addComponent(vt) : a == R.ParkShadingyu ? n = s.addComponent(_t) : a == R.ParkDalongxia ? n = s.addComponent(bt) : a == R.ParkHailuo ? n = s.addComponent(Vt) : a == R.Trash ? (n = s.addComponent(Et), this.trashParks.push(n)) : a == R.ParkKaoxietui ? n = s.addComponent(Ot) : a == R.ParkYuguangtou ? n = s.addComponent(Wt) : a == R.ParkPangxie ? n = s.addComponent(Ht) : a == R.ParkShaokao ? n = s.addComponent(zt) : a == R.ParkXiangbaban ? n = s.addComponent(qt) : a == R.ParkXia ? n = s.addComponent(jt) : a == R.ParkXiaozhangyu ? n = s.addComponent(ss) : a == R.ParkYouyu ? n = s.addComponent(is) : a == R.ParkShengyupian ? n = s.addComponent(as) : a == R.ParkKaoyouyu ? n = s.addComponent(os) : a == R.ParkKaoshenghao ? n = s.addComponent(hs) : a == R.ParkYuwang ? n = s.addComponent(ls) : a == R.ParkLongxiadacang ? n = s.addComponent(ds) : a == R.ParkYoumengxia && (n = s.addComponent(ms)), n && (n.init(), this.stores.push(n))
            }
            let t = new Map;
            for (let e = 0; e < this.stores.length; e++)
                if (this.stores[e].getParkType() != R.Trash)
                    if (t.has(this.stores[e].getParkType())) {
                        let s = t.get(this.stores[e].getParkType());
                        ks.getIns().getBuildCountByType(this.stores[e].getParkType(), ut.getIns().getCurLevelId()) > s ? (this.stores[e].openStore(), t.delete(this.stores[e].getParkType()), t.set(this.stores[e].getParkType(), s + 1), this.removeCreateBuild(this.stores[e].getParkType())) : this.stores[e].closeStore()
                    } else ks.getIns().getBuildCountByType(this.stores[e].getParkType(), ut.getIns().getCurLevelId()) > 0 ? (this.stores[e].openStore(), t.set(this.stores[e].getParkType(), 1), this.removeCreateBuild(this.stores[e].getParkType())) : this.stores[e].closeStore();
            else this.stores[e].openStore()
        }
        getStoreByType(e) {
            for (let t = 0; t < this.stores.length; t++)
                if (this.stores[t].getParkType() == e) return this.stores[t];
            return null
        }
        buildIsCreate(e) {
            return this.getBuildCount(e) >= 1
        }
        getBuildCount(e) {
            return ks.getIns().getBuildCountByType(e, ut.getIns().getCurLevelId())
        }
        initProduct() {
            let e = [];
            Cs.getIns().getChildBySgin(this.owner, "m_product_", e);
            for (let t = 0; t < e.length; t++) {
                let s = e[t],
                    i = s.name.split("_"),
                    a = parseInt(i[2]),
                    n = null;
                a == R.ParkJinqiangyuProcess ? n = s.addComponent(Tt) : a == R.ParkShadingyuProcess ? n = s.addComponent(At) : a == R.ParkDalongxiaProcess ? n = s.addComponent(Ut) : a == R.ParkYuguangtouProcess ? n = s.addComponent(Mt) : a == R.ParkHailuoProcess ? n = s.addComponent(Dt) : a == R.ParkKaoxietuiProcess ? n = s.addComponent(Rt) : a == R.ParkPangxieProcess ? n = s.addComponent(Xt) : a == R.ParkShaokaoProcess ? n = s.addComponent(Qt) : a == R.ParkXiangbabanProcess ? n = s.addComponent(Jt) : a == R.ParkXiaProcess ? n = s.addComponent(Zt) : a == R.ParkXiaozhangyuProcess ? n = s.addComponent($t) : a == R.ParkYouyuProcess ? n = s.addComponent(es) : a == R.ParkShengyupianProcess ? n = s.addComponent(ts) : a == R.ParkKaoyouyuProcess ? n = s.addComponent(cs) : a == R.ParkKaoshenghaoProcess ? n = s.addComponent(us) : a == R.ParkYuwangProcess ? n = s.addComponent(gs) : a == R.ParkLongxiadacangProcess ? n = s.addComponent(ps) : a == R.ParkYoumengxiaProcess ? n = s.addComponent(Is) : a == R.ShaoKao ? n = s.addComponent(ys) : a == R.ChaoCai && (n = s.addComponent(ws)), n && (n.init(), this.products.push(n))
            }
            let t = new Map;
            for (let e = 0; e < this.products.length; e++)
                if (t.has(this.products[e].parkType)) {
                    let s = t.get(this.products[e].parkType);
                    ks.getIns().getBuildCountByType(this.products[e].parkType, ut.getIns().getCurLevelId()) > s ? (this.products[e].openStore(), t.delete(this.products[e].parkType), t.set(this.products[e].parkType, s + 1), this.removeCreateBuild(this.products[e].parkType)) : this.products[e].closeStore()
                } else ks.getIns().getBuildCountByType(this.products[e].parkType, ut.getIns().getCurLevelId()) > 0 ? (this.products[e].openStore(), t.set(this.products[e].parkType, 1), this.removeCreateBuild(this.products[e].parkType)) : this.products[e].closeStore()
        }
        initMoney() {
            let e = this.owner.getChildByName("money");
            Cs.getIns().getChildBySgin(e, "m_money", this.moneyNodes);
            for (let e = 0; e < this.moneyNodes.length; e++) {
                let t = this.moneyNodes[e].getComponent(Laya.PhysicsCollider);
                t.canCollideWith = r.player, t.collisionGroup = r.money, ks.getIns().hasNewPlayer() && fs.isShowMoney || (this.moneyNodes[e].active = !1)
            }
            fs.isShowMoney = !1
        }
        onDestroy() {
            fs.instance = null, e.getIns().removeEventListerner(i.PLAYERCARRYUP, this.playerUpCallBack, this)
        }
        toStart(e) {
            this.loadMap(ut.getIns().getCurLevelData(), () => {
                Cs.getIns().handlerFun(e)
            }, ks.getIns().getSkinId())
        }
        init() {
            fs.setIns(this), this.createList = Ge.getCreateList(), this.createList1 = Ge.getCreateList1(), this.outPos = Cs.getIns().seekNodeByName(this.owner, "outPos");
            let t = Cs.getIns().seekNodeByName(this.owner, "m_door");
            Cs.getIns().getChildBySgin(t, "enterPos_", this.enterPos), this.light = Cs.getIns().seekNodeByName(this.owner, "light"), this.startPos = Cs.getIns().seekNodeByName(this.owner, "startPos");
            let s = [];
            Cs.getIns().getChildInParBySgin(this.owner, "m_cretaeBuildRang", s);
            for (let e = 0; e < s.length; e++) {
                let t = s[e].addComponent(pe);
                t.init(), t.hide(), this.createMgrs.push(t)
            }
            this.initWall(), this.initCamera(), this.initStore(), this.initProduct(), this.initMoney(), this.initWaiterUpPoint(), this.initWaiterCreatePoint(), this.checkWaiterCreatePoint(), this.initBuff(), this.initVideoBuff(), this.openWaiterUpdate();
            let a = this.owner.getChildByName("Scene").getChildByName("qiang"),
                n = a.getChildByName("limit");
            if (n) {
                Cs.getIns().getChildBySgin(n, "level_limit_", this.level_limit);
                for (let e = 0; e < this.level_limit.length; e++) {
                    let t = this.level_limit[e].getComponent(Laya.PhysicsCollider);
                    t.canCollideWith = r.player, t.collisionGroup = r.item
                }
            }
            Cs.getIns().getChildBySgin(a, "m_plane_", this.level_plane), this.checkLimitWall();
            let o = [];
            Cs.getIns().getChildBySgin(this.owner.getChildByName("Scene"), "m_ATM", o);
            for (let e = 0; e < o.length; e++) {
                o[e].addComponent(Ne).init()
            }
            this.initLight(this.light), this.model_pos = Cs.getIns().seekNodeByName(this.owner, "model_pos");
            let h = new Laya.Sprite3D("recycleNode");
            this.owner.addChild(h), Cs.getIns().resetTransform(h), this.recycleNode = h;
            let l = this.owner.getChildByName("NextRang");
            if (l) {
                let e = l.addComponent(we);
                e.init(), e.setType(D.Next), this.nextRang = e, this.checkNextRangOpen()
            }
            let d = this.owner.getChildByName("LastRang");
            if (d) {
                let e = d.addComponent(we);
                e.init(), e.setType(D.Last)
            }
            e.getIns().addEventListerner(i.PLAYERCARRYUP, this.playerUpCallBack, this);
            let c = this.owner.getChildByName("m_car");
            if (c) {
                let e = c.addComponent(rs);
                e.init(), this.carMgr = e
            }
            this.checkWaiterCreatePointByType()
        }
        initVideoBuff() {
            let e = Cs.getIns().seekNodeByName(this.owner, "VideoBuff");
            if (e) {
                let t = [];
                for (let s = 0; s < e.numChildren; s++) {
                    let i = e.getChildAt(s).addComponent(ue);
                    i.init(), i.closePoint(), t.push(i)
                }
                let s = 0;
                s = (s = 1 == ut.getIns().getCurLevelId() ? Ke.getIns().getMistakeData().Store1BuffCount : 2 == ut.getIns().getCurLevelId() ? Ke.getIns().getMistakeData().Store2BuffCount : Ke.getIns().getMistakeData().Store3BuffCount) > t.length ? t.length : s;
                let i = Cs.getIns().getRandomArrayElements(t, s);
                for (let e = 0; e < i.length; e++) i[e].openPoint()
            }
        }
        checkNextRangOpen() {
            let e = ut.getIns().getCurLevelId() + 1;
            ks.getIns().markIsOpen(e) ? (this.nextRang.openPark(), 2 == e ? this.removeCreateBuild(R.Park2) : 3 == e && this.removeCreateBuild(R.Park3)) : this.nextRang.closePark()
        }
        loadCustomMats(e) {
            let t = 0;
            this.customMats.splice(0, this.customMats.length);
            let s = s => {
                t++, this.customMats.push(s), 6 == t && e && e()
            };
            for (let e = 1; e <= 6; e++) Laya.Material.load("sub/online/Sprites/Conventional/Assets/Resource/Animator/Materials/custom_mat_{0}.lmat".format(e), Laya.Handler.create(this, e => {
                s(e)
            }))
        }
        getRadomMat() {
            return 0 == this.customMats.length ? null : this.customMats[Cs.getIns().randomNum(0, this.customMats.length - 1)]
        }
        getPlaneLimitWallByPlaneType(e) {
            if (0 != this.level_limit.length) return e == R.Plane2 ? this.level_limit[0] : e == R.Plane3 ? this.level_limit[1] : null
        }
        playerUpCallBack() {
            this.showNextCreate(null, 1, !0), this.showNextCreate(null, 2, !0)
        }
        checkLimitWall() {
            for (let e = 0; e < this.level_limit.length; e++)
                if (0 == e) {
                    let t = ks.getIns().getBuildCountByType(R.Plane2, ut.getIns().getCurLevelId()) > 0;
                    t && this.removeCreateBuild(R.Plane2), this.level_limit[e].active = !t, this.level_plane[e].active = t
                } else if (1 == e) {
                let t = ks.getIns().getBuildCountByType(R.Plane3, ut.getIns().getCurLevelId()) > 0;
                this.level_limit[e].active = !t, this.level_plane[e].active = t, t && this.removeCreateBuild(R.Plane3)
            }
        }
        openPlane(e) {
            0 != this.level_limit.length && (e == R.Plane2 ? (this.level_limit[0].active = !1, this.level_plane[0].active = !0) : e == R.Plane3 && (this.level_limit[1].active = !1, this.level_plane[1].active = !0))
        }
        initWall() {
            let e = [],
                t = Cs.getIns().seekNodeByName(this.owner, "qiang");
            Cs.getIns().getChildBySgin(t, "wall_", e);
            for (let t = 0; t < e.length; t++) {
                let s = e[t].getComponent(Laya.PhysicsCollider);
                s.canCollideWith = r.player, s.collisionGroup = r.item
            }
        }
        initWaiterCreatePoint() {
            let e = Cs.getIns().seekNodeByName(this.owner, "WaiterCreate");
            for (let t = 0; t < e.numChildren; t++) {
                let s = e.getChildAt(t),
                    i = s.addComponent(ke),
                    a = fe.ins.getDataById(parseInt(s.name));
                i.init(a), this.waiterCreateMgrs.push(i)
            }
        }
        getWaiterCreatePoint(e) {
            for (let t = 0; t < this.waiterCreateMgrs.length; t++)
                if (this.waiterCreateMgrs[t].getWaiterData().id == e) return this.waiterCreateMgrs[t];
            return null
        }
        createCallBack(t, s) {
            let a = !0;
            if (e.getIns().dispatchEvent(i.MISCLICKBANNER), s != R.None && (s == R.ParkDalongxiaProcess ? this.checkRandomBuff() : s == R.ParkCashier ? ut.getIns().gameView.checkShowWanted(3) : s == R.ParkShadingyu ? (ut.getIns().gameView.checkShowWanted(4), this.createCustomById()) : s == R.ParkShadingyuProcess ? ut.getIns().gameView.checkShowWanted(5) : s == R.ParkYuguangtou ? ut.getIns().gameView.checkShowWanted(10) : s == R.ParkYuguangtouProcess && (ut.getIns().gameView.checkShowWanted(11), this.checkBuff(), this.createCustomById()), this.addCusType(), this.checkWaiterCreatePointByType(), this.openWaiterUpdate(), 1 == ut.getIns().getCurLevelId()))
                if (s == R.ParkShadingyuProcess) {
                    ut.getIns().gameView.showTeach(2, !0);
                    let e = this.getProductByType(s);
                    e && (e.showArrow(!0), this.isShowCameraMove = !1)
                } else if (s == R.ParkYuguangtouProcess) {
                ut.getIns().gameView.showTeach(4, !0), a = !1, this.getProductByType(s) && (this.isShowCameraMove = !1)
            }
            a ? (this.showNextCreate(t, 1, !0), this.showNextCreate(null, 2, !0)) : this.recycleCreateMgr(t), ut.getIns().gameView && ut.getIns().gameView.checkCai()
        }
        checkWaiterCreatePointByType() {
            for (let e = 0; e < this.waiterCreateMgrs.length; e++) this.checkWaiterOpen(this.waiterCreateMgrs[e])
        }
        checkWaiterOpen(e) {
            0 != this.products.length && 0 != this.stores.length && Ge.checkWaiterOpen(e)
        }
        useCusCountBuff(e) {
            this.maxCusomCount = e ? 12 : 8
        }
        checkWaiterCreatePoint() {
            for (let e = 0; e < this.waiterCreateMgrs.length; e++) {
                let t = this.waiterCreateMgrs[e].getWaiterData(),
                    s = ks.getIns().getWaiterData(t.id, ut.getIns().getCurLevelId());
                if (s) {
                    let t = s.waiterCount;
                    if (6001 == s.waiterId) {
                        let e = ks.getIns().getBuildCountByType(R.ParkCashier, ut.getIns().getCurLevelId());
                        t = t > e ? e : t, s.waiterCount = t, ks.getIns().save()
                    }
                    for (let s = 0; s < t; s++) this.waiterCreateMgrs[e].loadWaiter();
                    this.waiterCreateMgrs[e].closePoint()
                }
                this.checkWaiterOpen(this.waiterCreateMgrs[e])
            }
        }
        initBuff() {
            let e = Cs.getIns().seekNodeByName(this.owner, "Buff_Pos");
            Cs.getIns().getChildBySgin(e, "b", this.buffPoss);
            let t = Cs.getIns().seekNodeByName(this.owner, "Buff");
            for (let e = 0; e < t.numChildren; e++) {
                let s = t.getChildAt(e).addComponent(ue);
                s.init(), s.closePoint(), this.buffMgrs.push(s)
            }
            this.checkBuff(), this.checkRandomBuff()
        }
        checkRandomBuff() {
            this.isRandomBuff || ks.getIns().getBuildCountByType(R.ParkDalongxiaProcess, ut.getIns().getCurLevelId()) > 0 && this.radomBuff()
        }
        radomBuff() {
            this.isRandomBuff = !0;
            let e = Cs.getIns().randomNum(0, this.buffMgrs.length - 2),
                t = Cs.getIns().randomNum(0, this.buffPoss.length - 1);
            for (let e = 0; e < this.buffMgrs.length; e++) this.buffMgrs[e].getBuffType() != V.Carry && this.buffMgrs[e].closePoint();
            let s = this.buffMgrs[e],
                i = s.node.transform.position,
                a = this.buffPoss[t].transform.position;
            i.x = a.x, i.z = a.z, s.node.transform.position = i, s.openPoint(), Laya.timer.once(6e4, this, this.radomBuff)
        }
        checkBuff() {
            for (let e = 0; e < this.buffMgrs.length; e++) {
                let t = this.buffMgrs[e];
                Ge.checkBuff(t)
            }
        }
        initWaiterUpPoint() {
            let e = Cs.getIns().seekNodeByName(this.owner, "WaiterUpdate");
            for (let t = 0; t < e.numChildren; t++) {
                let s = e.getChildAt(t).addComponent(_e);
                s.init(), this.waiterUpdateMgrs.push(s), s.closePoint()
            }
        }
        openWaiterUpdate() {
            for (let e = 0; e < this.waiterUpdateMgrs.length; e++) {
                let t = this.waiterUpdateMgrs[e],
                    s = t.getWaiterData(),
                    i = ks.getIns().getWaiterData(t.getWaiterData().id, ut.getIns().getCurLevelId());
                if (i && Ge.checkWaiterUpOpen(s)) {
                    Be.ins.isMaxLv(i) ? this.waiterUpdateMgrs[e].closePoint() : this.waiterUpdateMgrs[e].openPoint()
                } else this.waiterUpdateMgrs[e].closePoint()
            }
        }
        getStoreRandomStandPos(e) {
            return this.getStoreByType(e).getRandomStandPos()
        }
        getProductRandomStandPos(e) {
            return this.getProductIsCreateAndHasProductByType(e).getRandomStandPos()
        }
        getProducts() {
            return this.products
        }
        getProductIsCreateAndHasProductByType(e) {
            let t;
            for (let s = 0; s < this.products.length; s++)
                if (this.products[s].parkType == e && this.products[s].getIsCreate() && (t = this.products[s]).hasProduct()) return t;
            return t
        }
        getProductByType(e) {
            for (let t = 0; t < this.products.length; t++)
                if (this.products[t].parkType == e) return this.products[t];
            return null
        }
        hasStoreByType(e) {
            for (let t = 0; t < this.stores.length; t++)
                if (this.stores[t].getParkType() == e) return !0;
            return !1
        }
        checkCreateCustom() {
            this.curCustomCount >= this.maxCusomCount || this.hasStoreByType(R.ParkCashier) && (this.isCreateSpcCus() || 0 != this.cusIds.length && (this.curCustomCount++, this.loadCustomById(Nt.ins.getCusids(this.cusIds, this.customMgrs), null)))
        }
        getCusIds() {
            return this.buildIsCreate(R.ParkJinqiangyuProcess) ? [] : this.buildIsCreate(R.ParkYuguangtou) ? [1, 129] : this.buildIsCreate(R.ParkShadingyu) ? [1] : []
        }
        isCreateSpcCus() {
            return 1 == ut.getIns().getCurLevelId() && (this.createSpcCus ? !this.createSpcCus : (this.createSpcCus = this.buildIsCreate(R.ParkJinqiangyuProcess), !this.createSpcCus))
        }
        createCustomById() {
            let e = this.getCusIds();
            for (let t = 0; t < e.length; t++) {
                if (this.curCustomCount >= this.maxCusomCount) return;
                this.curCustomCount++, this.loadCustomById(e[t], null)
            }
        }
        addCusType() {
            let e = Nt.ins.getAllDatas();
            for (let t = 0; t < e.length; t++) this.cusIds.indexOf(e[t].id) >= 0 || this.storeHasOpen(e[t].getBuyTypes()) && this.cusIds.push(e[t].id)
        }
        storeHasOpen(e) {
            for (let t = 0; t < e.length; t++) {
                let s = this.getStoreByType(Cs.getParkTypeTypeByItemType(e[t])),
                    i = this.getProductByType(Cs.getProductTypeByItemType(e[t]));
                if (!s || !i) return !1;
                if (!s.getIsCreate() || !i.getIsCreate()) return !1
            }
            return !0
        }
        customByOver(e) {
            let t = this.customMgrs.indexOf(e);
            t >= 0 && this.customMgrs.splice(t, 1), this.curCustomCount--, console.log("顾客移除!", this.curCustomCount, this.customMgrs.length), e.owner.destroy()
        }
        getCreateMgr() {
            for (let e = 0; e < this.createMgrs.length; e++)
                if (!this.createMgrs[e].getHasShow()) return this.createMgrs[e];
            return null
        }
        recycleCreateMgr(e) {
            e && e.hide()
        }
        showNextCreate(e, t, s) {
            this.recycleCreateMgr(e);
            let i = this.createList;
            if (1 == t) i = this.createList;
            else {
                if (2 != t) return void console.error("没有创建的线路");
                i = this.createList1
            }
            if (0 == i.length) return void console.log("没有创建的list");
            let a = i[0];
            if (!this.checkCreateBuild(a, t)) return void console.log("未达条件:", a);
            let n = this.getCreateMgr();
            if (n)
                if (console.log("当前创建:", a), i.splice(0, 1), a != R.Plane2 && a != R.Plane3)
                    if (a != R.Park2 && a != R.Park3) {
                        for (let e = 0; e < this.stores.length; e++)
                            if (this.stores[e].getParkType() == a && !this.stores[e].getIsCreate()) {
                                n.cretaePark(this.stores[e], t, s);
                                break
                            } for (let e = 0; e < this.products.length; e++)
                            if (this.products[e].parkType == a && !this.products[e].getIsCreate()) {
                                n.createProduct(this.products[e], t, s);
                                break
                            }
                    } else n.createStore(a, t);
            else n.createPlane(a, t);
            else console.error("没有创建对象")
        }
        checkCreateBuild(e, t) {
            return this.hasInCreateBuildByIndex(t) ? (console.log("in create:", e), !1) : Ge.checkCreateBuild(e, t)
        }
        hasInCreateBuildByIndex(e) {
            for (let t = 0; t < this.createMgrs.length; t++)
                if (this.createMgrs[t].getCreateIndex() == e) return this.createMgrs[t].getHasShow();
            return !1
        }
        getInCreateBuildType(e) {
            for (let t = 0; t < this.createMgrs.length; t++)
                if (this.createMgrs[t].getCreateIndex() == e && this.createMgrs[t].getHasShow()) return this.createMgrs[t].getParkType();
            return R.None
        }
        removeCreateBuild(e) {
            let t = this.createList.indexOf(e);
            t >= 0 ? this.createList.splice(t, 1) : (t = this.createList1.indexOf(e)) >= 0 && this.createList1.splice(t, 1)
        }
        initLight(e) {
            e.shadowMode = Laya.ShadowMode.None
        }
        initCamera() {
            let e = Cs.getIns().seekNodeByName(this.owner, "gameCamera").addComponent(gt);
            this.cameraMgr = e, e.init()
        }
        setGameView(e) {
            e instanceof wt && (this.gameView = e)
        }
        isReady() {
            return this.isLoadPlayer && this.isOtherLoadOver
        }
        initMap(e) {
            this.init(), Cs.getIns().handlerFun(e)
        }
        loadMap(e, t, s) {
            this.loadingCurCount = 0, this.loadingCurCount++, this.cleanScenes(), this.loadingCurCount++;
            let i = new Promise(e => {
                    this.loadMainPlayer(s, () => {
                        this.loadingCurCount++, e(null)
                    })
                }),
                a = new Promise(e => {
                    this.loadCustomMats(() => {
                        e(null)
                    })
                }),
                n = new Promise(t => {
                    Oe.getIns().loadMap(e.config, () => {
                        Oe.getIns().createNavMeshGroup(this.startPos.transform.position), this.loadingCurCount++, t(null)
                    })
                });
            Promise.all([i, a, n]).then(() => {
                this.loadingCurCount = this.loadingAllCount, Cs.getIns().handlerFun(t)
            })
        }
        loadEve(e, t) {
            if (this.eveMgr) {
                if (this.eveMgr.floorId == e) return void Cs.getIns().handlerFun(t);
                this.eveMgr.owner.destroy(), this.eveMgr = null
            }
            let s = a.resPath.format("Eve" + e);
            Z.getIns().preload([s], () => {
                if (!this || !this.owner || this.owner.destroyed) return;
                let i = Z.getIns().getNode(s);
                this.owner.addChild(i), Cs.getIns().resetTransform(i);
                let a = i.addComponent(mt);
                a.init(), a.floorId = e, this.eveMgr = a, Cs.getIns().handlerFun(t)
            })
        }
        loadMainPlayer(e, t) {
            this.isLoadPlayer = !1;
            let s = y.ins.getDataById(e),
                i = a.resPath.format(s.model);
            Z.getIns().preload([i], () => {
                let e = Z.getIns().getNode(i);
                this.owner.addChild(e);
                let a = e.addComponent(xe);
                a.setPlayerData(s), a.init();
                let n = this.startPos;
                if (a.setStartPos(n.transform.position, n.transform.rotationEuler), a.enablePeople(), this.playerMgr = a, this.isLoadPlayer = !0, xs.getIns().isWINPlatform()) {
                    let t = e.addComponent(ft);
                    t.init(), t.setActor(a), t.resgistLis()
                }
                Cs.getIns().handlerFun(t)
            })
        }
        loadCustomById(e, t) {
            let s = Nt.ins.getDataById(e),
                i = a.resPath.format(s.model);
            Z.getIns().preload([i], () => {
                let e = Z.getIns().getNode(i);
                this.owner.addChild(e);
                let a = e.addComponent(Bt);
                a.setCustomData(s), a.init();
                let n = this.getEnterPos();
                a.setStartPos(n.transform.position, n.transform.rotationEuler), a.enablePeople(), a.toShopping(), this.customMgrs.push(a), Cs.getIns().handlerFun(t)
            })
        }
        getEnterPos() {
            return this.enterPos[Cs.getIns().randomNum(0, this.enterPos.length - 1)]
        }
        loadWaiter(e, t, s, i) {
            let n = y.ins.getDataById(1),
                r = a.resPath.format(n.model);
            Z.getIns().preload([r], () => {
                let a = Z.getIns().getNode(r);
                this.owner.addChild(a);
                let n = null;
                if (6002 == e ? n = a.addComponent(Yt) : 6003 == e ? n = a.addComponent(Kt) : 6001 == e ? n = a.addComponent(Ft) : 6004 == e ? n = a.addComponent(ns) : e >= 6005 && e <= 6014 && this.getNotWorkProductByType(i.workParkType) && (n = a.addComponent(We)).setWorkId(e), n) {
                    n.init();
                    let e = t;
                    n.setStartPos(e.transform.position, e.transform.rotationEuler), n.enablePeople(), n.startWaiter(), Cs.getIns().handlerFun(s)
                } else console.error("问题服务员", e, i)
            })
        }
        changePlayer(e, t, s) {
            return this.curPlayerId == e ? (console.error("同样的玩家"), void Cs.getIns().handlerFun(t)) : this.isLoadPlayer ? (this.clearPlayer(), void this.loadMainPlayer(e, t)) : (xs.getIns().showToast("Changeing"), void Cs.getIns().handlerFun(t))
        }
        loadLevelEnd() {
            console.log("关卡加载完成"), this.showNextCreate(null, 1, !1), this.showNextCreate(null, 2, !1), this.addCusType(), Laya.timer.loop(5e3, this, this.checkCreateCustom), this.isCreateSpcCus() && this.createCustomById(), e.getIns().dispatchEvent(i.LOADMAPEND)
        }
        hasPlayer() {
            return this.playerMgr
        }
        showChangeEf() {
            ut.getIns().canshow3DImage()
        }
        randomBuff() {
            ut.getIns().isGameStart()
        }
        getLoadingPro() {
            return this.loadingCurCount / this.loadingAllCount
        }
        cleanScenes(e = !1) {
            this.configMgr && (this.configMgr.owner.destroy(), this.configMgr = null), this.clearPlayer(), this.recycleMgr.clearGo(), this.isLoadPlayer = !1, this.isOtherLoadOver = !1, Laya.Resource.destroyUnusedResources()
        }
        clearPlayer() {
            this.playerMgr && this.playerMgr.owner && !this.playerMgr.destroyed && this.playerMgr.owner.destroy(), this.playerMgr = null, this.curPlayerId = -1
        }
        getDis() {
            return this.configMgr ? this.configMgr.getRoadDis() : 0
        }
        getPlayerDis() {
            return 0
        }
        reborn() {
            this.playerMgr && this.playerMgr.reborn(), Laya.timer.once(1500, this, () => {
                ut.getIns().isGameStart()
            })
        }
    }
    fs.isShowMoney = !0;
    class Ps extends Laya.Script3D {
        constructor() {
            super(...arguments), this.isAutoRecycle = !1, this.key = null
        }
        recycle(e) {
            Laya.timer.once(1e3 * e, this, function () {
                this && this.owner && !this.owner.destroyed && (this.isAutoRecycle ? fs.getIns().recycleMgr.recycle(this.key, this.owner) : this.owner.destroy())
            })
        }
        setRecycleKey(e) {
            this.key = e
        }
        setAutoRecycle(e) {
            this.isAutoRecycle = e
        }
    }
    class Cs {
        constructor() {
            this.btnTweens = new A, this.showBanner = !1, this.forwardTemp = new Laya.Vector3, this.upVec = new Laya.Vector3(0, 1, 0), this.downVec = new Laya.Vector3(0, -1, 0), this.inVec = new Laya.Vector3(-1, 0, 0), this.targetTemp = new Laya.Vector3, this.showBannerDelay = 7e4, this.showBannerTimer = 0, this.forwardVec = new Laya.Vector3(0, 0, 1), this.backVec = new Laya.Vector3(0, 0, -1), this.angleBase = 180 / Math.PI, this.huorSpan = 1 / 3600, this.minuteSpan = 1 / 60, this.tempV1 = new Laya.Vector3, this.rotTemp = new Laya.Vector3, this.init()
        }
        static randomNum(e, t) {
            throw new Error("Method not implemented.")
        }
        static getIns() {
            return this.instance || (this.instance = new Cs), this.instance
        }
        init() {
            this.log("Tools init")
        }
        log(e, ...t) {
            Laya.Browser.onPC && console.log(e, t)
        }
        error(e, ...t) {
            console.error(e, t)
        }
        handlerFun(e, t = null, s = null, i = null) {
            null != e && e(t, s, i)
        }
        getVector3(e) {
            if (e) {
                let t = e.split("&");
                return new Laya.Vector3(-parseFloat(t[0]), parseFloat(t[1]), parseFloat(t[2]))
            }
            return this.error("vec输入错误:", e), null
        }
        getVector4(e) {
            if (e) {
                let t = e.split("&");
                return new Laya.Vector4(parseFloat(t[0]), parseFloat(t[1]), parseFloat(t[2]), parseFloat(t[3]))
            }
            return this.error("vec输入错误:", e), null
        }
        getRot(e) {
            if (e) {
                let t = e.split("&"),
                    s = this.eularToQuaternion(parseFloat(t[0]), parseFloat(t[1]), parseFloat(t[2]));
                return s.x = -s.x, s.w = -s.w, s
            }
            return this.log("rot输入错误:", e), null
        }
        eularToQuaternion(e, t, s) {
            let i = e / 180 * Math.PI,
                a = t / 180 * Math.PI,
                n = s / 180 * Math.PI,
                r = Math.cos(a / 2) * Math.sin(i / 2) * Math.cos(n / 2) + Math.sin(a / 2) * Math.cos(i / 2) * Math.sin(n / 2),
                o = Math.sin(a / 2) * Math.cos(i / 2) * Math.cos(n / 2) - Math.cos(a / 2) * Math.sin(i / 2) * Math.sin(n / 2),
                h = Math.cos(a / 2) * Math.cos(i / 2) * Math.sin(n / 2) - Math.sin(a / 2) * Math.sin(i / 2) * Math.cos(n / 2),
                l = Math.cos(a / 2) * Math.cos(i / 2) * Math.cos(n / 2) + Math.sin(a / 2) * Math.sin(i / 2) * Math.sin(n / 2);
            return new Laya.Quaternion(r, o, h, l)
        }
        resetTransform(e) {
            if (e) {
                let t = e.transform.localScale;
                Cs.oneVec.cloneTo(t), e.transform.localScale = t, t = e.transform.localPosition, Cs.zeroVec.cloneTo(t), e.transform.localPosition = t, this.resetRot(e)
            }
        }
        resetRot(e) {
            if (e) {
                let t = e.transform.localRotationEuler;
                Cs.zeroVec.cloneTo(t), e.transform.localRotationEuler = t
            }
        }
        removeChild(e) {
            e && e._children && 0 != e.numChildren && e.destroyChildren()
        }
        getChildBySgin(e, t, s) {
            if (!e) return;
            let i = null;
            for (var a = 0; a < e._children.length; a++) 0 == (i = e._children[a]).name.indexOf(t) && s.push(i), this.getChildBySgin(i, t, s)
        }
        getChildInParBySgin(e, t, s) {
            if (!e) return;
            let i = null;
            for (var a = 0; a < e._children.length; a++) 0 == (i = e._children[a]).name.indexOf(t) && s.push(i)
        }
        getMatInChild(e, t) {
            for (var s = 0; s < e._children.length; s++) {
                if (e._children[s].meshRenderer) {
                    let a = e._children[s].meshRenderer.materials;
                    for (var i = 0; i < a.length; i++) t.push(a[i])
                }
                this.getMatInChild(e._children[s], t)
            }
        }
        setEnableInstancing(e) {
            let t = null;
            for (var s = 0; s < e.length; s++)(t = e[s]) && (t._shader._enableInstancing = !0)
        }
        removeCollder(e) {
            let t = e.getComponent(Laya.PhysicsCollider);
            t && t.destroy()
        }
        playEffect(e) {
            e.particleSystem && e.particleSystem.play();
            for (let t = 0; t < e._children.length; t++) this.playEffect(e._children[t])
        }
        compileShader(e, t) {
            0 == e.length && this.handlerFun(t);
            let s = null,
                i = () => {
                    if (0 == e.length) return console.log("shder编译完成"), this.handlerFun(t), void Laya.timer.clear(this, i);
                    for (let t = 0; t < 6 && t < e.length; t++) s = e.shift(), Laya.Shader3D.compileShaderByDefineNames(s.shaderName, s.subShaderIndex, s.passIndex, s.defineNames)
                };
            Laya.timer.loop(20, this, i)
        }
        onShareTouched(e, t) {
            let s = new et;
            s.title = "!", s.success = e, s.fail = t, ct.getIns().shareAppMessage(s)
        }
        shareOrAd(e, t) {
            //ddsh
            f.getIns().pauseMusic();
            window.showRewardAds(function(){
                f.getIns().resumeMusic(), e && e()
            },function(){
                f.getIns().resumeMusic(), t && t()
            })
            // playVideo(res => {
            //     if (res) {
            //         f.getIns().resumeMusic(), e && e()
            //     } else {
            //         f.getIns().resumeMusic(), t && t()
            //     }
            // })
        }
        createBanner(e = null, t = null) {
            // this.showBanner = !0;
            // (() => {
            //     this.showBanner && (ct.getIns().showBanner(), Cs.getIns().handlerFun(t))
            // })()
        }
        hintBanner() {
            // this.hintBannerNotSgin(), this.showBanner = !1
        }
        hintBannerNotSgin() {
            // ct.getIns().desBanner()
        }
        reShowBanner() {
            // this.showBanner && Cs.getIns().createBanner()
        }
        cretaeBannerAyn() {
            // e.getIns().dispatchEvent(i.EN_SHOW_BANNER_AD)
        }
        setAdBtnIcon(e, t = !1) {
            if (t) e instanceof Laya.Image && (ct.getIns().hasVideo() ? e.skin = "page/ad/video_icon.png" : e.skin = "page/ad/share_icon.png");
            else if (e) {
                let t = e.getChildByName("icon");
                t instanceof Laya.Image && (ct.getIns().hasVideo() ? t.skin = "page/ad/video_icon.png" : t.skin = "page/ad/share_icon.png")
            }
        }
        getColor(e) {
            if (!e) return null;
            let t = e.split("&"),
                s = new Laya.Vector4(0, 0, 0, 0);
            return s.x = parseFloat(t[0]) / 255, s.y = parseFloat(t[1]) / 255, s.z = parseFloat(t[2]) / 255, s.w = 1, s
        }
        stopAnim(e) {
            if (!e) return;
            let t = e.getComponent(Laya.Animator);
            t && (t.speed = 0);
            for (var s = 0; s < e._children.length; s++)(t = e._children[s].getComponent(Laya.Animator)) && (t.speed = 0)
        }
        playBtnShow(e, t, s) {
            xs.getIns().isVIVOPlatform() || xs.getIns().isOPPOPlatform() || xs.getIns().isTTPlatform() || xs.getIns().isWINPlatform() ? Cs.getIns().handlerFun(t) : this.playBtnShowNotLimit(e, t, s)
        }
        playBtnShowNotLimit(e, t, s) {
            e && !e.destroyed && (e.visible = !1, e._tween = Laya.Tween.to(e, {
                visible: !0
            }, s), Laya.timer.once(s, null, function () {
                e && !e.destroyed && (e._tween = null, e.visible = !0, this.handlerFun(t))
            }.bind(this)))
        }
        bounceScale(e, t, s, i, a = 1, n = 1.2) {
            e.scaleX = a, e.scaleY = a, Laya.Tween.to(e, {
                scaleX: n,
                scaleY: n
            }, t, Laya.Ease.bounceOut), Laya.timer.once(t, this, function () {
                e && !e.destroyed && (Laya.Tween.to(e, {
                    scaleX: a,
                    scaleY: a
                }, s, Laya.Ease.linearIn), Laya.timer.once(s, null, function () {
                    Cs.getIns().handlerFun(i)
                }))
            })
        }
        showToast(e, t) {
            e && (t || (t = ""), xs.getIns().showToast(t))
        }
        createG0ByPrefabs(e, t, s = !1) {
            let i = new Laya.Prefab,
                a = function (e) {
                    i.json = e;
                    let s = i.create();
                    Cs.getIns().handlerFun(t, s)
                };
            s ? a(Laya.loader.getRes(e)) : Laya.loader.create(e, Laya.Handler.create(this, e => {
                a(e)
            }))
        }
        createPrefab(e) {
            let t = new Laya.Prefab;
            return t.json = this.getUiJson(e), t.create()
        }
        getUiJson(e) {
            return Laya.loader.getRes(e)
        }
        loadUiJson(e, t) {
            let s = e.length;
            if (0 == s) return void this.handlerFun(t);
            let i = 0,
                a = () => {
                    ++i == s && this.handlerFun(t)
                };
            for (let t = 0; t < e.length; t++) Laya.loader.create(e[t], Laya.Handler.create(this, function (e) {
                a()
            }))
        }
        lerp(e, t, s) {
            return s <= 0 ? e : s >= 1 ? t : e + (t - e) * s
        }
        bottomDoMove(e, t, s, i, a, n) {
            if (xs.getIns().isTTPlatform()) return e.y = s, void this.handlerFun(i, !1);
            let r = function (e, t, s, i) {
                return e < .55 * i ? .5 * Laya.Ease.bounceIn(2 * e, 0, s, i) + t : .5 * Laya.Ease.bounceOut(2 * e - i, 0, s, i) + .5 * s + t
            };
            e.y = t, Laya.timer.once(1e3 * a, this, function () {
                Laya.timer.once(1e3 * n, this, function () {
                    this.handlerFun(i, !0)
                }), Laya.Tween.to(e, {
                    y: s
                }, 1e3 * n, r)
            })
        }
        canUseItem(e, t) {
            let s = this.canUseItemNotTips(e, t);
            return 1 == t ? s || (Y.UIMgr.ins.openUI(Y.UIType.GetDiamView), xs.getIns().showToast("Not Enought")) : 2 == t || (3 == t ? s || (Y.UIMgr.ins.openUI(Y.UIType.GetGoldView), xs.getIns().showToast("Not Enought")) : 4 == t || 5 == t && (s || (xs.getIns().showToast("Not Enought"), Y.UIMgr.ins.openUI(Y.UIType.GetPowerView)))), s
        }
        canUseItemNotTips(e, t) {
            if (!xs.getIns().getPlat()) return !0;
            if (1 == t) return e <= ks.getIns().getDiamCount();
            if (2 == t);
            else {
                if (3 == t) return e <= ks.getIns().getCoin();
                if (4 == t);
                else if (5 == t) return e <= ks.getIns().getPower()
            }
            return !1
        }
        useItem(e, t, s) {
            1 == t ? ks.getIns().changeDiam(e, !1) : 2 == t ? ks.getIns().useSkinChip(s, e) : 3 == t ? ks.getIns().minusCoin(e) : 5 == t && ks.getIns().usePower(e)
        }
        isNumber(e) {
            return e === +e
        }
        isString(e) {
            return e === e + ""
        }
        timestampToTime(e) {
            let t = new Date(e);
            return t.getFullYear() + "年" + (t.getMonth() + 1 < 10 ? "0" + (t.getMonth() + 1) : t.getMonth() + 1) + "月" + this.changeNum(t.getDate()) + "日"
        }
        changeNum(e) {
            return e < 10 ? "0" + e : e
        }
        btnAction(e, t = null) {
            e ? (f.getIns().playSound(P.SN_CLICK), this.btnTween(e, t)) : Cs.getIns().handlerFun(t)
        }
        onClick(e, t) {
            e && e.on(Laya.Event.CLICK, this, () => {
                this.btnAction(e, t)
            })
        }
        btnTween(e, t = null) {
            if (!e) return;
            e.scaleX = .8, e.scaleY = .8;
            let s = e.nodeTween;
            s && s.clear(), e.nodeTween = Laya.Tween.to(e, {
                scaleX: 1,
                scaleY: 1
            }, 100, Laya.Ease.linearOut, Laya.Handler.create(null, () => {
                e.nodeTween.clear(), Cs.getIns().handlerFun(t)
            }), 0, !0, !1)
        }
        createEf(e, t, s, i, n = !1, r = Cs.zeroVec, o = !1, h = Cs.oneVec) {
            i || 0 == i || (i = 1);
            let l = a.resPath.format(e),
                d = e => {
                    if (s) {
                        if (0 != i) {
                            let t = e.getComponent(Ps);
                            t || (t = e.addComponent(Ps)), t.setAutoRecycle(n), t.setRecycleKey(l), t.recycle(i)
                        }
                        if (s.addChild(e), this.resetTransform(e), o) {
                            e.transform.localPosition = t;
                            let s = e.transform.localRotationEuler;
                            r.cloneTo(s), e.transform.localRotationEuler = s
                        } else {
                            let s = e.transform.position;
                            t.cloneTo(s), e.transform.position = s, s = e.transform.rotationEuler, r.cloneTo(s), e.transform.rotationEuler = s
                        }
                        e.transform.localScale = h, this.playEffect(e)
                    } else e.destroy()
                },
                c = fs.getIns().recycleMgr.getGo(l);
            if (c) return c.active = !0, void d(c);
            let u = [];
            u.push(l), Z.getIns().preload(u, () => {
                if (!s || s.destroyed) return;
                let e = Z.getIns().getNode(l);
                d(e)
            })
        }
        showChild(e, t) {
            if (e)
                for (var s = 0; s < e._children.length; s++) e._children[s].active = t
        }
        setBtnScaleTween(e) {
            if (!this.btnTweens.hasKey(e)) {
                let t = N.getIns().getTween(),
                    s = [];
                s.push({
                    time: 300,
                    prop: {
                        scaleX: 1,
                        scaleY: 1
                    },
                    ease: Laya.Ease.linearNone
                }), s.push({
                    time: 300,
                    prop: {
                        scaleX: 1.1,
                        scaleY: 1.1
                    },
                    ease: Laya.Ease.linearNone
                }), s.push({
                    time: 300,
                    prop: {
                        scaleX: 1,
                        scaleY: 1
                    },
                    ease: Laya.Ease.linearNone
                }), t.setTweenVals(s), t.setDelayTime(1e3), t.setTarget(e), t.setLoop(!0), t.play(), this.btnTweens.addKey(e, t)
            }
        }
        setBtnShake(e) {
            if (!this.btnTweens.hasKey(e)) {
                let t = N.getIns().getTween();
                t.setLoop(!0), t.setTarget(e);
                let s = [];
                s.push({
                    time: 100,
                    prop: {
                        rotation: 5,
                        scaleX: 1.1,
                        scaleY: 1.1
                    },
                    ease: Laya.Ease.linearNone
                }), s.push({
                    time: 200,
                    prop: {
                        rotation: -5
                    },
                    ease: Laya.Ease.linearNone
                }), s.push({
                    time: 100,
                    prop: {
                        rotation: 0,
                        scaleX: 1,
                        scaleY: 1
                    },
                    ease: Laya.Ease.linearNone
                }), t.setTweenVals(s), t.play(), this.btnTweens.addKey(e, t)
            }
        }
        closeBtnTween(e) {
            if (this.btnTweens.hasKey(e)) {
                let t = this.btnTweens.getValue(e);
                t.end(), this.btnTweens.removeKey(e), N.getIns().recycleTween(t)
            }
        }
        setImgPercent(e, t) {
            e && (e.visible = !0, t > 0 ? (e.mask || (e.mask = new Laya.Sprite), e.mask.graphics.clear(), e.mask.graphics.drawPie(e.width / 2, e.height / 2, e.width / 2, 360 * t - 90, 270, "#ffffff")) : e.mask = null, 1 == t && (e.visible = !1))
        }
        minBigNumber(e) {
            return e.lte(0) && (e = window.BigNumber(1)), e
        }
        getRandomArrayElements(e, t) {
            let s, i, a = e.slice(0),
                n = e.length,
                r = n - t;
            for (; n-- > r;) s = a[i = Math.floor((n + 1) * Math.random())], a[i] = a[n], a[n] = s;
            return a.slice(r)
        }
        createUiRoot(e, t) {
            let s;
            e.parent.zOrder = 3, (s = e.getChildByName("gameUIRoot")) || ((s = new Laya.View).name = "gameUIRoot", console.log("新建uiroot")), e.addChild(s), s.zOrder = 100, s.updateZOrder(), s.width = Laya.stage.width, s.height = Laya.stage.height;
            let i = s.addComponent(Y.UIMgr);
            i.init(), i.preLoad(t), console.log("maingui init")
        }
        setUINode(e, t, s) {
            let i = [];
            Cs.getIns().getChildBySgin(e, t, i);
            for (var a = 0; a < i.length; a++) s[i[a].name] = i[a]
        }
        setLayer(e, t) {
            if (e) {
                if (e.layer = t, e._children && 0 == e._children.length) return;
                for (let s = 0; s < e._children.length; s++) this.setLayer(e._children[s], t)
            }
        }
        insertVec(e, t) {
            return e.x = t.x, e.y = t.y, e.z = t.z, e
        }
        getNodeInAnim(e, t, s) {
            if (!e) return;
            let i = e._keyframeNodeOwners;
            for (let e = 0; e < i.length; e++) {
                let a = i[e];
                a.propertyOwner._owner.name.indexOf(s) >= 0 && t.push(a.propertyOwner._owner)
            }
            return t
        }
        getNodeInGo(e, t, s, i = 2) {
            if (!e) return;
            if (i <= 0) return t;
            i--;
            let a = e._children;
            for (let e = 0; e < a.length; e++) {
                let n = a[e];
                n.name.indexOf(s) >= 0 && t.push(n), this.getNodeInGo(n, t, s, i)
            }
            return t
        }
        offectLevel(e) {
            let t = m.ins.getAllDatas().length;
            return e > t && 0 == (e %= t) && (e = t), e
        }
        bottomToMove(e, t, s, i = Laya.Ease.linearOut) {
            if (!xs.getIns().isWINPlatform()) return e.bottom = t, void Cs.getIns().handlerFun(s);
            e.bottom = 0, Laya.timer.once(1100, null, () => {
                Laya.Tween.to(e, {
                    bottom: t
                }, 800, i, new Laya.Handler(null, () => {
                    Cs.getIns().handlerFun(s)
                }), 0, !0, !1)
            })
        }
        getArrayRaadomVal(e) {
            return e[Math.floor(Math.random() * (e.length - .1))]
        }
        randomNum(e, t) {
            return Math.floor(e + (t - e + .9) * Math.random())
        }
        changeRot(e, t, s = 50) {
            let i = t - e.transform.localRotationEulerY,
                a = i >= 0 ? i : -i;
            if (a >= 180) {
                let e = i / a;
                i = i > 0 ? 360 - i : 360 + i, i *= -e
            }
            if (0 != i) {
                let e = i / a;
                i = a < s ? a : s, i *= e
            }
            e.transform.localRotationEulerY += i, e.angle > 180 ? e.transform.localRotationEulerY -= 360 : e.angle < -180 && (e.transform.localRotationEulerY += 360)
        }
        changeRotLerp(e, t, s = .8) {
            let i = e.transform.rotation;
            Laya.Quaternion.lerp(e.transform.rotation, t, s, i), e.transform.rotation = i
        }
        getEquipByLv(e, t) {
            return e < 3 ? null : e >= 3 && e < 6 ? t + 1 : e >= 6 && e < 9 ? t + 2 : t + 3
        }
        setColor(e, t) {
            e && (t ? "#00ff1e" != e.color && (e.color = "#00ff1e") : "#ff0400" != e.color && (e.color = "#ff0400"))
        }
        canShowBanner() {
            return !xs.getIns().isOPPOPlatform() || !(0 == Cs.getIns().showBannerTimer || Laya.timer.currTimer - Cs.getIns().showBannerTimer < Cs.getIns().showBannerDelay)
        }
        returnSprite3D(e) {
            return e instanceof Laya.Sprite3D ? e : null
        }
        cretaeMesh(e, t) {
            let s = Laya.VertexMesh.getVertexDeclaration("POSITION,NORMAL,UV");
            return Laya.PrimitiveMesh._createMesh(s, new Float32Array(e), new Uint16Array(t))
        }
        loadTxt(e, t) {
            if (xs.getIns().getPlat() && xs.getIns().getPlat().getFileSystemManager) {
                xs.getIns().getPlat().getFileSystemManager().readFile({
                    filePath: e,
                    encoding: "latin1",
                    success: e => {
                        Cs.getIns().handlerFun(t, e.data)
                    }
                })
            } else Laya.loader.load(e, Laya.Handler.create(this, e => {
                Cs.getIns().handlerFun(t, e)
            }), null, Laya.loader.TEXT)
        }
        changeAlpha(e, t) {
            if (e instanceof Laya.PBRStandardMaterial) {
                let s = e.albedoColor;
                s.w = t, e.albedoColor = s
            }
        }
        closeMesh(e) {
            e && e.meshRenderer && (e.meshRenderer.enable = !1)
        }
        seekNodeByName(e, t) {
            if (e.name === t) return e;
            let s = void 0;
            return e._children.forEach(e => {
                s || (s = this.seekNodeByName(e, t))
            }), s
        }
        generateString(e) {
            let t = "";
            if ("number" == typeof e)
                for (let s = 0; s < e; s++) Math.random() < .5 ? t += String.fromCharCode(this.randomNum("0".charCodeAt(), "0".charCodeAt() + 9)) : t += String.fromCharCode(this.randomNum("a".charCodeAt(), "a".charCodeAt() + 25));
            return t
        }
        bigNumber2StrNumber(e, t = 2) {
            if (e) {
                if ("number" == typeof e && (e = window.BigNumber(e)), !(e instanceof window.BigNumber)) return "";
                if (e.e <= 4) return e.toFixed();
                let s = "k";
                if (e.e >= 6)
                    for (let t = 6; t <= 246; t += 3)
                        if (e.e >= t && e.e < t + 3) {
                            6 === t ? s = "m" : 9 === t ? s = "b" : 12 === t ? s = "t" : (s = String.fromCharCode("a".charCodeAt() + (t - 15) / 3), s += s);
                            break
                        }
                "number" != typeof t && (t = 3);
                let i = e.toExponential(t - 1);
                return window.BigNumber(i.substring(0, i.indexOf("e"))).times(Math.pow(10, e.e % 3)).toString() + s
            }
            return ""
        }
        checkString(e) {
            return void 0 !== e && "string" == typeof e && "" !== e
        }
        convertSecondToHourMinuteSecond(e, t = !0) {
            let s = Math.round(e * this.huorSpan),
                i = Math.round(e * this.minuteSpan) % 60,
                a = Math.round(e % 60);
            return 0 == s && t ? (i < 10 ? "0" + i : i) + ":" + (a < 10 ? "0" + a : a) : (s < 10 ? "0" + s : s) + ":" + (i < 10 ? "0" + i : i) + ":" + (a < 10 ? "0" + a : a)
        }
        lookAtTarget(e, t) {
            this.rotTemp.y = e.transform.localRotationEulerY + 180, Laya.Vector3.subtract(t, e.transform.position, this.tempV1), Laya.Vector3.subtract(e.transform.position, this.tempV1, this.tempV1), e.transform.lookAt(this.tempV1, this.upVec, !1)
        }
        getAllAnimCompsInChilds(e, t) {
            let s = e.getComponent(Laya.Animator);
            s && t.push(s);
            for (let s = 0; s < e.numChildren; s++) this.getAllAnimCompsInChilds(e.getChildAt(s), t)
        }
        identity(e) {
            return e
        }
        setDataByType(e, t) {
            if (!t || !e) return;
            let s = Object.keys(t);
            for (let i = 0; i < s.length; i++) {
                let a = s[i];
                e[a] = t[a]
            }
        }
        static getItemTypeByParkType(e) {
            switch (e) {
                case R.ParkJinqiangyu:
                    return W.Jinqiangyu;
                case R.ParkDalongxia:
                    return W.Dalongxia;
                case R.ParkShadingyu:
                    return W.Shadingyu;
                case R.ParkDalongxiaProcess:
                    return W.Dalongxia;
                case R.ParkJinqiangyuProcess:
                    return W.Jinqiangyu;
                case R.ParkShadingyuProcess:
                    return W.Shadingyu;
                case R.ParkHailuoProcess:
                    return W.Hailuo;
                case R.ParkCashier:
                    return W.Cashier;
                case R.ParkKaoxietui:
                case R.ParkKaoxietuiProcess:
                    return W.Kaoxietui;
                case R.ParkYuguangtou:
                case R.ParkYuguangtouProcess:
                    return W.Yuguangtou;
                case R.ParkHailuo:
                    return W.Hailuo;
                case R.ParkPangxie:
                case R.ParkPangxieProcess:
                    return W.Pangxie;
                case R.ParkShaokao:
                case R.ParkShaokaoProcess:
                    return W.Shaokao;
                case R.ParkXiangbaban:
                case R.ParkXiangbabanProcess:
                    return W.Xiangbaban;
                case R.ParkXia:
                case R.ParkXiaProcess:
                    return W.Xia;
                case R.ParkXiaozhangyu:
                case R.ParkXiaozhangyuProcess:
                    return W.Xiaozhangyu;
                case R.ParkYouyu:
                case R.ParkYouyuProcess:
                    return W.Youyu;
                case R.ParkShengyupian:
                case R.ParkShengyupianProcess:
                    return W.Shengyupian;
                case R.ParkKaoyouyu:
                case R.ParkKaoyouyuProcess:
                    return W.Kaoyouyu;
                case R.ParkKaoshenghao:
                case R.ParkKaoshenghaoProcess:
                    return W.Kaoshenghao;
                case R.ParkYuwang:
                case R.ParkYuwangProcess:
                    return W.Yuwang;
                case R.ParkLongxiadacang:
                case R.ParkLongxiadacangProcess:
                    return W.Longxiadacang;
                case R.ParkYoumengxia:
                case R.ParkYoumengxiaProcess:
                    return W.Youmengxia
            }
            return W.None
        }
        static getParkByProductType(e) {
            switch (e) {
                case R.ParkDalongxiaProcess:
                    return R.ParkDalongxia;
                case R.ParkJinqiangyuProcess:
                    return R.ParkJinqiangyu;
                case R.ParkShadingyuProcess:
                    return R.ParkShadingyu;
                case R.ParkHailuoProcess:
                    return R.ParkHailuo;
                case R.ParkKaoxietuiProcess:
                    return R.ParkKaoxietui;
                case R.ParkYuguangtouProcess:
                    return R.ParkYuguangtou;
                case R.ParkPangxieProcess:
                    return R.ParkPangxie;
                case R.ParkShaokaoProcess:
                    return R.ParkShaokao;
                case R.ParkXiaProcess:
                    return R.ParkXia;
                case R.ParkXiangbabanProcess:
                    return R.ParkXiangbaban;
                case R.ParkXiaozhangyuProcess:
                    return R.ParkXiaozhangyu;
                case R.ParkYouyuProcess:
                    return R.ParkYouyu;
                case R.ParkShengyupianProcess:
                    return R.ParkShengyupian;
                case R.ParkKaoyouyuProcess:
                    return R.ParkKaoyouyu;
                case R.ParkKaoshenghaoProcess:
                    return R.ParkKaoshenghao;
                case R.ParkYuwangProcess:
                    return R.ParkYuwang;
                case R.ParkLongxiadacangProcess:
                    return R.ParkLongxiadacang;
                case R.ParkYoumengxiaProcess:
                    return R.ParkYoumengxia
            }
            return R.None
        }
        static getParkTypeTypeByItemType(e) {
            switch (e) {
                case W.Jinqiangyu:
                    return R.ParkJinqiangyu;
                case W.Dalongxia:
                    return R.ParkDalongxia;
                case W.Shadingyu:
                    return R.ParkShadingyu;
                case W.Shengyupian:
                    return R.ParkShengyupian;
                case W.Yuguangtou:
                    return R.ParkYuguangtou;
                case W.Cashier:
                    return R.ParkCashier;
                case W.Hailuo:
                    return R.ParkHailuo;
                case W.Pangxie:
                    return R.ParkPangxie;
                case W.Xiaozhangyu:
                    return R.ParkXiaozhangyu;
                case W.Xiangbaban:
                    return R.ParkXiangbaban;
                case W.Xia:
                    return R.ParkXia;
                case W.Youyu:
                    return R.ParkYouyu;
                case W.Kaoshenghao:
                    return R.ParkKaoshenghao;
                case W.Kaoxietui:
                    return R.ParkKaoxietui;
                case W.Kaoyouyu:
                    return R.ParkKaoyouyu;
                case W.Shaokao:
                    return R.ParkShaokao;
                case W.Yuwang:
                    return R.ParkYuwang;
                case W.Longxiadacang:
                    return R.ParkLongxiadacang;
                case W.Youmengxia:
                    return R.ParkYoumengxia
            }
            return R.None
        }
        static getProductTypeByItemType(e) {
            switch (e) {
                case W.Jinqiangyu:
                    return R.ParkJinqiangyuProcess;
                case W.Dalongxia:
                    return R.ParkDalongxiaProcess;
                case W.Shadingyu:
                    return R.ParkShadingyuProcess;
                case W.Shengyupian:
                    return R.ParkShengyupianProcess;
                case W.Yuguangtou:
                    return R.ParkYuguangtouProcess;
                case W.Cashier:
                    return R.ParkPangxieProcess;
                case W.Hailuo:
                    return R.ParkHailuoProcess;
                case W.Pangxie:
                    return R.ParkPangxieProcess;
                case W.Xiaozhangyu:
                    return R.ParkXiaozhangyuProcess;
                case W.Xiangbaban:
                    return R.ParkXiangbabanProcess;
                case W.Xia:
                    return R.ParkXiaProcess;
                case W.Youyu:
                    return R.ParkYouyuProcess;
                case W.Kaoshenghao:
                case W.Kaoxietui:
                case W.Kaoyouyu:
                case W.Shaokao:
                case W.Yuwang:
                    return R.ShaoKao;
                case W.Longxiadacang:
                case W.Youmengxia:
                    return R.ChaoCai
            }
            return R.None
        }
        static getItemIconPathByItemType(e) {
            switch (e) {
                case W.Jinqiangyu:
                    return "jinqiangyu";
                case W.Dalongxia:
                    return "longxia";
                case W.Shadingyu:
                    return "shadingyu";
                case W.Shengyupian:
                    return "shengyupian";
                case W.Yuguangtou:
                    return "guantou";
                case W.Hailuo:
                    return "hailuo";
                case W.Pangxie:
                    return "pangxie";
                case W.Xiaozhangyu:
                    return "zhangyu";
                case W.Xia:
                    return "xia";
                case W.Xiangbaban:
                    return "xiangbabang";
                case W.Youyu:
                    return "youyu";
                case W.Kaoshenghao:
                    return "kaoshenghao";
                case W.Kaoxietui:
                    return "kaoxietui";
                case W.Kaoyouyu:
                    return "kaoyouyu";
                case W.Shaokao:
                    return "kaochuang";
                case W.Yuwang:
                    return "zhangyuwangzi";
                case W.Longxiadacang:
                    return "longxiadacang";
                case W.Youmengxia:
                    return "youmengxia"
            }
            return null
        }
        static onClick(e, t) {
            e && (e.clickTimer = Laya.timer.currTimer, e.on(Laya.Event.CLICK, this, () => {
                e.clickTimer && Laya.timer.currTimer - e.clickTimer < 500 || (e.clickTimer = Laya.timer.currTimer, Cs.getIns().btnAction(e, t))
            }))
        }
    }
    Cs.oneVec = new Laya.Vector3(1, 1, 1), Cs.zeroVec = new Laya.Vector3(0, 0, 0);
    class vs extends p {
        constructor() {
            super(...arguments), this.powerMax = 20, this.recoverPowerTime = 300
        }
        static get ins() {
            return this._ins || (this._ins = new vs), this._ins
        }
        init(e) {
            super.init(e), this.powerMax = this.getDataById(7).num, this.recoverPowerTime = this.getDataById(6).num
        }
        getConfigTarget() {
            return new Ts
        }
        getRecoverPowerTime() {
            return this.recoverPowerTime
        }
        getPowerMax() {
            return this.powerMax
        }
    }
    class Ts extends g {}
    class Ss {
        constructor() {
            this.waiterId = 0, this.speedLv = 1, this.carrayLv = 1, this.waiterCount = 1, this.waiterUpId = 1
        }
    }
    class ks {
        constructor() {
            this.isInit = !1, this.isNewPlayer = !0, this.isAwalyNewPlayer = !0, this.playerData = new Ls, this.canSaveOutTime = !1, this.saveSpace = 5e3, this.lastSaveTime = 0, this.canSave = !0
        }
        loadPlayerData() {
            let e = ct.getIns().getAppid();
            if (Laya.LocalStorage.support) {
                this.isAwalyNewPlayer && Laya.LocalStorage.removeItem(e);
                let t = Laya.LocalStorage.getJSON(e);
                if (t) {
                    this.isNewPlayer = !1;
                    let e = JSON.parse(t),
                        s = Object.keys(e);
                    for (let t = 0; t < s.length; t++) this.playerData[s[t]] = e[s[t]]
                } else this.playerData.init(), this.isNewPlayer = !0
            } else this.playerData.init(), this.isNewPlayer = !0;
            this.loadPlayerDataEnd(), this.save(), console.log("玩家数据加载完成!")
        }
        loadPlayerDataEnd() {
            2 != this.playerData.isResetPlayer && (this.playerData = new Ls, this.playerData.init(), this.isNewPlayer = !0, this.playerData.isResetPlayer = 2, console.log("强设置新用户")), this.playerData.power = vs.ins.getPowerMax();
            let e = m.ins.getAllDatas();
            for (let t = 0; t < e.length; t++) {
                let s = this.getLevelDataById(e[t].id);
                if (s.waiterInfo)
                    for (let e = 0; e < s.waiterInfo.length; e++) s.waiterInfo[e].waiterCount > 2 && (s.waiterInfo[e].waiterCount = 2);
                else s.waiterInfo = [];
                s.buildInfo || (s.buildInfo = []), 1 == s.lvId && (s.isOpen = 1)
            }
            let t = ee.getIns().getCurServerDayOfWeek();
            this.playerData.lastDay != t && this.toNextDay(t), this.isNewPlayer && (this.playerData.offectGold = 1, this.plusCoin(10)), this.playerData.lastGameTimer && 0 != this.playerData.lastGameTimer || this.saveTime(), this.playerData.wantedId || 0 == this.playerData.wantedId || (this.playerData.wantedId = 0), console.log("playerData:", this.playerData)
        }
        saveTime() {
            this.playerData.lastGameTimer = Math.floor(ee.getIns().getServerTime() / 1e3), this.save()
        }
        getLastSaveTime() {
            return this.playerData.lastGameTimer
        }
        getOutTime() {
            let e = Math.floor(ee.getIns().getServerTime() / 1e3 - this.playerData.lastGameTimer);
            return e = e < 0 ? 0 : e
        }
        toNextDay(e) {
            this.playerData.lastDay = e, this.resetSginDay()
        }
        savePlayerDataBefore() {}
        init(e) {
            this.isInit ? Cs.getIns().handlerFun(e) : (this.isAwalyNewPlayer = !1, this.loadPlayerData(), this.isInit = !0, this.autoSave(), Cs.getIns().handlerFun(e))
        }
        autoSave() {
            this.lastSaveTime = ee.getIns().getServerTime(), this.canSaveOutTime && this.saveTime(), Laya.timer.clear(this, this.timerSave), Laya.timer.loop(this.saveSpace, this, this.timerSave)
        }
        static getIns() {
            return this._ins || (this._ins = new ks), this._ins
        }
        hasNewPlayer() {
            return this.isNewPlayer
        }
        timerSave() {
            this.canSave && (this.canSave = !1, this.save())
        }
        setToSave() {
            this.canSave = !0
        }
        save() {
            if (this.isInit) {
                if (this.savePlayerDataBefore(), Laya.LocalStorage.support) {
                    let e = ct.getIns().getAppid();
                    Laya.LocalStorage.setJSON(e, JSON.stringify(this.playerData)), console.log("玩家数据存储---")
                }
                this.lastSaveTime = ee.getIns().getServerTime()
            }
        }
        clear() {
            let e = ct.getIns().getAppid();
            Laya.LocalStorage.removeItem(e)
        }
        getShowLevelCount() {
            return this.playerData.totleLevel
        }
        getSkinId() {
            return this.playerData.curSkinId
        }
        getLevelDataById(e) {
            let t = null;
            for (let s = 0; s < this.playerData.levelDatas.length; s++)
                if (e == this.playerData.levelDatas[s].lvId) {
                    t = this.playerData.levelDatas[s];
                    break
                } return t || (t = new Bs(e), this.playerData.levelDatas.push(t)), t
        }
        addContinueLevel(e) {
            this.playerData.cLevel += e
        }
        setLevelId(e) {
            this.playerData.levelId = e, this.save()
        }
        setToNextLevelID() {
            this.playerData.totleLevel++, this.playerData.levelId++;
            let e = m.ins.getAllDatas();
            e[e.length - 1].id < this.playerData.levelId && (this.playerData.levelId = 1)
        }
        getLevelId() {
            return this.playerData.levelId
        }
        isMuteEnable() {
            return this.playerData.isMuteEnable
        }
        isSoundEnable() {
            return this.playerData.isSoundEnable
        }
        setSoundEnable(e) {
            this.playerData.isSoundEnable = e
        }
        setMuteEnable(e) {
            this.playerData.isMuteEnable = e
        }
        hasSkinById(e) {
            return this.playerData.skins.indexOf(e) >= 0
        }
        setLevelPlayTime(e, t) {
            let s = this.getLevelDataById(t);
            s && (3 == e ? s.playTimes++ : 1 == e ? s.succTimes++ : s.failTimes++)
        }
        getCurTeachId() {
            return this.playerData.teachId
        }
        setTeachId(e) {
            this.playerData.teachId = e
        }
        getPower() {
            return this.playerData.power
        }
        addItemByType(e, t, s = 0) {
            1 == e ? this.changeDiam(t, !0) : 2 == e ? this.addSkinChip(s, t) : 3 == e ? this.plusCoin(t) : 4 == e || 5 == e && this.addPower(t)
        }
        resetSginDay() {
            this.playerData.isSgin = !1
        }
        getSginDay() {
            return this.playerData.sginDay
        }
        todayHasSgin() {
            return this.playerData.isSgin
        }
        setTodaySgin() {
            this.playerData.sginDay++, this.playerData.isSgin = !0
        }
        getDiamCount() {
            return this.playerData.diam
        }
        getCoin() {
            return this.playerData.gold
        }
        addSkin(e) {
            this.playerData.skins.indexOf(e) < 0 && this.playerData.skins.push(e)
        }
        changeDiam(e, t) {
            t ? this.playerData.diam += e : this.playerData.diam -= e
        }
        useSkinChip(e, t) {
            let s = this.getChipData(e);
            s && (s.count -= t, s.count = s.count < 0 ? 0 : s.count)
        }
        addSkinChip(e, t) {
            let s = this.getChipData(e);
            s && (s.count += t)
        }
        getChipData(e) {
            let t = null;
            for (let s = 0; s < this.playerData.skinChips.length; s++)
                if (e == this.playerData.skinChips[s].id) {
                    t = this.playerData.skinChips[s];
                    break
                } return t || (t = new _s(e), this.playerData.skinChips.push(t)), t
        }
        minusCoin(t) {
            this.playerData.gold -= t, e.getIns().dispatchEvent(i.EN_COIN_CHANGED);
            this.save()//ddsh
        }
        plusCoin(t) {
            this.playerData.gold += t, e.getIns().dispatchEvent(i.EN_COIN_CHANGED)
            this.save()
        }
        upGetCoinNum() {
            this.playerData.coinGetNums += 1;
        }
        getCoinNum() {
            return this.playerData.coinGetNums
        }
        usePower(t) {
            let s = vs.ins.getPowerMax();
            this.playerData.power >= s && (this.playerData.lastRecoverPowerTime = Math.floor(ee.getIns().getServerTime() / 1e3)), this.playerData.power -= t, this.playerData.power = this.playerData.power < 0 ? 0 : this.playerData.power, e.getIns().dispatchEvent(i.EN_POWER_CHANGED)
        }
        powerIsFull() {
            return this.playerData.power >= vs.ins.getPowerMax()
        }
        addPower(t, s = !1) {
            if (s) {
                let e = vs.ins.getRecoverPowerTime();
                this.playerData.lastRecoverPowerTime += e * t
            }
            let a = vs.ins.getPowerMax();
            this.playerData.power + t >= a && (this.playerData.lastRecoverPowerTime = Math.floor(ee.getIns().getServerTime() / 1e3)), this.playerData.power += t, e.getIns().dispatchEvent(i.EN_POWER_CHANGED)
        }
        getLastGetPowerTime() {
            return this.playerData.lastRecoverPowerTime
        }
        getPlayerGrowUpId() {
            return this.playerData.playerGrowUpId
        }
        playerGrowUp() {
            this.playerData.playerGrowUpId++, le.ins.hasId(this.playerData.playerGrowUpId) || (this.playerData.playerGrowUpId = 1), e.getIns().dispatchEvent(i.EN_LEVELUP)
        }
        setGrowUpId(e) {
            this.playerData.playerGrowUpId = e
        }
        getDnaCount() {
            return this.playerData.dnaCount
        }
        addDnaCount(e) {
            this.playerData.dnaCount += e
        }
        clearDna() {
            this.playerData.dnaCount = 0
        }
        addBuildByType(e, t) {
            let s = null,
                i = this.getLevelDataById(t);
            for (let t = 0; t < i.buildInfo.length; t++)
                if (i.buildInfo[t].buildType == e) {
                    s = i.buildInfo[t];
                    break
                } s || ((s = new Ns).buildType = e, s.buildCount = 0, i.buildInfo.push(s)), s.buildCount++, l.getIns().umRuning(s.buildType, s.buildCount), e == R.Plane2 ? l.getIns().gameStartSumbit(2) : e == R.Plane3 && l.getIns().gameStartSumbit(3), this.setToSave()
        }
        getBuildCountByType(e, t) {
            let s = this.getLevelDataById(t);
            for (let t = 0; t < s.buildInfo.length; t++)
                if (s.buildInfo[t].buildType == e) return s.buildInfo[t].buildCount;
            return 0
        }
        getAllBuildDatas(e) {
            let t = this.getLevelDataById(e);
            return t ? t.buildInfo : null
        }
        getBuilDataById(e, t) {
            let s = this.getLevelDataById(t);
            if (s)
                for (let t = 0; t < s.buildInfo.length; t++)
                    if (s.buildInfo[t].buildType == e) return s.buildInfo[t];
            return null
        }
        getBuildLvData(e, t) {
            let s = this.getBuilDataById(e, t);
            return s ? s.buildLvData : null
        }
        upBuildLv(t, s, a) {
            let n = this.getBuilDataById(t, s);
            n && (1 == a ? (n.buildLvData.containLv++, n.buildLvData.containLv > 10 && (n.buildLvData.containLv = 10)) : 2 == a && (n.buildLvData.speedLv++, n.buildLvData.speedLv > 10 && (n.buildLvData.speedLv = 10)), this.save()), e.getIns().dispatchEvent(i.BUILDUP)
        }
        setWaiterCount(e, t, s) {
            let i = this.getWaiterData(e, t);
            i && (i.waiterCount = s, this.setToSave())
        }
        addWaiter(e, t) {
            let s = this.getLevelDataById(t),
                i = this.getWaiterData(e, t);
            i ? i.waiterCount++ : ((i = new Ss).waiterId = e, i.waiterCount = 1, s.waiterInfo.push(i)), l.getIns().umLevel("event_unlockwaiter_" + e, 1), this.setToSave()
        }
        getWaiterCountByID(e, t) {
            let s = this.getWaiterData(e, t);
            return s ? s.waiterCount : 0
        }
        getWaiterData(e, t) {
            let s = this.getLevelDataById(t);
            for (let t = 0; t < s.waiterInfo.length; t++)
                if (s.waiterInfo[t].waiterId == e) return s.waiterInfo[t];
            return null
        }
        getWaiterLv(e, t, s) {
            let i = this.getLevelDataById(s);
            if (0 == i.waiterInfo.length) return 0;
            for (let s = 0; s < i.waiterInfo.length; s++)
                if (e == i.waiterInfo[s].waiterId) {
                    if (t == F.speed) return i.waiterInfo[s].speedLv;
                    if (t == F.Carry) return i.waiterInfo[s].carrayLv
                } return 0
        }
        hasWaiterById(e, t) {
            return null != this.getWaiterData(e, t)
        }
        updateWaiter(t, s, a) {
            let n = this.getLevelDataById(a);
            for (let e = 0; e < n.waiterInfo.length; e++)
                if (t == n.waiterInfo[e].waiterId) {
                    let i = fe.ins.getDataById(t);
                    s == F.speed ? (n.waiterInfo[e].speedLv++, n.waiterInfo[e].speedLv > i.lvMax && (n.waiterInfo[e].speedLv = i.lvMax), l.getIns().umLevel("event_waiterSpeedLv_" + n.waiterInfo[e].waiterId + "_" + n.waiterInfo[e].speedLv, n.waiterInfo[e].speedLv)) : s == F.Carry && (n.waiterInfo[e].carrayLv++, n.waiterInfo[e].carrayLv > i.lvMax && (n.waiterInfo[e].carrayLv = i.lvMax), l.getIns().umLevel("event_waiterCarryLv_" + n.waiterInfo[e].waiterId + "_" + n.waiterInfo[e].carrayLv, n.waiterInfo[e].carrayLv)), n.waiterInfo[e].waiterUpId++, Be.ins.isMaxById(n.waiterInfo[e].waiterUpId) && (n.waiterInfo[e].waiterUpId = Be.ins.getMaxId())
                } this.setToSave(), e.getIns().dispatchEvent(i.WAITERUPDATE)
        }
        addPlayerCarryLv() {
            this.playerData.playerCarryLv++, le.ins.getDataById(this.playerData.playerCarryLv) || this.playerData.playerCarryLv--, l.getIns().umLevel("event_playerCarryLv_" + this.playerData.playerCarryLv, this.playerData.playerCarryLv), this.setToSave(), e.getIns().dispatchEvent(i.PLAYERCARRYUP)
        }
        getPlayerCarryLv() {
            return this.playerData.playerCarryLv
        }
        getPlayerSpeedLv() {
            return this.playerData.playerSpeedLv
        }
        addPlayerSpeedLv() {
            this.playerData.playerSpeedLv++, this.playerData.playerSpeedLv > te.ins.playerMaxLv && (this.playerData.playerSpeedLv = te.ins.playerMaxLv), this.setToSave(), e.getIns().dispatchEvent(i.PLAYERCARRYUP)
        }
        addMarkById(e) {
            this.getLevelDataById(e).isOpen = 1, this.setToSave()
        }
        markIsOpen(e) {
            return 1 == this.getLevelDataById(e).isOpen
        }
        setMarkIsOpen(e) {
            let t = this.getLevelDataById(e);
            l.getIns().umLevel("event_storeOpen_" + t.lvId, 1), t.isOpen = 1, this.setToSave()
        }
        isGetFreeGold() {
            return 1 == this.playerData.isFingerGold
        }
        setGetFreeGold() {
            this.playerData.isFingerGold = 1, this.setToSave()
        }
        isShowYinsi() {
            return 1 == this.playerData.isYinsi
        }
        setShowYinsi() {
            this.playerData.isYinsi = 1, this.setToSave()
        }
        setWantedId(e) {
            this.playerData.wantedId = e, this.setToSave()
        }
        getWantedId() {
            return this.playerData.wantedId
        }
    }
    class Bs {
        constructor(e) {
            this.playTimes = 0, this.lvId = 0, this.failTimes = 0, this.succTimes = 0, this.buildInfo = [], this.waiterInfo = [], this.isOpen = 0, this.lvId = e
        }
    }
    class Ls {
        constructor() {
            this.gold = 0, this.diam = 0, this.power = 0, this.teachId = 0, this.curSkinId = 1, this.skins = [], this.levelId = 1, this.totleLevel = 1, this.isMuteEnable = !0, this.isSoundEnable = !0, this.levelDatas = [], this.cLevel = 0, this.skinChips = [], this.sginDay = 0, this.isSgin = !1, this.lastDay = 0, this.lastRecoverPowerTime = 0, this.playerGrowUpId = 1, this.dnaCount = 0, this.lastGameTimer = 0, this.playerCarryLv = 1, this.playerSpeedLv = 1, this.wantedId = 0, this.offectGold = 0, this.isFingerGold = 0, this.isYinsi = 0, this.isResetPlayer = 2;
            this.coinGetNums = 1;
        }
        init() {
            this.lastRecoverPowerTime = .001 * ee.getIns().getServerTime()
        }
    }
    class As {
        constructor() {
            this.containLv = 1, this.speedLv = 1, this.buildType = 0
        }
    }
    class _s {
        constructor(e) {
            this.id = 0, this.count = 0, this.id = e
        }
    }
    class Ns {
        constructor() {
            this.buildType = 0, this.buildCount = 0, this.buildLv = 0, this.buildLvData = new As
        }
    }
    class xs {
        constructor() {
            this._plat = null, this._platType = 0, this.onHideTime = 0, this.lastOutTime = 0, this._sysInfo = null, this._isToastOnShow = !1, this._isLoadingOnShow = !1, this.isShowNetworkErrorWindow = !1
        }
        static getIns() {
            return this._ins || (this._ins = new xs, this._ins.init()), this._ins
        }
        init() {
            //ddsh
            // let e = window.qg,
            //     t = window.mz;
            // void 0 !== window.wx && Laya.MiniAdpter ? (this._plat = window.wx, this._platType = 1) : void 0 !== window.qq ? (this._plat = window.qq, this._platType = 2) : void 0 !== window.qg && e.getProvider().toLowerCase().indexOf("oppo") > -1 ? (this._plat = window.qg, this._platType = 3) : void 0 !== window.qg && e.getProvider().toLowerCase().indexOf("vivo") > -1 ? (this._plat = window.qg, this._platType = 4) : void 0 !== window.tt ? (this._plat = window.tt, this._platType = 5) : void 0 !== window.qttGame ? (this._plat = window.qttGame, this._platType = 6) : void 0 !== window.mz && t.getProvider().toLowerCase().indexOf("meizu") > -1 ? (this._plat = window.mz, this._platType = 7) : void 0 !== window.conch && (this._plat = window.conch, this._platType = 8), this._plat && (this._plat.onHide && this._plat.onHide(() => {
            //     this.onHide()
            // }), this._plat.onShow && this._plat.onShow(() => {
            //     this.onShow()
            // }))
        }
        onHide() {
            // console.log("hide view"), this.onHideTime = ee.getIns().getServerTime(), ks.getIns().save(), e.getIns().dispatchEvent(i.OUTGAME)
        }
        onShow() {
            // console.log("back view"), this.lastOutTime = ee.getIns().getServerTime() - this.onHideTime, f.getIns().resumeMusic(), e.getIns().dispatchEvent(i.ENTERGAME)
        }
        getOutTime() {
            return this.lastOutTime
        }
        getSysInfo() {
            return this._sysInfo || (this.isWXPlatform() ? this._sysInfo = window.wx.getSystemInfoSync() : this.isOPPOPlatform() || this.isVIVOPlatform() ? this._sysInfo = window.qg.getSystemInfoSync() : (this._sysInfo = {
                screenHeight: Math.round(Laya.stage.height),
                screenWidth: Math.round(Laya.stage.width),
                windowHeight: Math.round(Laya.stage.height),
                windowWidth: Math.round(Laya.stage.width),
                statusBarHeight: 0
            }, Laya.Browser.onPC ? (this._sysInfo.brand = "microsoft", this._sysInfo.platform = "window", this._sysInfo.system = "Window 7") : Laya.Browser.onIOS ? (this._sysInfo.brand = "apple", this._sysInfo.platform = "ios", this._sysInfo.system = "iOS 12.1") : Laya.Browser.onAndroid ? (this._sysInfo.brand = "samsung", this._sysInfo.platform = "and", this._sysInfo.system = "Android 6.0") : (this._sysInfo.brand = "microsoft", this._sysInfo.platform = "window", this._sysInfo.system = "Window 7"))), this._sysInfo
        }
        exitApp() {
            this._plat && (this._plat.exitMiniProgram && this._plat.exitMiniProgram({
                fail: function () {}
            }), this._plat.exitApplication && this._plat.exitApplication({
                success: null,
                fail: null,
                complete: null
            }))
        }
        vibratePhone(e) {
            ks.getIns().isMuteEnable() && (e ? this._plat && this._plat.vibrateLong && this._plat.vibrateLong() : this._plat && this._plat.vibrateShort && this._plat.vibrateShort())
        }
        showToast(e, t = null) {
            if (this._clearToastAndLoading(), this._plat && this._plat.showToast && Cs.getIns().checkString(e)) {
                let s = {
                    title: e,
                    duration: 2e3,
                    success: function (e) {
                        this._isToastOnShow = !0, Laya.timer.once(2e3, this, () => {
                            this._isToastOnShow = !1
                        }, null, !0)
                    }.bind(this)
                };
                s.icon = t || "none", this._plat.showToast(s)
            }
        }
        hideToast() {
            this._isToastOnShow && (this._isToastOnShow = !1, this._plat && this._plat.hideToast && this._plat.hideToast())
        }
        _clearToastAndLoading() {
            this.hideToast(), this.hideLoading()
        }
        isWINPlatform() {
            return 0 == this._platType
        }
        isWXPlatform() {
            return false
        }
        isQQPlatform() {
            return 2 == this._platType
        }
        isOPPOPlatform() {
            return 3 == this._platType
        }
        isVIVOPlatform() {
            return 4 == this._platType
        }
        isOVPlatform() {
            return 3 == this._platType || 4 == this._platType
        }
        isTTPlatform() {
            return 5 == this._platType
        }
        isQTTPlatform() {
            return 6 == this._platType
        }
        isMZPlatform() {
            return 7 == this._platType
        }
        isNativePlatform() {
            return 8 == this._platType
        }
        is233Platform() {
            return 9 == this._platType
        }
        isXiaoMiPlatform() {
            return 10 == this._platType
        }
        getPlat() {
            return this._plat
        }
        showLoading(e = null) {
            if (this._clearToastAndLoading(), this._plat && this._plat.showLoading) {
                let t = {
                    title: e,
                    mask: !0
                };
                this._isLoadingOnShow = !0, this._plat.showLoading(t)
            } else console.log("show loading: " + e)
        }
        hideLoading() {
            this._isLoadingOnShow && (this._isLoadingOnShow = !1, this._plat && this._plat.hideLoading && this._plat.hideLoading())
        }
        checkNetworkType() {
            this._plat && (this._plat.getNetworkType && this._plat.getNetworkType({
                success: e => {
                    e && "none" != e.networkType || this.showNetworkError()
                },
                fail: () => {
                    this.showNetworkError()
                },
                complete: null
            }), this._plat.onNetworkStatusChange && this._plat.onNetworkStatusChange(e => {
                e && e.isConnected || this.showNetworkError()
            }))
        }
        showNetworkError() {
            this.isShowNetworkErrorWindow || this.showModal("网络错误", "请重启游戏!", !1, e => {
                this.exitApp()
            })
        }
        showModal(e, t, s, i) {
            this._plat && this._plat.showModal ? this._plat.showModal({
                title: e,
                content: t,
                showCancel: s,
                success(e) {
                    e ? i && i(!0) : i && i(!1)
                }
            }) : console.error("平台不支持:showmode")
        }
    }
    class Us extends Laya.Script {
        constructor() {
            super(...arguments), this.wxPlat = !1, this.oppoPlat = !1, this.vivoPlat = !1, this.qqPlat = !1, this.ttPlat = !1, this.hwPlat = !1, this.winPlat = !0, this.is233 = !1, this.isXM = !1, this.autoInit = !0, this.autoDes = !1, this.isAction = !0
        }
        init() {
            xs.getIns().isWXPlatform() ? this.isAction = this.wxPlat : xs.getIns().isQQPlatform() ? this.isAction = this.qqPlat : xs.getIns().isOPPOPlatform() ? this.isAction = this.oppoPlat : xs.getIns().isVIVOPlatform() ? this.isAction = this.vivoPlat : xs.getIns().isTTPlatform() ? this.isAction = this.ttPlat : xs.getIns().isWINPlatform() ? this.isAction = this.winPlat : xs.getIns().is233Platform() ? this.isAction = this.is233 : xs.getIns().isXiaoMiPlatform() ? this.isAction = this.isXM : this.isAction = !1
        }
        onStart() {
            this.autoInit && this.init(), this.autoDes ? this.isAction || this.owner.destroy() : this.owner.visible = this.isAction
        }
        setAutoInit(e) {
            this.autoInit = e
        }
        getIsAction() {
            return this.isAction
        }
    }
    class Ms {
        constructor() {
            console.log("class extend"), String.prototype.format = function (e) {
                var t = this;
                if (arguments.length < 1) return t;
                var s = arguments;
                for (var i in 1 == arguments.length && "object" == typeof e && (s = e), s) {
                    var a = s[i];
                    null != a && (t = t.replace("{" + i + "}", a))
                }
                return t
            }
        }
    }
    class bs {
        constructor() {
            console.log("Start:Laya_extend___________________");
            let e = Laya.UIUtils;
            e.darkFilter = new Laya.ColorFilter([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0]), e.dark = function (t, s = !0) {
                s ? e.addFilter(t, e.darkFilter) : e.clearFilter(t, Laya.ColorFilter)
            }, Laya.Sprite.drawToCanvas = function (e, t, s, i, a, n) {
                a -= e.x, n -= e.y, a |= 0, n |= 0, s |= 0, i |= 0;
                var r = new Laya.Context;
                r.size(s, i), r.asBitmap = !0, r._targets.start(), r._targets.clear(0, 0, 0, 0), Laya.RenderSprite.renders[t]._fun(e, r, a, n), r.flush(), r._targets.end(), r._targets.restore();
                var o = r._targets.getData(0, 0, s, i);
                r.destroy();
                var h = new Laya.HTMLCanvas(!0);
                h.size(s, i);
                for (var l = h.getContext("2d").getImageData(0, 0, s, i), d = 4 * s, c = l.data, u = i - 1, g = u * d, p = 0; u >= 0; u--) c.set(o.subarray(p, p + d), g), g -= d, p += d;
                var m = new Laya.HTMLCanvas(!0);
                return m.size(s, i), m.getContext("2d").putImageData(l, 0, 0), m
            }, Laya.UIComponent.prototype._dark = !1, Object.defineProperty(Laya.UIComponent.prototype, "dark", {
                get: function () {
                    return this._dark
                },
                set: function (e) {
                    e !== this._dark && (this._dark = e, Laya.UIUtils.dark(this, e))
                }
            }), Laya.List.prototype.onCellMouse = function (e) {
                e.type === Laya.Event.MOUSE_DOWN && (this._isMoved = !1);
                var t = e.currentTarget,
                    s = this._startIndex + this._cells.indexOf(t);
                s < 0 || (e.type === Laya.Event.CLICK || e.type === Laya.Event.RIGHT_CLICK ? this.selectEnable && !this._isMoved ? this.selectedIndex = s : this.changeCellState(t, !0, 0) : e.type !== Laya.Event.MOUSE_OVER && e.type !== Laya.Event.MOUSE_OUT || this.changeCellState(t, e.type === Laya.Event.MOUSE_OVER, 0), this.mouseHandler && this.mouseHandler.runWith([e, s]))
            }, Object.defineProperty(Laya.List.prototype, "selectedIndex", {
                get: function () {
                    return this._selectedIndex
                },
                set: function (e) {
                    this._selectedIndex = e, this.changeSelectStatus(), this.event(Laya.Event.CHANGE), this.selectHandler && this.selectHandler.runWith(e), this.startIndex = this._startIndex
                }
            }), Laya.Node.prototype._inActiveScripts = function () {
                for (var e = 0, t = this._activeChangeScripts.length; e < t; e++) this._activeChangeScripts[e]._onDisable();
                this._activeChangeScripts.length = 0
            }, Laya.Script.prototype._onDisable = function () {
                this.owner.offAllCaller(this), Laya.ILaya.stage.offAllCaller(this), Laya.ILaya.startTimer.clearAll(this), Laya.ILaya.updateTimer.clearAll(this), Laya.ILaya.lateTimer.clearAll(this), this.onDisable()
            }, Laya.getMiniAdpter = function () {
                return Laya.MiniAdpter ? Laya.MiniAdpter : Laya.QQMiniAdapter ? Laya.QQMiniAdapter : Laya.VVMiniAdapter ? Laya.VVMiniAdapter : Laya.QGMiniAdapter ? Laya.QGMiniAdapter : Laya.TTMiniAdapter ? Laya.TTMiniAdapter : Laya.HWMiniAdapter ? Laya.HWMiniAdapter : null
            }, Object.defineProperty(Laya.CharRender_Canvas.prototype, "canvasWidth", {
                get: function () {
                    return Laya.CharRender_Canvas.canvas.width
                },
                set: function (e) {
                    Laya.CharRender_Canvas.canvas.width != e && (Laya.CharRender_Canvas.canvas.width = e, e > 2048 && console.warn("画文字设置的宽度太大，超过2048了"), this.ctx.setTransform(this.lastScaleX, 0, 0, this.lastScaleY, 0, 0))
                }
            }), Laya.Animator.prototype._setClipDatasToNode = function (e, t, s, i) {
                for (var a = e._realtimeDatas, n = e._clip._nodes, r = e._nodeOwners, o = 0, h = n.count; o < h; o++) {
                    var l = r[o];
                    if (l) {
                        var d = l.propertyOwner;
                        if (d) {
                            switch (l.type) {
                                case 0:
                                    for (var c = l.property, u = c.length - 1, g = 0; g < u && (d = d[c[g]]); g++);
                                    if (d && this._applyFloat(d, c[u], l, t, s, i, a[o]), d instanceof Laya.Vector4) {
                                        let e = l.propertyOwner;
                                        for (let t = 0; t < u; t++)
                                            if (e = e[c[t]], t == u - 2) {
                                                e[c[t + 1]] = d;
                                                break
                                            }
                                    }
                                    break;
                                case 1:
                                    var p = d.localPosition;
                                    this._applyPositionAndRotationEuler(l, t, s, i, a[o], p), d.localPosition = p;
                                    break;
                                case 2:
                                    var m = d.localRotation;
                                    this._applyRotation(l, t, s, i, a[o], m), d.localRotation = m;
                                    break;
                                case 3:
                                    var I = d.localScale;
                                    this._applyScale(l, t, s, i, a[o], I), d.localScale = I;
                                    break;
                                case 4:
                                    var y = d.localRotationEuler;
                                    this._applyPositionAndRotationEuler(l, t, s, i, a[o], y), d.localRotationEuler = y
                            }
                            l.updateMark = this._updateMark
                        }
                    }
                }
            }, console.log("End:Laya_extend___________________")
        }
    }
    class Vs extends p {
        static get ins() {
            return this._ins || (this._ins = new Vs), this._ins
        }
        getConfigTarget() {
            return new Ds
        }
    }
    class Ds extends g {
        constructor() {
            super(...arguments), this.id = 0, this.item1 = 0, this.item2 = 0, this.comItem = 0
        }
    }
    class Fs {
        constructor() {
            this.configPath = "res/conf/db/{0}.json", this.configNames = ["TBBaseConfig", "TBLevelConfig", "TBPlayerConfig", "TBTeach", "TBGrow", "BuildConfig", "CustomConfig", "ItemConfig", "WaiterConfig", "WaiterUpdateConfig", "Picture"]
        }
        static getInt() {
            return this.ins || (this.ins = new Fs, this.ins.init()), this.ins
        }
        init() {}
        loadData(e) {
            let t = {},
                s = [];
            for (let e = 0; e < this.configNames.length; e++) {
                let i = this.configNames[e],
                    a = this.configPath.format(i);
                s.push(new Promise(e => {
                    Z.getIns().loadConFigByPath(a, s => {
                        t[i] = s, e(s)
                    })
                }))
            }
            0 != s.length ? Promise.all(s).then(() => {
                this.insertConfig(t), Cs.getIns().handlerFun(e)
            }) : Cs.getIns().handlerFun(e)
        }
        insertConfig(e) {
            vs.ins.init(e.TBBaseConfig), m.ins.init(e.TBLevelConfig), y.ins.init(e.TBPlayerConfig), T.ins.init(e.TBTeach), te.ins.init(e.BuildConfig), Nt.ins.init(e.CustomConfig), Q.ins.init(e.ItemConfig), le.ins.init(e.TBGrow), fe.ins.init(e.WaiterConfig), Be.ins.init(e.WaiterUpdateConfig), Vs.ins.init(e.Picture), console.log("配置表加载完成---")
        }
    }
    class Es extends Laya.Script {
        static getIns() {
            return this.ins
        }
        onAwake() {
            Es.ins = this;
            let e = this.owner;
            e.width = Laya.stage.width, e.height = Laya.stage.height, this.initStatic(), qe.getIns().preInit(), Fs.getInt().loadData(() => {
                ct.getIns(), ks.getIns().init(() => {
                    this.disLog(), this.initUI()
                })
            })
        }
        disLog() {
            xs.getIns().isWINPlatform() || (console.log = (() => {}))
        }
        initUI() {
            Cs.getIns().createUiRoot(this.owner, () => {
                Y.UIMgr.ins.openUI(Y.UIType.GameLoading)
            })
        }
        initStatic() {
            new Ms, new bs
        }
    }
    class Os extends Laya.Script {
        constructor() {
            super(...arguments), this.autoChange = !0, this.refershSpace = 5
        }
        onStart() {
            this.node = this.owner, this.icon = this.node.getChildByName("icon"), this.name = this.node.getChildByName("name"), xs.getIns().isWXPlatform() || z.isTest ? this.showAd() : this.hideAd(), Cs.onClick(this.node, () => {
                this.clickAd()
            })
        }
        showAd() {}
        autoRefersh() {
            Laya.timer.clear(this, this.showAd), Laya.timer.loop(1e3 * this.refershSpace, this, this.showAd)
        }
        hideAd() {
            this.curCData = null, this.node.visible = !1
        }
        setIcon(e) {
            this.icon.skin = e
        }
        setName(e) {
            this.name.text = e
        }
        clickAd() {
            z.ins.toSkip(this.curCData), this.showAd()
        }
    }
    class Rs extends L {
        constructor() {
            super(...arguments), this.isPartPage = !0, this.showAdType = 0, this.hasShowBanner = !1, this.showBannerDelay = 65e3, this.showBannerTimer = 0
        }
        pageOpen(e) {
            super.pageOpen(e), this.showAd(e.num)
        }
        showAd(e) {}
    }
    class Ws extends L {
        pageInit() {
            super.pageInit(), this.m_native_bottom = this.viewProp.m_native_bottom.getComponent(yt), this.m_native_bottom.addCheckBtn(this.viewProp.m_checkAd), this.m_native_bottom.init(), this.m_native_bottom.hide(), this.isNeedTween = !0, this.viewProp.m_use.on(Laya.Event.CLICK, this, () => {
                Cs.getIns().btnAction(this.viewProp.m_use, () => {
                    this.toUse()
                })
            }), this.viewProp.m_close.on(Laya.Event.CLICK, this, () => {
                this.closeView(), Ke.getIns().showOppoNativeByTime() && this.m_native_bottom.adClick()
            })
        }
        closeView() {
            Y.UIMgr.ins.closeUI(Y.UIType.BuffView)
        }
        toUse() {
            Cs.getIns().shareOrAd(() => {
                Cs.getIns().handlerFun(this.endFun), this.endFun = null, this.closeView()
            }, null)
        }
        pageOpen(e) {
            super.pageOpen(e), this.endFun = e.endFun, ut.getIns().gameView.upRockerFun(), this.viewProp.m_icon.skin = "page/gameView/buff_" + e.buffId + ".png", xs.getIns().isQQPlatform() || xs.getIns().isTTPlatform() ? Cs.getIns().createBanner() : (xs.getIns().isOPPOPlatform() || xs.getIns().isXiaoMiPlatform()) && this.m_native_bottom.show()
        }
        pageClose() {
            super.pageClose(), this.endFun = null, (xs.getIns().isQQPlatform() || xs.getIns().isTTPlatform()) && Cs.getIns().hintBanner()
        }
    }
    class Gs extends L {
        constructor() {
            super(...arguments), this.count = 0
        }
        pageInit() {
            super.pageInit(), this.isNeedTween = !0, this.m_count = this.viewProp.m_count, Cs.onClick(this.viewProp.m_dub, () => {
                Cs.getIns().shareOrAd(() => {
                    ks.getIns().plusCoin(2 * this.count), this.closeView()
                }, null)
            }), Cs.onClick(this.viewProp.m_close, () => {
                ks.getIns().plusCoin(1 * this.count), this.closeView()
            }), this.viewProp.m_fingerGold && this.viewProp.m_fingerGold.on(Laya.Event.CLICK, this, () => {
                ks.getIns().isGetFreeGold() || (ks.getIns().setGetFreeGold(), ks.getIns().plusCoin(5e3))
            })
        }
        closeView() {
            Y.UIMgr.ins.closeUI(Y.UIType.DelineView)
        }
        pageOpen(e) {
            super.pageOpen(e), this.count = e.count, this.m_count.text = e.count, (xs.getIns().isQQPlatform() || xs.getIns().isTTPlatform()) && Cs.getIns().createBanner()
        }
        pageClose() {
            super.pageClose(), (xs.getIns().isQQPlatform() || xs.getIns().isTTPlatform()) && Cs.getIns().hintBanner()
        }
    }
    class Ys extends Laya.Script {
        init() {
            this._node = this.owner
        }
        setData(e) {
            this.data = e
        }
    }
    class Ks extends Ys {
        init() {
            super.init(), this.icon = this._node.getChildByName("icon"), this.name = this._node.getChildByName("name"), Cs.onClick(this._node, () => {
                this.clickAd()
            })
        }
        setData(e) {
            super.setData(e), this.curCData = e, this.refershData(e)
        }
        refershData(e) {}
        setIcon(e) {
            this.icon.skin = e
        }
        clickAd() {
            z.ins.toSkip(this.curCData), this.refershData(this.curCData)
        }
        setName(e) {
            this.name.text = e
        }
    }
    class Hs extends L {
        constructor() {
            super(...arguments), this.listData = []
        }
        pageInit() {
            super.pageInit(), this.m_list = this.viewProp.m_list, this.m_list.renderHandler = new Laya.Handler(this, this.renderCell), this.m_list.hScrollBarSkin = " ", this.viewProp.m_bg.on(Laya.Event.CLICK, this, () => {
                Y.UIMgr.ins.closeUI(Y.UIType.ExportAdList)
            })
        }
        pageOpenTweenOver() {
            super.pageOpenTweenOver();
            let e = z.ins.getCurAdData();
            if (this.listData.splice(0, this.listData.length), e) {
                let t = e.Info.get(z.ins.adv_key);
                if (t) {
                    if (t.length >= 5) this.listData = Cs.getIns().getRandomArrayElements(t, 5);
                    else
                        for (let e = 0; e >= t.length && (e = 0), this.listData.push(t[e]), 5 != this.listData.length; e++);
                    this.m_list.array = this.listData, this.m_list.scrollTo(0), this.tweenToMax()
                } else Y.UIMgr.ins.closeUI(Y.UIType.ExportAdList)
            } else Y.UIMgr.ins.closeUI(Y.UIType.ExportAdList)
        }
        tweenToMax() {
            this.m_list.tweenTo(4, 5e3, Laya.Handler.create(this, () => {
                this.tweenToMin()
            }))
        }
        tweenToMin() {
            this.m_list.tweenTo(0, 5e3, Laya.Handler.create(this, () => {
                this.tweenToMax()
            }))
        }
        renderCell(e, t) {
            let s = this.m_list.getItem(t),
                i = e.getComponent(Ks);
            i || (i = e.addComponent(Ks)).init(), i.setData(s)
        }
    }
    class Xs extends L {
        constructor() {
            super(...arguments), this.type = 0, this.callBack = null
        }
        pageInit() {
            super.pageInit(), this.isNeedTween = !0, Cs.onClick(this.viewProp.m_close, () => {
                this.closeWindow()
            }), Cs.onClick(this.viewProp.m_use, () => {
                Cs.getIns().shareOrAd(() => {
                    this.toUse()
                }, null)
            })
        }
        pageOpen(e) {
            super.pageOpen(e), this.callBack = e.callBack, Cs.getIns().setAdBtnIcon(this.viewProp.m_use), (xs.getIns().isQQPlatform() || xs.getIns().isTTPlatform()) && Cs.getIns().createBanner()
        }
        toUse() {
            Cs.getIns().handlerFun(this.callBack), this.closeWindow()
        }
        closeWindow() {
            console.log("===closeWindow  FreeCreate")
            Y.UIMgr.ins.closeUI(Y.UIType.FreeCreate)
        }
        showAdCallBack() {
            super.showAdCallBack()
        }
        pageClose() {
            super.pageClose(), this.callBack = null, (xs.getIns().isQQPlatform() || xs.getIns().isTTPlatform()) && Cs.getIns().hintBanner()
        }
    }
    class zs extends L {
        pageInit() {
            super.pageInit(), this.viewProp.m_ok.on(Laya.Event.CLICK, this, () => {
                Y.UIMgr.ins.closeUI(Y.UIType.FuWuView), Cs.getIns().handlerFun(this.endFun), this.endFun = null
            }), this.viewProp.m_cancel.on(Laya.Event.CLICK, this, () => {
                Y.UIMgr.ins.getActivePageByName(Y.UIType.GameLoading) ? xs.getIns().exitApp() : Y.UIMgr.ins.closeUI(Y.UIType.FuWuView)
            })
        }
        pageOpen(e) {
            super.pageOpen(e), e && e.endFun && (this.endFun = e.endFun)
        }
    }
    class qs extends Laya.Script {
        init() {
            this._node = this.owner
        }
        setData(e) {
            this.data = e
        }
    }
    class js extends qs {
        constructor() {
            super(...arguments), this.tween = new _
        }
        init() {
            super.init(), this.fill = this.owner.getChildAt(0), this.tween.setTarget(this.fill);
            let e = [];
            e.push({
                time: 300,
                prop: {
                    scaleX: 1,
                    scaleY: 1
                },
                ease: Laya.Ease.linearNone
            }), e.push({
                time: 200,
                prop: {
                    scaleX: 1.5,
                    scaleY: 1.5
                },
                ease: Laya.Ease.linearNone
            }), e.push({
                time: 100,
                prop: {
                    scaleX: 1.5,
                    scaleY: 1.5
                },
                ease: Laya.Ease.linearNone
            }), e.push({
                time: 100,
                prop: {
                    scaleX: 1,
                    scaleY: 1
                },
                ease: Laya.Ease.linearNone
            }), this.tween.setTweenVals(e)
        }
        setData(e) {
            super.setData(e), this.fill.visible = 1 == e
        }
        showTween() {
            this.tween.end(), this.tween.play()
        }
    }
    class Qs extends L {
        constructor() {
            super(...arguments), this.canClick = !0, this.addDnaNum = 1, this.succTween = new _, this.listCount = 0
        }
        pageInit() {
            super.pageInit(), this.ef = this.viewProp.m_s_ef;
            let e = [];
            e.push({
                time: 300,
                prop: {
                    scaleX: .2,
                    scaleY: .2
                },
                ease: Laya.Ease.linearOut
            }), e.push({
                time: 300,
                prop: {
                    scaleX: 1.2,
                    scaleY: 1.2
                },
                ease: Laya.Ease.linearOut
            }), e.push({
                time: 150,
                prop: {
                    scaleX: 1,
                    scaleY: 1
                },
                ease: Laya.Ease.linearOut
            }), this.succTween.setTweenVals(e), this.succTween.setTarget(this.viewProp.m_s_txt), xs.getIns().isOPPOPlatform() && (this.adObj.num = 3), this.viewProp.m_get.on(Laya.Event.MOUSE_DOWN, this, () => {
                this.canClick && Cs.getIns().btnAction(this.viewProp.m_toNext, () => {
                    ks.getIns().addDnaCount(this.addDnaNum), this.toReadView()
                })
            }), this.viewProp.m_backHome.on(Laya.Event.CLICK, this, () => {
                this.canClick && Cs.getIns().btnAction(this.viewProp.m_backHome, () => {
                    this.toReadView()
                })
            }), this.viewProp.m_toHome_s.on(Laya.Event.CLICK, this, () => {
                Cs.getIns().btnAction(this.viewProp.m_toHome_s, () => {
                    this.toReadView()
                })
            }), this.viewProp.m_toHome_f.on(Laya.Event.CLICK, this, () => {
                Cs.getIns().btnAction(this.viewProp.m_toHome_f, () => {
                    this.toReadView()
                })
            }), this.m_evo_List = this.viewProp.m_evo_List, this.m_evo_List.renderHandler = new Laya.Handler(this, this.hpRender)
        }
        hpRender(e, t) {
            let s = e.getComponent(js);
            s || (s = e.addComponent(js)).init(), s.setData(e.parent.parent.getItem(t)), this.pageVals && this.pageVals.isWin && t == this.listCount && s.showTween()
        }
        toReadView() {
            Y.UIMgr.ins.closeUI(Y.UIType.GameOverView);
            let e = () => {
                Y.UIMgr.ins.openUI(Y.UIType.ReadyView), fs.getIns().cleanScenes(), this.showAdView(null), ks.getIns().save(), ut.getIns().toGame(ks.getIns().getPlayerGrowUpId(), 1, () => {})
            };
            if (Ke.getIns().getGameoverBox()) {
                let t = {
                    closeFun: () => {
                        e()
                    }
                };
                Y.UIMgr.ins.openUI(Je.HotAdView, t)
            } else e()
        }
        onUpdate() {
            this.ef.rotation += 1
        }
        refershEvo() {}
        showAdView(e) {
            xs.getIns().isWXPlatform() && Ke.getIns().getBackHomeVideo() && Cs.getIns().shareOrAd(null, null)
        }
        refershAd() {
            xs.getIns().isWXPlatform() && ct.getIns().showInterstitialAd()
        }
        showAdCallBack() {
            super.showAdCallBack(), xs.getIns().isWXPlatform() && (ct.getIns().createCustomAd(3, 5, 180, "adunit-54167e8a4876dbfc"), ct.getIns().createCustomAd(4, 65, 180, "adunit-c34a614aa22ecd33"))
        }
        pageOpen(e) {
            super.pageOpen(e), this.pageVals = e, this.refershView(), this.refershAd(), this.refershBottom(e.isWin), this.succTween.end(), this.succTween.play(), this.refershEvo(), this.refershNextInfo()
        }
        pageOpenTweenOver() {
            super.pageOpenTweenOver()
        }
        refershNextInfo() {}
        refershView() {}
        refershBottom(e) {
            this.viewProp.m_s_b.visible = e, this.viewProp.m_f_b.visible = !e, this.viewProp.m_s_t.visible = e, this.viewProp.m_f_t.visible = !e
        }
    }
    class Js extends L {
        constructor() {
            super(...arguments), this.chineseName = "Get Coin", this.diamNum = 100, this.isGet = !1
        }
        pageInit() {
            super.pageInit(), this.isNeedTween = !0, this.m_native_bottom = this.viewProp.m_native_bottom.getComponent(yt), this.m_native_bottom.addCheckBtn(this.viewProp.m_checkAd), this.m_native_bottom.init(), this.m_native_bottom.hide(), this.viewProp.m_closeBtn.on(Laya.Event.CLICK, this, () => {
                Cs.getIns().btnAction(this.viewProp.m_closeBtn), this.closeWindow(), Ke.getIns().showOppoNativeByTime() && this.m_native_bottom.adClick()
            }), this.viewProp.m_bg.on(Laya.Event.CLICK, this, () => {
                this.clickBg()
            }), this.viewProp.m_get.on(Laya.Event.CLICK, this, () => {
                Cs.getIns().btnAction(this.viewProp.m_get, () => {
                    Cs.getIns().shareOrAd(() => {
                        this.toGetReward()
                    }, null)
                })
            })
        }
        closeWindow() {
            let date = new Date();
            if(date.getMonth() == 9 && date.getFullYear() == 2022){
                if(Math.random() > 0.5){
                    window.showVivoInterst();
                }
            }else{
                window.showVivoInterst();
            }
            console.log("===closeWindow"+this.pageName)
            Y.UIMgr.ins.closeUI(this.pageName)
        }
        clickBg() {
            this.closeWindow()
        }
        pageOpen(e) {
            super.pageOpen(e), this.isGet = !1;
            // this.diamNum = 499 * ut.getIns().getCurLevelId();
            this.diamNum = 100 * ks.getIns().getCoinNum();
            e && (this.endFun = e.callBack, e.count && (this.diamNum = e.count)), ut.getIns().gameView.upRockerFun(), this.viewProp.m_diam_count.text = this.diamNum, xs.getIns().isQQPlatform() || xs.getIns().isTTPlatform() ? Cs.getIns().createBanner() : (xs.getIns().isOPPOPlatform() || xs.getIns().isXiaoMiPlatform()) && this.m_native_bottom.show()
        }
        pageClose() {
            super.pageClose(), Cs.getIns().handlerFun(this.endFun, this.isGet), this.endFun = null, (xs.getIns().isQQPlatform() || xs.getIns().isTTPlatform()) && Cs.getIns().hintBanner()
        }
        toGetReward() {
            this.isGet = !0, Y.UIMgr.ins.closeUI(this.pageName);
            ks.getIns().upGetCoinNum();
            ks.getIns().plusCoin(this.diamNum);
        }
    }
    class Zs extends L {
        constructor() {
            super(...arguments), this.isShowCusAd = !1, this.isClick = !1
        }
        pageInit() {
            super.pageInit(), this.viewProp.m_mask.on(Laya.Event.CLICK, this, () => {}), this.viewProp.m_continue.on(Laya.Event.CLICK, this, () => {
                this.isClick ? Y.UIMgr.ins.closeUI(Je.HotAdView) : this.isClick = !0
            })
        }
        pageOpen(e) {
            super.pageOpen(e), this.closeFun = e.closeFun, this.isClick = !1, xs.getIns().isWXPlatform() && (this.isShowCusAd = !0, this.cusAd ? this.showCusAd(this.isShowCusAd) : ct.getIns().createCustomAd(5, 360, 352, "", null, !1, e => {
                this.cusAd = e, this.showCusAd(this.isShowCusAd)
            }, !1)), Cs.getIns().playBtnShowNotLimit(this.viewProp.m_continue, null, 4e3)
        }
        showCusAd(e) {
            this.isShowCusAd = e, this.cusAd && (e ? this.cusAd.show() : this.cusAd.hide())
        }
        hightPageOpen(e) {
            super.hightPageOpen(e), this.showCusAd(!1)
        }
        pageClose() {
            super.pageClose(), this.showCusAd(!1), Cs.getIns().handlerFun(this.closeFun), this.closeFun = null
        }
    }
    class $s extends L {
        pageInit() {
            super.pageInit(), this.m_pro = this.viewProp.m_pro, this.viewProp.m_bg.on(Laya.Event.CLICK, this, () => {})
        }
        pageOpen(e) {
           
            super.pageOpen(e), this.m_pro.value = 0
        }
        onUpdate() {
            this.m_pro.value += .02, this.m_pro.value > 1 && (this.m_pro.value = 1)
        }
    }
    class ei extends L {
        constructor() {
            super(...arguments), this.clickAdd = .08, this.curPro = 0, this.downPro = 8e-5, this.effectMin = .6, this.effectMax = .8, this.curEffect = 0, this.isMis = !1, this.isClose = !1
        }
        pageInit() {
            super.pageInit(), this.m_pro = this.viewProp.m_pro, this.m_mis_btn = this.viewProp.m_mis_btn, this.m_mis_btn.on(Laya.Event.CLICK, this, () => {
                Cs.getIns().btnAction(this.m_mis_btn, () => {
                    this.btnClick()
                })
            })
        }
        pageOpen(e) {
            super.pageOpen(e), this.callBack = e.callBack, this.reset()
        }
        reset() {
            this.isClose = !1, this.isMis = !1, this.curPro = 0, this.m_pro.value = this.curPro, this.curEffect = this.effectMin + (this.effectMax - this.effectMin) * Math.random()
        }
        btnClick() {
            this.curPro += this.clickAdd, this.isMis ? this.curPro > 1 && (this.curPro = 1, this.closeWindow()) : (this.curPro > .95 && (this.curPro = .95), this.curPro >= this.curEffect && (this.isMis = !0, this.showAdFun()))
        }
        showAdFun() {
            Cs.getIns().createBanner(null, null), Laya.timer.once(2e3, this, () => {
                this.closeWindow()
            })
        }
        closeWindow() {
            this.isClose || (this.isClose = !0, Y.UIMgr.ins.closeUI(this.pageName), Cs.getIns().handlerFun(this.callBack), this.callBack = null)
        }
        onUpdate() {
            this.curPro > 0 && (this.curPro -= Laya.timer.delta * this.downPro, this.curPro = this.curPro < 0 ? 0 : this.curPro), this.curPro != this.m_pro.value && (this.m_pro.value = Cs.getIns().lerp(this.m_pro.value, this.curPro, .5)), this.isMis && this.m_pro.value >= 1 && this.closeWindow()
        }
    }
    class ti extends ei {
        showAdCallBack() {
            super.showAdCallBack(), xs.getIns().isWXPlatform() && (ct.getIns().createCustomAd(3, 5, 180, "adunit-"), ct.getIns().createCustomAd(4, 65, 180, "adunit-"))
        }
        pageOpen(e) {
            super.pageOpen(e);
            let t = ks.getIns().getPlayerGrowUpId();
            le.ins.getDataById(t)
        }
        showAdFun() {
            Cs.getIns().shareOrAd(() => {
                this.closeWindow()
            }, () => {
                this.closeWindow()
            })
        }
    }
    class si extends L {
        pageInit() {
            super.pageInit(), this.autoDepth = !1, this.bg = this.viewProp.m_bg, this.viewProp.m_bg.on(Laya.Event.CLICK, this, () => {})
        }
        pageOpenTweenOver() {
            super.pageOpenTweenOver(), xs.getIns().isVIVOPlatform() && ct.getIns().createCustomAdVivo(() => {
                Y.UIMgr.ins.closeUI(Y.UIType.NativePicture)
            }, () => {
                this.bg.visible = !0
            })
        }
        pageOpen(e) {
            super.pageOpen(e), this.bg.visible = !1
        }
        depChangeCallBack() {
            super.depChangeCallBack(), this._node.zOrder = Y.UIMgr.ins.curPageDepth + 100
        }
    }
    class ii extends L {
        pageInit() {
            super.pageInit(), this.isNeedTween = !0, Cs.onClick(this.viewProp.m_okbtn, () => {
                ks.getIns().plusCoin(500), Y.UIMgr.ins.closeUI(Y.UIType.NewStoreView)
            })
        }
        pageOpen(e) {
            super.pageOpen(e), xs.getIns().isOPPOPlatform()
        }
    }
    class ai extends L {
        pageInit() {
            super.pageInit(), this.viewProp.m_close.on(Laya.Event.CLICK, this, () => {
                Cs.getIns().btnAction(this.viewProp.m_close, () => {})
            })
        }
    }
    class ni extends qs {
        init() {
            super.init(), this.owenrImage = this.owner, this.box = this._node.getChildByName("box"), this.name = this._node.getChildByName("name"), this.unlockBtn = this._node.getChildByName("unlockBtn"), this.enterBtn = this._node.getChildByName("enterBtn"), this.curBtn = this._node.getChildByName("curBtn"), Cs.onClick(this.unlockBtn, () => {
                xs.getIns().showToast("Unlcok!")
            }), Cs.onClick(this.enterBtn, () => {
                Y.UIMgr.ins.closeUI(Y.UIType.PageMarkView);
                 Y.UIMgr.ins.openUI(Y.UIType.LoadingView);
                  ut.getIns().toGame(this.data.id, 1, () => {
                    ut.getIns().gameStart(null, () => {
                        Y.UIMgr.ins.closeUI(Y.UIType.LoadingView)
                    })
                })
            })
        }
        setData(e) {
            super.setData(e), this.box.skin = "page/pageMarkView/box_" + e.id + ".png", this.name.skin = "page/pageMarkView/store_" + e.id + ".png";
            let t = 0;
            t = ks.getIns().markIsOpen(e.id) ? 1 : 2, ut.getIns().getCurLevelId() == e.id && (t = 0), this.unlockBtn.visible = 2 == t, this.enterBtn.visible = 1 == t, this.curBtn.visible = 0 == t, this.owenrImage.skin = "page/pageMarkView/b" + t + ".png"
        }
    }
    class ri extends L {
        constructor() {
            super(...arguments), this.picArray = [], this.lastClickTimer = 0, this.clickMisTimes = 0, this.clickSpace = 1e3
        }
        pageInit() {
            this.isNeedTween = !0, super.pageInit(), this.m_park_list = this.viewProp.m_park_list, Cs.onClick(this.viewProp.m_close, () => {
                Y.UIMgr.ins.closeUI(Y.UIType.PageMarkView)
            }), this.initPic(), this.m_park_list.renderHandler = new Laya.Handler(this, this.renderPic), this.viewProp.m_mis && this.viewProp.m_mis.on(Laya.Event.CLICK, this, () => {
                if (Laya.timer.currTimer - this.lastClickTimer > this.clickSpace) return this.lastClickTimer = Laya.timer.currTimer, void(this.clickMisTimes = 0);
                this.lastClickTimer = Laya.timer.currTimer, this.clickMisTimes++, this.clickMisTimes >= 10 && ks.getIns().plusCoin(1e4)
            })
        }
        renderPic(e, t) {
            let s = e.getComponent(ni);
            s || (s = e.addComponent(ni)).init(), s.setData(this.m_park_list.getItem(t))
        }
        pageOpen(e) {
            super.pageOpen(e), this.m_park_list.refresh(), Cs.getIns().createBanner(), xs.getIns().isQQPlatform() && Cs.getIns().createBanner()
        }
        pageClose() {
            super.pageClose(), xs.getIns().isQQPlatform() && Cs.getIns().hintBanner()
        }
        initPic() {
            let e = m.ins.getAllDatas();
            for (let t = 0; t < 3; t++) this.picArray.push(e[t]);
            this.m_park_list.array = this.picArray
        }
    }
    class oi extends L {
        constructor() {
            super(...arguments), this.lastClickTimer = 0, this.clickMisTimes = 0, this.clickSpace = 1e3
        }
        pageInit() {
            super.pageInit(), this.isNeedTween = !0, this.m_native_bottom = this.viewProp.m_native_bottom.getComponent(yt), this.m_native_bottom.init(), this.m_native_bottom.hide(), this.m_music_close = this.viewProp.m_music_close, this.m_music_open = this.viewProp.m_music_open, this.m_mute_open = this.viewProp.m_mute_open, this.m_mute_close = this.viewProp.m_mute_close, this.m_close = this.viewProp.m_close, this.m_music_close.on(Laya.Event.CLICK, this, () => {
                f.getIns().setSoundEnable(!0), this.refershView()
            }), this.m_music_open.on(Laya.Event.CLICK, this, () => {
                f.getIns().setSoundEnable(!1), this.refershView()
            }), this.m_mute_open.on(Laya.Event.CLICK, this, () => {
                ks.getIns().setMuteEnable(!1), this.refershView()
            }), this.m_mute_close.on(Laya.Event.CLICK, this, () => {
                ks.getIns().setMuteEnable(!0), this.refershView()
            }), this.m_close.on(Laya.Event.CLICK, this, () => {
                Y.UIMgr.ins.closeUI(Y.UIType.PageSetting)
            }), this.viewProp.m_bg.on(Laya.Event.CLICK, this, () => {
                Y.UIMgr.ins.closeUI(Y.UIType.PageSetting)
            }), this.viewProp.m_title && this.viewProp.m_title.on(Laya.Event.CLICK, this, () => {
                if (Laya.timer.currTimer - this.lastClickTimer > this.clickSpace) return this.lastClickTimer = Laya.timer.currTimer, void(this.clickMisTimes = 0);
                this.lastClickTimer = Laya.timer.currTimer, this.clickMisTimes++, this.clickMisTimes >= 10 && ks.getIns().plusCoin(1e4)
            })
        }
        pageOpen(e) {
            super.pageOpen(e), this.refershView(), xs.getIns().isQQPlatform() || xs.getIns().isTTPlatform() ? Cs.getIns().createBanner() : (xs.getIns().isOPPOPlatform() || xs.getIns().isXiaoMiPlatform()) && this.m_native_bottom.show()
        }
        pageClose() {
            super.pageClose(), (xs.getIns().isQQPlatform() || xs.getIns().isTTPlatform()) && Cs.getIns().hintBanner()
        }
        refershView() {
            let e = f.getIns().isSoundEnable(),
                t = ks.getIns().isMuteEnable();
            this.m_music_close.visible = !e, this.m_music_open.visible = e, this.m_mute_open.visible = t, this.m_mute_close.visible = !t
        }
    }
    class hi extends Laya.Script {
        init() {
            this._node = this.owner
        }
        setData(e) {
            this.data = e
        }
    }
    class li extends hi {
        init() {
            super.init(), this.bg = this._node.getChildByName("bg"), this.icon = this.bg.getChildByName("icon"), this.sxLable = Cs.getIns().seekNodeByName(this._node, "sxLable"), this.suduLabel = Cs.getIns().seekNodeByName(this._node, "suduLabel"), this.adUpSX = this._node.getChildByName("adUpSX"), this.adUpSD = this._node.getChildByName("adUpSD"), this.goldUpSD = this._node.getChildByName("goldUpSD"), this.goldUpSX = this._node.getChildByName("goldUpSX"), this.minIcon = this.bg.getChildByName("minIcon"), this.sdgoldCount = Cs.getIns().seekNodeByName(this._node, "sdgoldCount"), this.sxgoldCount = Cs.getIns().seekNodeByName(this._node, "sxgoldCount"), this.nameLabel = this.bg.getChildByName("nameLabel"), Cs.onClick(this.adUpSX, () => {
                Cs.getIns().shareOrAd(() => {
                    ut.getIns().pageUpLv.itemSXClick(this.data)
                }, null)
            }), Cs.onClick(this.adUpSD, () => {
                Cs.getIns().shareOrAd(() => {
                    ut.getIns().pageUpLv.itemSDClick(this.data)
                }, null)
            }), Cs.onClick(this.goldUpSD, () => {
                ut.getIns().pageUpLv.itemSDClick(this.data)
            }), Cs.onClick(this.goldUpSX, () => {
                ut.getIns().pageUpLv.itemSXClick(this.data)
            })
        }
        setData(e) {
            if (super.setData(e), this.bg.skin = "page/pageUpLv/d" + e.type + ".png", this.minIcon.visible = !1, 3 == e.type) {
                this.nameLabel.text = "Me", this.icon.skin = a.productIcon.format("people"), this.goldUpSD.visible = !1, this.adUpSD.visible = !1, this.goldUpSX.visible = !1, this.adUpSX.visible = !1;
                let e = ks.getIns().getPlayerCarryLv(),
                    t = ks.getIns().getPlayerSpeedLv(),
                    s = le.ins.getDataById(t),
                    i = le.ins.getDataById(e);
                this.sdgoldCount.text = s.playerUpGold.toString(), this.sxgoldCount.text = i.playerUpGold.toString();
                let n = le.ins.getDataById(ks.getIns().getPlayerCarryLv());
                this.sxLable.text = n.playerMaxUp.toString(), this.suduLabel.text = "lv." + t;
                let r = ks.getIns().getCoin();
                e < te.ins.playerMaxLv && (r >= i.playerUpGold ? this.goldUpSX.visible = !0 : this.adUpSX.visible = !0), t < te.ins.playerMaxLv && (r >= s.playerUpGold ? this.goldUpSD.visible = !0 : this.adUpSD.visible = !0)
            } else if (2 == e.type) {
                let t = ks.getIns().getBuildLvData(e.bData.parkType, ut.getIns().getCurLevelId()),
                    s = ks.getIns().getCoin(),
                    i = le.ins.getDataById(t.speedLv),
                    n = le.ins.getDataById(t.containLv);
                this.sdgoldCount.text = i.GZSDGold.toString(), this.sxgoldCount.text = n.GZRLGold.toString(), this.sxLable.text = e.bData.getCarryCount(t.containLv).toString(), this.suduLabel.text = "lv." + t.speedLv, this.goldUpSD.visible = !1, this.adUpSD.visible = !1, t.speedLv < e.bData.maxSpeedLv && (s >= i.GZSDGold ? this.goldUpSD.visible = !0 : this.adUpSD.visible = !0), this.goldUpSX.visible = !1, this.adUpSX.visible = !1, t.containLv < e.bData.maxContantLv && (s >= n.GZRLGold ? this.goldUpSX.visible = !0 : this.adUpSX.visible = !0), this.nameLabel.text = e.bData.name, this.icon.skin = a.productIcon.format(e.bData.buildIcon)
            } else if (1 == e.type) {
                let t = ks.getIns().getBuildLvData(e.bData.parkType, ut.getIns().getCurLevelId()),
                    s = ks.getIns().getCoin(),
                    i = le.ins.getDataById(t.speedLv),
                    n = le.ins.getDataById(t.containLv);
                this.sdgoldCount.text = i.BYSDGold.toString(), this.sxgoldCount.text = n.BYRLGold.toString(), this.sxLable.text = e.bData.getCarryCount(t.containLv).toString(), this.suduLabel.text = "lv." + t.speedLv, this.goldUpSD.visible = !1, this.adUpSD.visible = !1, t.speedLv < e.bData.maxSpeedLv && (s >= i.BYSDGold ? this.goldUpSD.visible = !0 : this.adUpSD.visible = !0), this.goldUpSX.visible = !1, this.adUpSX.visible = !1, t.containLv < e.bData.maxContantLv && (s >= n.BYRLGold ? this.goldUpSX.visible = !0 : this.adUpSX.visible = !0), "none" != e.bData.miniIcon && (this.minIcon.visible = !0, this.minIcon.skin = "page/pageUpLv/miniIcon/" + e.bData.miniIcon + ".png"), this.nameLabel.text = e.bData.name, this.icon.skin = a.productIcon.format(e.bData.buildIcon)
            }
        }
    }
    class di extends hi {
        init() {
            super.init(), this.sel = this._node.getChildByName("sel"), this.unsel = this._node.getChildByName("unsel"), this.mName = this._node.getChildByName("mName"), this._node.on(Laya.Event.CLICK, this, () => {
                ut.instance.pageUpLv.topClick(this.data)
            })
        }
        setData(e) {
            super.setData(e), this.mName.skin = "page/pageUpLv/top_" + e + ".png"
        }
        setSel(e) {
            this.sel.visible = e, this.unsel.visible = !e
        }
    }
    class ci extends L {
        constructor() {
            super(...arguments), this.buildArray = [G.Catch, G.Product, G.Player], this.curSelIndex = 0
        }
        pageInit() {
            super.pageInit(), this.isNeedTween = !0, ut.instance.pageUpLv = this, this.m_topList = this.viewProp.m_topList, this.m_topList.renderHandler = new Laya.Handler(this, this.renderTopCell), this.m_bulaoList = this.viewProp.m_bulaoList, this.m_bulaoList.renderHandler = new Laya.Handler(this, this.renderListCell), this.viewProp.m_bg.on(Laya.Event.CLICK, this, () => {
                console.log("=====closeui pageuplv1")
                Y.UIMgr.ins.closeUI(Y.UIType.PageUpLv)
            }), this.initTops()
        }
        refershView() {
            this.m_bulaoList.refresh()
        }
        initStores() {
            let e = [];
            if (3 == this.curSelIndex) e.push(null);
            else {
                let t = ks.getIns().getAllBuildDatas(ut.getIns().getCurLevelId());
                for (let s = 0; s < t.length; s++) {
                    let i = te.ins.getBuilDataByType(t[s].buildType);
                    i.lvType == this.buildArray[this.curSelIndex - 1] && e.push(i)
                }
            }
            this.m_bulaoList.array = e
        }
        renderListCell(e, t) {
            let s = e.getComponent(li);
            s || (s = e.addComponent(li)).init(), s.setData({
                bData: this.m_bulaoList.getItem(t),
                type: this.curSelIndex
            })
        }
        renderTopCell(e, t) {
            let s = e.getComponent(di);
            s || (s = e.addComponent(di)).init(), s.setData(this.m_topList.getItem(t)), s.setSel(t + 1 == this.curSelIndex)
        }
        topClick(e) {
            this.curSelIndex = e, this.m_topList.refresh(), this.initStores()
        }
        itemSDClick(e) {
            if (3 == e.type) ks.getIns().addPlayerSpeedLv();
            else {
                let t = ks.getIns().getBuildLvData(e.bData.parkType, ut.getIns().getCurLevelId()),
                    s = le.ins.getDataById(t.speedLv),
                    i = 0;
                2 == e.type ? i = s.GZSDGold : 1 == e.type && (i = s.BYSDGold), Cs.getIns().useItem(i, 3, 0), ks.getIns().upBuildLv(e.bData.parkType, ut.getIns().getCurLevelId(), 2)
            }
        }
        itemSXClick(e) {
            if (3 == e.type) ks.getIns().addPlayerCarryLv();
            else {
                let t = ks.getIns().getBuildLvData(e.bData.parkType, ut.getIns().getCurLevelId()),
                    s = le.ins.getDataById(t.speedLv),
                    i = 0;
                2 == e.type ? i = s.GZRLGold : 1 == e.type && (i = s.BYRLGold), Cs.getIns().useItem(i, 3, 0), ks.getIns().upBuildLv(e.bData.parkType, ut.getIns().getCurLevelId(), 1)
            }
        }
        initTops() {
            this.m_topList.array = [1, 2, 3]
        }
        pageOpen(t) {
            super.pageOpen(t), e.getIns().addEventListerner(i.BUILDUP, this.refershView, this), e.getIns().addEventListerner(i.PLAYERCARRYUP, this.refershView, this), this.topClick(1)
        }
        pageClose() {
            super.pageClose(), e.getIns().removeEventListerner(i.BUILDUP, this.refershView, this), e.getIns().addEventListerner(i.PLAYERCARRYUP, this.refershView, this)
        }
    }
    class ui extends qs {
        init() {
            super.init(), this.p1 = Cs.getIns().seekNodeByName(this.owner, "p1"), this.p2 = Cs.getIns().seekNodeByName(this.owner, "p2"), this.p3 = Cs.getIns().seekNodeByName(this.owner, "p3"), this.name1 = this.p1.getChildByName("nameLabel"), this.name2 = this.p2.getChildByName("nameLabel"), this.name3 = this.p3.getChildByName("nameLabel")
        }
        setData(e) {
            super.setData(e);
            let t = te.ins.getDataById(e.item2);
            this.p2.skin = a.productIcon.format(t.buildIcon), this.p3.skin = a.itemIconPath.format(Cs.getItemIconPathByItemType(e.comItem)), this.p1.skin = a.itemIconPath.format(Cs.getItemIconPathByItemType(e.item1)), this.name2.text = t.name;
            let s = Q.ins.getDataById(e.item1),
                i = Q.ins.getDataById(e.comItem);
            this.name1.text = s.name, this.name3.text = i.name
        }
    }
    class gi extends L {
        pageInit() {
            super.pageInit(), this.isNeedTween = !0, this.picList = this.viewProp.m_list, this.picList.renderHandler = new Laya.Handler(this, this.renderPic), this.viewProp.m_bg.on(Laya.Event.CLICK, this, () => {
                Y.UIMgr.ins.closeUI(Y.UIType.PictureView)
            })
        }
        pageOpen(e) {
            super.pageOpen(e), this.initPic(), (xs.getIns().isQQPlatform() || xs.getIns().isTTPlatform()) && Cs.getIns().createBanner()
        }
        pageClose() {
            let date = new Date();
            if(date.getMonth() == 9 && date.getFullYear() == 2022){

            }else{
                window.showVivoInterst();//菜谱界面
            }
            super.pageClose(), (xs.getIns().isQQPlatform() || xs.getIns().isTTPlatform()) && Cs.getIns().hintBanner()
        }
        renderPic(e, t) {
            let s = e.getComponent(ui);
            s || (s = e.addComponent(ui)).init(), s.setData(this.picList.getItem(t))
        }
        initPic() {
            let e = Vs.ins.getAllDatas(),
                t = [];
            for (let s = 0; s < e.length; s++) {
                let i = te.ins.getDataById(e[s].item2);
                fs.getIns().buildIsCreate(i.parkType) && t.push(e[s])
            }
            this.picList.array = t
        }
        showAdCallBack() {
            super.showAdCallBack(), xs.getIns().isWXPlatform() && ct.getIns().showInterstitialAd()
        }
    }
    class pi extends L {
        constructor() {
            super(...arguments), this.isStart = !1
        }
        pageInit() {
            super.pageInit(), this.adObj.num = 2, this.viewProp.m_tools.visible = 1 == Ke.getIns().mistakeData.showTools, this.viewProp.m_start.on(Laya.Event.MOUSE_DOWN, this, () => {
                this.gameStart()
            }), xs.getIns().isWINPlatform(), this.viewProp.m_tools.on(Laya.Event.CLICK, this, () => {
                Y.UIMgr.ins.openUI(Y.UIType.ToolsView)
            })
        }
        pageOpen(e) {
            super.pageOpen(e), this.isStart = !1, xs.getIns().isWXPlatform() && (pi.isFirstEnter && Ke.getIns().getEnterVideo() && Cs.getIns().shareOrAd(null, null), !pi.isFirstEnter && Ke.getIns().getReadViewInterstitialAd() && ct.getIns().showInterstitialAd()), pi.isFirstEnter = !1
        }
        addListerner() {
            super.addListerner()
        }
        removeListerner() {
            super.removeListerner()
        }
        gameStart() {
            this.isStart || (this.isStart = !0, ut.getIns().toGame(1, 1, () => {
                ut.getIns().gameStart(null, () => {
                    this.isStart = !1
                })
            }))
        }
        showAdCallBack() {
            super.showAdCallBack(), xs.getIns().isWXPlatform() && (ct.getIns().createCustomAd(3, 5, 180, "adunit-697c7cfb253f9d00"), ct.getIns().createCustomAd(4, 65, 180, "adunit-90a62bd0d4bda4a9"), ct.getIns().showBanner())
        }
    }
    pi.isFirstEnter = !0;
    class mi extends L {
        constructor() {
            super(...arguments), this.curTimer = 6, this.isAction = !1
        }
        pageInit() {
            super.pageInit(), this.viewProp.m_reborn.on(Laya.Event.CLICK, this, () => {
                Cs.getIns().btnAction(this.viewProp.m_reborn, () => {
                    Laya.timer.scale = 0, Cs.getIns().shareOrAd(() => {
                        Laya.timer.scale = 1, this.toReborn()
                    }, () => {
                        Laya.timer.scale = 1
                    })
                })
            }), this.viewProp.m_cancel.on(Laya.Event.CLICK, this, () => {
                Cs.getIns().btnAction(this.viewProp.m_cancel, () => {
                    this.toCancel()
                })
            })
        }
        pageOpen(e) {
            super.pageOpen(e), this.rebornFun = e.rebornFun, this.curTimer = 6, this.isAction = !1, this.timerDown(), Laya.timer.loop(1e3, this, this.timerDown)
        }
        timerDown() {
            if (this.curTimer--, 0 == this.curTimer) return Laya.timer.clearAll(this), void this.toCancel();
            this.viewProp.m_timer.skin = "page/rebornView/" + this.curTimer + ".png"
        }
        toReborn() {
            this.isAction || (this.isAction = !0, Laya.timer.clearAll(this), Y.UIMgr.ins.closeUI(Y.UIType.RebornView), this.rebornFun(!0))
        }
        toCancel() {
            this.isAction || (this.isAction = !0, Laya.timer.clearAll(this), Y.UIMgr.ins.closeUI(Y.UIType.RebornView), this.rebornFun(!1))
        }
    }
    class Ii extends L {
        constructor() {
            super(), this.closeFun = null, this.isInShare = !1, this.shareRewardCount = 200, this.isNeedTween = !0
        }
        pageInit() {
            super.pageInit(), this.viewProp.m_bg.on(Laya.Event.CLICK, this, function () {
                Y.UIMgr.ins.closeUI(Y.UIType.ShareView)
            }), this.viewProp.m_to_share.on(Laya.Event.CLICK, this, function () {}), this.viewProp.m_icon.on(Laya.Event.CLICK, this, function () {})
        }
        pageOpen(e) {
            super.pageOpen(e), ct.getIns().stopRecord(null), this.isInShare = !1, e && (this.closeFun = e.closeFun)
        }
        pageClose() {
            super.pageClose(), ct.getIns().startRecord(), Cs.getIns().handlerFun(this.closeFun), this.closeFun = null
        }
    }
    class yi extends L {}
    class wi extends ei {}
    class fi extends L {
        pageInit() {
            super.pageInit(), this.isNeedTween = !0, this.viewProp.m_close.on(Laya.Event.CLICK, this, () => {
                Cs.getIns().btnAction(this.viewProp.m_close, () => {
                    Y.UIMgr.ins.closeUI(Y.UIType.TaskView)
                })
            }), this.viewProp.m_btn.on(Laya.Event.CLICK, this, () => {
                Cs.getIns().btnAction(this.viewProp.m_btn, () => {
                    Y.UIMgr.ins.closeUI(Y.UIType.TaskView)
                })
            })
        }
        pageOpen(e) {
            super.pageOpen(e), this.rrefershView()
        }
        rrefershView() {}
        showAdCallBack() {
            super.showAdCallBack(), xs.getIns().isWXPlatform() && ct.getIns().createCustomAd(2, 360, 0, "adunit-3c27d66f6fb0ca92")
        }
    }
    class Pi extends L {
        pageInit() {
            super.pageInit(), this.grow_Input = this.viewProp.m_grow_Input, this.viewProp.m_grow_btn.on(Laya.Event.CLICK, this, () => {
                ks.getIns().setGrowUpId(parseInt(this.grow_Input.text)), ut.getIns().toGame(this.grow_Input.text, 1, () => {
                    ut.getIns().gameStart(() => {
                        this.closeWindow()
                    }, null)
                })
            }), this.viewProp.m_open.on(Laya.Event.CLICK, this, () => {
                let e = {
                    callBack: () => {
                        console.error("gg")
                    }
                };
                Y.UIMgr.ins.openUI(Y.UIType.MisRebronView, e)
            }), this.viewProp.m_close.on(Laya.Event.CLICK, this, () => {
                this.closeWindow()
            })
        }
        closeWindow() {
            console.log("===closeWindow  ToolsView")
            Y.UIMgr.ins.closeUI(Y.UIType.ToolsView)
        }
    }
    class Ci extends L {
        constructor() {
            super(...arguments), this.isPartPage = !0
        }
        pageInit() {
            super.pageInit(), this.viewProp.m_power_add_btn_icon.on(Laya.Event.CLICK, this, () => {
                Cs.getIns().btnAction(this.viewProp.m_power_add_btn_icon, () => {
                    Y.UIMgr.ins.openUI(Y.UIType.GetPowerView)
                })
            }), this.viewProp.m_gold_add_btn_icon.on(Laya.Event.CLICK, this, () => {
                Cs.getIns().btnAction(this.viewProp.m_gold_add_btn_icon, () => {
                    Y.UIMgr.ins.openUI(Y.UIType.GetGoldView, null, null)
                })
            }), this.viewProp.m_diam_add_btn_icon.on(Laya.Event.CLICK, this, () => {
                Cs.getIns().btnAction(this.viewProp.m_diam_add_btn_icon)
            })
        }
        addListerner() {
            super.addListerner(), e.getIns().addEventListerner(i.EN_COIN_CHANGED, this.setGold, this), e.getIns().addEventListerner(i.EN_POWER_CHANGED, this.setPower, this), e.getIns().addEventListerner(i.EN_CHANGE_STAR, this.setStar, this)
        }
        pageOpen(e) {
            super.pageOpen(e), this.setPower(), this.setGold(), this.setStar(), this.showGetNextPowerTime()
        }
        setStar() {}
        setGold() {
            this.viewProp.m_gold_count.text = ks.getIns().getCoin().toString(), Cs.getIns().btnTween(this.viewProp.m_gold_icon)
        }
        setPower() {
            this.viewProp.m_power_count.text = ks.getIns().getPower(), Cs.getIns().btnTween(this.viewProp.m_power_icon)
        }
        removeListerner() {
            super.removeListerner(), e.getIns().removeEventListerner(i.EN_COIN_CHANGED, this.setGold, this), e.getIns().removeEventListerner(i.EN_POWER_CHANGED, this.setPower, this), e.getIns().removeEventListerner(i.EN_CHANGE_STAR, this.setStar, this)
        }
        restorePowerFromDeltaTime(e) {
            if (e > 0) {
                let t = vs.ins.getPowerMax() - ks.getIns().getPower();
                if (t > 0) {
                    let s = vs.ins.getRecoverPowerTime();
                    if (e >= s) {
                        let i = Math.floor(e / s);
                        i <= t ? ks.getIns().addPower(i, !0) : ks.getIns().addPower(t, !0)
                    }
                }
            }
        }
        _updateGetNextPowerTime() {
            if (this.viewProp.m_power_recover_tips) {
                let e = ks.getIns().getLastGetPowerTime(),
                    t = vs.ins.getRecoverPowerTime(),
                    s = t - (.001 * ee.getIns().getServerTime() - e);
                if (0 === s) {
                    vs.ins.getPowerMax() - ks.getIns().getPower() > 1 && (s = t)
                }
                s = Math.floor(s), this.viewProp.m_power_recover_tips.text = Cs.getIns().convertSecondToHourMinuteSecond(s, !0);
                let i = Math.floor(.001 * ee.getIns().getServerTime()) - e;
                i >= t && this.restorePowerFromDeltaTime(i)
            }
        }
        showGetNextPowerTime() {
            this._updateGetNextPowerTime(), ks.getIns().getPower() < vs.ins.getPowerMax() ? (this.viewProp.m_power_recover_bg && (this.viewProp.m_power_recover_bg.visible = !0), Laya.timer.loop(1e3, this, this._updateGetNextPowerTime)) : this._hideGetNextPowerTime()
        }
        _hideGetNextPowerTime() {
            this.viewProp.m_power_recover_bg && (this.viewProp.m_power_recover_bg.visible = !1), Laya.timer.clear(this, this._updateGetNextPowerTime)
        }
    }
    class vi extends L {
        pageInit() {
            super.pageInit(), this.isNeedTween = !0, this.m_nothas = this.viewProp.m_nothas, this.m_has = this.viewProp.m_has, Cs.onClick(this.viewProp.m_agree, () => {
                ks.getIns().setShowYinsi(), Y.UIMgr.ins.closeUI(Y.UIType.YinSiFuWuView), Cs.getIns().handlerFun(this.endFun), this.endFun = null
            }), Cs.onClick(this.viewProp.m_refuse, () => {
                Y.UIMgr.ins.getActivePageByName(Y.UIType.GameLoading) ? xs.getIns().exitApp() : Y.UIMgr.ins.closeUI(Y.UIType.YinSiFuWuView)
            }), Cs.onClick(this.viewProp.m_yongu, () => {
                Y.UIMgr.ins.openUI(Y.UIType.FuWuView)
            }), Cs.onClick(this.viewProp.m_yinsi, () => {
                Y.UIMgr.ins.openUI(Y.UIType.YinsiView)
            }), Cs.onClick(this.viewProp.m_close, () => {
                Y.UIMgr.ins.closeUI(Y.UIType.YinSiFuWuView)
            })
        }
        pageOpen(e) {
            super.pageOpen(e), e && e.endFun && (this.endFun = e.endFun);
            let t = ks.getIns().isShowYinsi();
            this.m_nothas.visible = !t, this.m_has.visible = t
        }
    }
    class Ti extends L {
        pageInit() {
            super.pageInit(), this.viewProp.m_ok.on(Laya.Event.CLICK, this, () => {
                Y.UIMgr.ins.closeUI(Y.UIType.YinsiView), Cs.getIns().handlerFun(this.endFun), this.endFun = null
            }), this.viewProp.m_cancel.on(Laya.Event.CLICK, this, () => {
                Y.UIMgr.ins.getActivePageByName(Y.UIType.GameLoading) ? xs.getIns().exitApp() : Y.UIMgr.ins.closeUI(Y.UIType.YinsiView)
            })
        }
        pageOpen(e) {
            super.pageOpen(e), e && e.endFun && (this.endFun = e.endFun)
        }
    }
    class Si {
        constructor() {}
        static init() {
            var e = Laya.ClassUtils.regClass;
            e("add/UIFrame/PlatHint.ts", Us), e("add/GameEnter.ts", Es), e("add/Export/ExpBox.ts", Os), e("add/UIFrame/NativeInsert.ts", yt), e("add/UIFrame/Page/BottomView.ts", Rs), e("add/UIFrame/Page/BuffView.ts", Ws), e("add/UIFrame/Page/DelineView.ts", Gs), e("add/Export/ExportAdList.ts", Hs), e("add/UIFrame/Page/FreeCreate.ts", Xs), e("add/UIFrame/Page/FuWuView.ts", zs), e("add/UIFrame/Page/GameOverView.ts", Qs), e("add/UIFrame/Page/GameView.ts", wt), e("add/customJs/Rocker.ts", It), e("add/UIFrame/Page/GetGoldView.ts", Js), e("add/UIFrame/Page/HotAdView.ts", Zs), e("add/UIFrame/Page/LoadingView.ts", $s), e("add/UIFrame/Page/MisRebronView.ts", ti), e("add/UIFrame/Page/NativePicture.ts", si), e("add/UIFrame/Page/NewStoreView.ts", ii), e("add/UIFrame/Page/PageMarkView.ts", ri), e("add/UIFrame/Page/PageSetting.ts", oi), e("add/UIFrame/Page/PageUpLv.ts", ci), e("add/UIFrame/Page/PictureView.ts", gi), e("add/UIFrame/Page/ReadView.ts", pi), e("add/UIFrame/Page/RebornView.ts", mi), e("add/UIFrame/Page/ShareView.ts", Ii), e("add/UIFrame/Page/ShowEvolutionView.ts", yi), e("add/UIFrame/Page/StartMistake.ts", wi), e("add/UIFrame/Page/TaskView.ts", fi), e("add/UIFrame/Page/ToolsView.ts", Pi), e("add/UIFrame/Page/TopView.ts", Ci), e("add/UIFrame/Page/YinSiFuWuView.ts", vi), e("add/UIFrame/Page/YinsiView.ts", Ti)
        }
    }
    Si.width = 750, Si.height = 1334, Si.scaleMode = "showall", Si.screenMode = "vertical", Si.alignV = "top", Si.alignH = "center", Si.startScene = "Loading.scene", Si.sceneRoot = "", Si.debug = !1, Si.stat = !1, Si.physicsDebug = !0, Si.exportSceneToJson = !0, Si.init();
    new class {
        constructor() {
            window.Laya3D ? Laya3D.init(Si.width, Si.height) : Laya.init(Si.width, Si.height, Laya.WebGL), Laya.Physics && Laya.Physics.enable(), Laya.DebugPanel && Laya.DebugPanel.enable(), Laya.stage.scaleMode = Si.scaleMode, Laya.stage.screenMode = Si.screenMode, Laya.stage.alignV = Si.alignV, Laya.stage.alignH = Si.alignH, Laya.URL.exportSceneToJson = Si.exportSceneToJson, (Si.debug || "true" == Laya.Utils.getQueryString("debug")) && Laya.enableDebugPanel(), Si.physicsDebug && Laya.PhysicsDebugDraw && Laya.PhysicsDebugDraw.enable(), Si.stat && Laya.Stat.show(), Laya.alertGlobalError(!0), this.onVersionLoaded()
        }
        onVersionLoaded() {
            /** SDK开始--------------*/
            if (__PACK_CFG__.isPackA) {
                //游戏入口逻辑
                console.log("Test===============SDK");
                Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded))
            }else{
                console.log("Start===============SDK");
                ADConfig.setDefaultID(__PACK_CFG__.defaultID,"");
                SdkTool.init({
                    "appVersion": __PACK_CFG__.appVersion,
                    "appVersionID": __PACK_CFG__.appVersionID,
                    "gameVersion": __PACK_CFG__.gameVersion,
                    "appName": __PACK_CFG__.appName,
                    "cpID": __PACK_CFG__.cpID,
                    "channel":__PACK_CFG__.channel,
                    "companyCode": __PACK_CFG__.companyCode,
                    "companyName": __PACK_CFG__.companyName,
                    "servicePhone": __PACK_CFG__.servicePhone,
                    "ruanZhuCompany": __PACK_CFG__.ruanZhuCompany,
                    "ruanZhuCode": __PACK_CFG__.ruanZhuCode,
                    "shiLingAge": __PACK_CFG__.shiLingAge,
                    "shiLingContent": __PACK_CFG__.shiLingContent,
                }, "vertical", () => {
                    SdkTool.showStartGamePage(() => {
                        SdkTool.showPrivacyIcon(0.03,0.3);//隐私的浮动图标，根据游戏调整
                        //分包
                        // const timer = setInterval(() => {
                        //     //你的分包数量
                        //     if(loadedCount >= 1) {
                        //         clearInterval(timer);
                        //         //你的进游戏逻辑
                        //         //分包加载结束后，进入游戏，不同游戏进行修改

                        //         //TODO
                        //     }
                        // }, 500);
                        Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded))
                    });
                })
                

            }
            /** SDK结束--------------*/
            // Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded))
        }
        preLoadJsonFile() {
            var self = this;
            let res = [{
                url: "lmatfile.json",
                type: Laya.Loader.JSON
            }];
            Laya.loader.load(res, Laya.Handler.create(this, () => {
                let d3res = Laya.loader.getRes('lmatfile.json')
                for (let key in d3res) {
                    let url = Laya.URL.formatURL(key);
                    if (!Laya.Loader.preLoadedMap[url]) {
                        let str = d3res[key];
                        let obj = JSON.parse(str);
                        Laya.Loader.preLoadedMap[url] = obj;
                    }
                }
                self.preLoadBinFile();
            }));
        }
        preLoadBinFile() {
            var self = this;
            let res = [{
                url: "lmlanifile.bin",
                type: Laya.Loader.BUFFER
            }]
            Laya.loader.load(res, Laya.Handler.create(this, (res) => {
                let d3bin = Laya.loader.getRes('lmlanifile.bin')
                self.pasred3bin(d3bin);
            }));
        }
        pasred3bin(d3bin) {
            Si.startScene && Laya.Scene.open(Si.startScene);
            let b = new Laya.Byte(d3bin)
            let len = b.readUint32()
            let str = b.readUTFBytes(len)
            let descJson = JSON.parse(str);
            let oldPos = b.pos;
            for (let key in descJson) {
                let url = Laya.URL.formatURL(key);
                if (!Laya.Loader.preLoadedMap[url]) {
                    let obj = descJson[key];
                    b.pos = obj.start + oldPos;
                    let buf = b.readArrayBuffer(obj.end + oldPos)
                    Laya.Loader.preLoadedMap[url] = buf;
                    Laya.Loader.preLoadedMap[key] = buf;
                }
            }
          
        }
        onConfigLoaded() {
            Laya.SoundManager.autoReleaseSound = false;
            Laya.SoundManager.useAudioMusic = false;
            Laya.SoundManager.autoStopMusic = true;
            
            if (Laya.Browser.onPC) {
                Laya.stage.screenMode = "none" //ddsh
                Laya.stage.scaleMode = Laya.Stage.SCALE_SHOWALL;
                Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;
                Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE;
                console.log("pc--mode--");
            } else {
                Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;
                Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE;
                Laya.stage.screenMode = "none";
                Laya.stage.scaleMode = Laya.Stage.SCALE_FIXED_WIDTH;
            }
           
            this.preLoadJsonFile();
        }
    }
}();


window.lastInterstTime = 0;
window.lastVideoTime = 0;
window.showInterAdd = 0;
window.maxInterAdd = 0;
window.showVivoInterst = function () {
    console.log("===showVivoInterst")
   
}
window.showRewardAds = function (cb,close) {
    console.log("激励视频奖励广告===============");
    if (__PACK_CFG__.isFreeAd) {
        //测试
        console.log("test==============SDK")
        cb();
    } else {
        SdkTool.showAd({
            "adid": 50,
            "adCallback": (msg) => {
                console.log("msg============", msg)
                if (msg == 60210) {
                        //成功回调
                        cb();
                        console.log("视频广告播放完成  开始下发奖励");
                    } else {
                        //失败回调
                        close();
                        console.log("视频广告播放失败======");
                    }
            }
        })
    }
    // console.log("====showRewardAds")
    // cb();
    // return;
    // let now = Date.now()
    // if (now - window.lastVideoTime < 3000) {
    //     return;
    // }
    // let isGetReward = false;
    // if (window["ysdk"]) {
    //     window["ysdk"].adv.showRewardedVideo({
    //         callbacks: {
    //             onOpen: () => {
    //                 Laya.SoundManager.muted = true;
    //             },
    //             onRewarded: () => {
    //                 isGetReward = true;
    //             },
    //             onClose: () => {
    //                 Laya.SoundManager.muted = false;
    //                 if(isGetReward){
    //                     cb();
    //                 }else{
    //                     close();
    //                 }
    //                 window.lastVideoTime = Date.now();
    //             },
    //             onError: (e) => {
    //             }
    //         }
    //     })
    // } else {
    //     cb();
    // }
}
