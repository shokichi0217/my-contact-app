import React, { useState } from 'react';
import { Heart, Mail, MessageCircle, Check, X, User } from 'lucide-react';

export default function ContactExchangeApp() {
  const [currentUser, setCurrentUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [requests, setRequests] = useState([]);
  const [matches, setMatches] = useState([]);
  const [view, setView] = useState('register');
  const [formData, setFormData] = useState({
    name: '',
    contactType: 'email',
    contactValue: ''
  });

  const handleRegister = () => {
    if (!formData.name || !formData.contactValue) return;

    const newUser = {
      id: Date.now(),
      name: formData.name,
      contactType: formData.contactType,
      contactValue: formData.contactValue
    };

    setCurrentUser(newUser);
    setUsers([...users, newUser]);
    setFormData({ name: '', contactType: 'email', contactValue: '' });
    setView('participants');
  };

  const sendRequest = (targetUser) => {
    const newRequest = {
      id: Date.now(),
      from: currentUser,
      to: targetUser,
      status: 'pending'
    };
    setRequests([...requests, newRequest]);
  };

  const approveRequest = (requestId) => {
    const request = requests.find(r => r.id === requestId);
    if (request) {
      setMatches([...matches, {
        id: Date.now(),
        user1: request.from,
        user2: request.to
      }]);
      setRequests(requests.filter(r => r.id !== requestId));
    }
  };

  const rejectRequest = (requestId) => {
    setRequests(requests.filter(r => r.id !== requestId));
  };

  const myRequests = requests.filter(r => r.to.id === currentUser?.id);
  const sentRequests = requests.filter(r => r.from.id === currentUser?.id);
  const myMatches = matches.filter(m => 
    m.user1.id === currentUser?.id || m.user2.id === currentUser?.id
  );

  if (view === 'register' || !currentUser) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-red-50 p-4">
        <div className="max-w-md mx-auto pt-12">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <div className="inline-block p-3 bg-pink-100 rounded-full mb-4">
                <Heart className="w-12 h-12 text-pink-500" />
              </div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">連絡先交換アプリ</h1>
              <p className="text-gray-600">婚活パーティー専用</p>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  お名前
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  placeholder="山田太郎"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  連絡先の種類
                </label>
                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => setFormData({...formData, contactType: 'email'})}
                    className={`flex-1 flex items-center justify-center gap-2 p-3 border-2 rounded-lg cursor-pointer transition ${
                      formData.contactType === 'email' 
                        ? 'border-pink-500 bg-pink-50' 
                        : 'border-gray-300 hover:border-pink-300'
                    }`}
                  >
                    <Mail className="w-5 h-5" />
                    <span>メール</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({...formData, contactType: 'line'})}
                    className={`flex-1 flex items-center justify-center gap-2 p-3 border-2 rounded-lg cursor-pointer transition ${
                      formData.contactType === 'line' 
                        ? 'border-pink-500 bg-pink-50' 
                        : 'border-gray-300 hover:border-pink-300'
                    }`}
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>LINE</span>
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {formData.contactType === 'email' ? 'メールアドレス' : 'LINE ID'}
                </label>
                <input
                  type={formData.contactType === 'email' ? 'email' : 'text'}
                  value={formData.contactValue}
                  onChange={(e) => setFormData({...formData, contactValue: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  placeholder={formData.contactType === 'email' ? 'example@email.com' : 'your-line-id'}
                />
              </div>

              <button
                type="button"
                onClick={handleRegister}
                className="w-full bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold py-3 rounded-lg hover:from-pink-600 hover:to-red-600 transition shadow-lg"
              >
                登録して参加する
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-red-50">
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-pink-100 rounded-full">
                <Heart className="w-6 h-6 text-pink-500" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-800">連絡先交換アプリ</h1>
                <p className="text-sm text-gray-600">{currentUser.name}さん</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex gap-8">
            <button
              onClick={() => setView('participants')}
              className={`py-4 px-2 font-medium border-b-2 transition ${
                view === 'participants'
                  ? 'border-pink-500 text-pink-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              参加者一覧
            </button>
            <button
              onClick={() => setView('requests')}
              className={`py-4 px-2 font-medium border-b-2 transition relative ${
                view === 'requests'
                  ? 'border-pink-500 text-pink-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              リクエスト
              {myRequests.length > 0 && (
                <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {myRequests.length}
                </span>
              )}
            </button>
            <button
              onClick={() => setView('matches')}
              className={`py-4 px-2 font-medium border-b-2 transition ${
                view === 'matches'
                  ? 'border-pink-500 text-pink-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              マッチ ({myMatches.length})
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-4">
        {view === 'participants' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {users.filter(u => u.id !== currentUser.id).map(user => {
              const alreadySent = sentRequests.some(r => r.to.id === user.id);
              const matched = myMatches.some(m => 
                m.user1.id === user.id || m.user2.id === user.id
              );

              return (
                <div key={user.id} className="bg-white rounded-xl shadow-md p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-gray-100 rounded-full">
                        <User className="w-6 h-6 text-gray-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-gray-800">{user.name}</h3>
                        <p className="text-sm text-gray-500 flex items-center gap-1">
                          {user.contactType === 'email' ? (
                            <Mail className="w-4 h-4" />
                          ) : (
                            <MessageCircle className="w-4 h-4" />
                          )}
                          {user.contactType === 'email' ? 'メール' : 'LINE'}
                        </p>
                      </div>
                    </div>
                  </div>

                  {matched ? (
                    <div className="bg-green-50 text-green-700 py-2 px-4 rounded-lg text-center font-medium">
                      マッチ済み
                    </div>
                  ) : alreadySent ? (
                    <div className="bg-gray-100 text-gray-600 py-2 px-4 rounded-lg text-center">
                      リクエスト送信済み
                    </div>
                  ) : (
                    <button
                      onClick={() => sendRequest(user)}
                      className="w-full bg-pink-500 text-white py-2 px-4 rounded-lg hover:bg-pink-600 transition font-medium"
                    >
                      交換リクエストを送る
                    </button>
                  )}
                </div>
              );
            })}
            {users.length <= 1 && (
              <div className="col-span-full text-center py-12 text-gray-500">
                他の参加者がまだいません
              </div>
            )}
          </div>
        )}

        {view === 'requests' && (
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-4">受信リクエスト</h2>
              <div className="space-y-3">
                {myRequests.map(request => (
                  <div key={request.id} className="bg-white rounded-xl shadow-md p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-3 bg-pink-100 rounded-full">
                          <User className="w-6 h-6 text-pink-600" />
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-800">{request.from.name}さん</h3>
                          <p className="text-sm text-gray-600">連絡先交換のリクエストが届いています</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => approveRequest(request.id)}
                          className="p-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
                        >
                          <Check className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => rejectRequest(request.id)}
                          className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                        >
                          <X className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
                {myRequests.length === 0 && (
                  <div className="text-center py-12 text-gray-500">
                    受信リクエストはありません
                  </div>
                )}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-4">送信済みリクエスト</h2>
              <div className="space-y-3">
                {sentRequests.map(request => (
                  <div key={request.id} className="bg-white rounded-xl shadow-md p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-3 bg-gray-100 rounded-full">
                          <User className="w-6 h-6 text-gray-600" />
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-800">{request.to.name}さん</h3>
                          <p className="text-sm text-gray-600">承認待ちです</p>
                        </div>
                      </div>
                      <div className="text-sm text-gray-500">
                        送信済み
                      </div>
                    </div>
                  </div>
                ))}
                {sentRequests.length === 0 && (
                  <div className="text-center py-12 text-gray-500">
                    送信済みリクエストはありません
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {view === 'matches' && (
          <div className="space-y-4">
            {myMatches.map(match => {
              const partner = match.user1.id === currentUser.id ? match.user2 : match.user1;
              return (
                <div key={match.id} className="bg-white rounded-xl shadow-md p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-pink-100 rounded-full">
                        <Heart className="w-8 h-8 text-pink-500" />
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-gray-800 mb-2">{partner.name}さん</h3>
                        <div className="space-y-1">
                          <div className="flex items-center gap-2 text-gray-700">
                            {partner.contactType === 'email' ? (
                              <Mail className="w-5 h-5" />
                            ) : (
                              <MessageCircle className="w-5 h-5" />
                            )}
                            <span className="font-medium">{partner.contactValue}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            {myMatches.length === 0 && (
              <div className="text-center py-12 text-gray-500">
                まだマッチがありません
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}