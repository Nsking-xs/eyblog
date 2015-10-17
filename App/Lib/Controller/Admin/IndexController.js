/**
* controller
* @return
*/
module.exports = Controller("Admin/BaseController", function(){
		"use strict";
		return {
			indexAction: function(){
				var self=this;
				self.assign("model","index");
				self.assign("action","index");
				//文章
				var content=D('contents').getCount();
				self.assign('content',content);
				//心情
				var mood=D('moods').getCount();
				self.assign('mood',mood);
				//留言
				var comment=D('comments').getCount();
				self.assign('comment',comment);
				//PV
				var pv=D('web').getPV();
				self.assign('pv',pv);
				//最新心情
				var newmood=D('moods').getNew(1);										
				self.display();
			}
		};
	});