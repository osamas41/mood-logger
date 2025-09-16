import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Label } from '@/components/ui/label.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select.jsx'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts'
import { Heart, Brain, Activity, Moon, MessageCircle, Quote, TrendingUp, Calendar, User, LogOut, Send } from 'lucide-react'
import './App.css'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [currentUser, setCurrentUser] = useState(null)
  const [activeTab, setActiveTab] = useState('dashboard')
  const [moods, setMoods] = useState([])
  const [dailyQuote, setDailyQuote] = useState('')
  const [chatMessages, setChatMessages] = useState([])
  const [chatInput, setChatInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  // Authentication states
  const [authMode, setAuthMode] = useState('login')
  const [authForm, setAuthForm] = useState({
    email: '',
    password: '',
    name: ''
  })

  // Mood form state
  const [moodForm, setMoodForm] = useState({
    mood: '',
    energy: '',
    activity: '',
    sleep: '',
    notes: ''
  })

  // Sample data for demonstration
  const sampleMoods = [
    { date: '2024-01-15', mood: 8, energy: 7, activity: 'Exercise', sleep: 8 },
    { date: '2024-01-16', mood: 6, energy: 5, activity: 'Work', sleep: 6 },
    { date: '2024-01-17', mood: 9, energy: 8, activity: 'Social', sleep: 7 },
    { date: '2024-01-18', mood: 7, energy: 6, activity: 'Reading', sleep: 8 },
    { date: '2024-01-19', mood: 5, energy: 4, activity: 'Rest', sleep: 5 },
    { date: '2024-01-20', mood: 8, energy: 7, activity: 'Creative', sleep: 7 },
    { date: '2024-01-21', mood: 9, energy: 9, activity: 'Exercise', sleep: 8 }
  ]

  const weeklyData = [
    { day: 'Mon', mood: 7, energy: 6 },
    { day: 'Tue', mood: 8, energy: 7 },
    { day: 'Wed', mood: 6, energy: 5 },
    { day: 'Thu', mood: 9, energy: 8 },
    { day: 'Fri', mood: 7, energy: 6 },
    { day: 'Sat', mood: 8, energy: 7 },
    { day: 'Sun', mood: 9, energy: 8 }
  ]

  const monthlyData = [
    { week: 'Week 1', mood: 7.2, energy: 6.8 },
    { week: 'Week 2', mood: 8.1, energy: 7.5 },
    { week: 'Week 3', mood: 6.9, energy: 6.2 },
    { week: 'Week 4', mood: 8.5, energy: 7.8 }
  ]

  useEffect(() => {
    // Simulate fetching daily quote
    setDailyQuote("The only way to do great work is to love what you do. - Steve Jobs")
    
    // Load sample moods
    setMoods(sampleMoods)
    
    // Check for stored auth token
    const token = localStorage.getItem('authToken')
    if (token) {
      setIsAuthenticated(true)
      setCurrentUser({ name: 'Demo User', email: 'demo@example.com' })
    }
  }, [])

  const handleAuth = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      if (authMode === 'login') {
        // Simulate login
        localStorage.setItem('authToken', 'demo-token')
        setCurrentUser({ name: 'Demo User', email: authForm.email })
        setIsAuthenticated(true)
      } else {
        // Simulate registration
        localStorage.setItem('authToken', 'demo-token')
        setCurrentUser({ name: authForm.name, email: authForm.email })
        setIsAuthenticated(true)
      }
      setIsLoading(false)
    }, 1000)
  }

  const handleLogout = () => {
    localStorage.removeItem('authToken')
    setIsAuthenticated(false)
    setCurrentUser(null)
    setActiveTab('dashboard')
  }

  const handleMoodSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      const newMood = {
        ...moodForm,
        date: new Date().toISOString().split('T')[0],
        mood: parseInt(moodForm.mood),
        energy: parseInt(moodForm.energy),
        sleep: parseInt(moodForm.sleep)
      }
      setMoods([...moods, newMood])
      setMoodForm({ mood: '', energy: '', activity: '', sleep: '', notes: '' })
      setIsLoading(false)
    }, 500)
  }

  const handleChatSubmit = async (e) => {
    e.preventDefault()
    if (!chatInput.trim()) return
    
    const userMessage = { type: 'user', content: chatInput, timestamp: new Date() }
    setChatMessages([...chatMessages, userMessage])
    setChatInput('')
    setIsLoading(true)
    
    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        type: 'ai',
        content: "I understand you're sharing your thoughts with me. Remember that it's completely normal to have ups and downs. What specific aspect of your mood would you like to explore today?",
        timestamp: new Date()
      }
      setChatMessages(prev => [...prev, aiResponse])
      setIsLoading(false)
    }, 1000)
  }

  const getMoodEmoji = (mood) => {
    if (mood >= 8) return '😊'
    if (mood >= 6) return '😐'
    if (mood >= 4) return '😔'
    return '😢'
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="mx-auto w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
              <Brain className="w-6 h-6 text-indigo-600" />
            </div>
            <CardTitle className="text-2xl">Mood Logger</CardTitle>
            <CardDescription>Track your mental wellbeing journey</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs value={authMode} onValueChange={setAuthMode}>
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="login">Login</TabsTrigger>
                <TabsTrigger value="register">Sign Up</TabsTrigger>
              </TabsList>
              
              <TabsContent value="login">
                <form onSubmit={handleAuth} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={authForm.email}
                      onChange={(e) => setAuthForm({...authForm, email: e.target.value})}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="Enter your password"
                      value={authForm.password}
                      onChange={(e) => setAuthForm({...authForm, password: e.target.value})}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? 'Signing in...' : 'Sign In'}
                  </Button>
                </form>
              </TabsContent>
              
              <TabsContent value="register">
                <form onSubmit={handleAuth} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Enter your full name"
                      value={authForm.name}
                      onChange={(e) => setAuthForm({...authForm, name: e.target.value})}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={authForm.email}
                      onChange={(e) => setAuthForm({...authForm, email: e.target.value})}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="Create a password"
                      value={authForm.password}
                      onChange={(e) => setAuthForm({...authForm, password: e.target.value})}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? 'Creating account...' : 'Create Account'}
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-semibold text-gray-900">Mood Logger</h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4 text-gray-500" />
                <span className="text-sm text-gray-700">{currentUser?.name}</span>
              </div>
              <Button variant="outline" size="sm" onClick={handleLogout}>
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-5 mb-8">
            <TabsTrigger value="dashboard" className="flex items-center space-x-2">
              <TrendingUp className="w-4 h-4" />
              <span>Dashboard</span>
            </TabsTrigger>
            <TabsTrigger value="log-mood" className="flex items-center space-x-2">
              <Heart className="w-4 h-4" />
              <span>Log Mood</span>
            </TabsTrigger>
            <TabsTrigger value="analytics" className="flex items-center space-x-2">
              <Activity className="w-4 h-4" />
              <span>Analytics</span>
            </TabsTrigger>
            <TabsTrigger value="quotes" className="flex items-center space-x-2">
              <Quote className="w-4 h-4" />
              <span>Daily Quote</span>
            </TabsTrigger>
            <TabsTrigger value="chat" className="flex items-center space-x-2">
              <MessageCircle className="w-4 h-4" />
              <span>AI Chat</span>
            </TabsTrigger>
          </TabsList>

          {/* Dashboard */}
          <TabsContent value="dashboard">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Average Mood</CardTitle>
                  <Heart className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">7.4</div>
                  <p className="text-xs text-muted-foreground">+0.5 from last week</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Energy Level</CardTitle>
                  <Activity className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">6.8</div>
                  <p className="text-xs text-muted-foreground">+0.2 from last week</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Sleep Quality</CardTitle>
                  <Moon className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">7.1</div>
                  <p className="text-xs text-muted-foreground">-0.1 from last week</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Entries</CardTitle>
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{moods.length}</div>
                  <p className="text-xs text-muted-foreground">Total logged</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Mood Entries</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {moods.slice(-5).reverse().map((mood, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl">{getMoodEmoji(mood.mood)}</span>
                          <div>
                            <p className="font-medium">{mood.activity}</p>
                            <p className="text-sm text-gray-500">{mood.date}</p>
                          </div>
                        </div>
                        <Badge variant="secondary">Mood: {mood.mood}/10</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Weekly Trend</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={200}>
                    <LineChart data={weeklyData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="day" />
                      <YAxis domain={[0, 10]} />
                      <Tooltip />
                      <Line type="monotone" dataKey="mood" stroke="#8884d8" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Log Mood */}
          <TabsContent value="log-mood">
            <Card className="max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle>Log Your Mood</CardTitle>
                <CardDescription>Track your daily mood, energy, activity, and sleep</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleMoodSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="mood">Mood (1-10)</Label>
                      <Select value={moodForm.mood} onValueChange={(value) => setMoodForm({...moodForm, mood: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select mood level" />
                        </SelectTrigger>
                        <SelectContent>
                          {[1,2,3,4,5,6,7,8,9,10].map(num => (
                            <SelectItem key={num} value={num.toString()}>
                              {num} {getMoodEmoji(num)}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="energy">Energy Level (1-10)</Label>
                      <Select value={moodForm.energy} onValueChange={(value) => setMoodForm({...moodForm, energy: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select energy level" />
                        </SelectTrigger>
                        <SelectContent>
                          {[1,2,3,4,5,6,7,8,9,10].map(num => (
                            <SelectItem key={num} value={num.toString()}>{num}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="activity">Main Activity</Label>
                      <Select value={moodForm.activity} onValueChange={(value) => setMoodForm({...moodForm, activity: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select activity" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Work">Work</SelectItem>
                          <SelectItem value="Exercise">Exercise</SelectItem>
                          <SelectItem value="Social">Social</SelectItem>
                          <SelectItem value="Rest">Rest</SelectItem>
                          <SelectItem value="Creative">Creative</SelectItem>
                          <SelectItem value="Reading">Reading</SelectItem>
                          <SelectItem value="Other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="sleep">Sleep Quality (1-10)</Label>
                      <Select value={moodForm.sleep} onValueChange={(value) => setMoodForm({...moodForm, sleep: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select sleep quality" />
                        </SelectTrigger>
                        <SelectContent>
                          {[1,2,3,4,5,6,7,8,9,10].map(num => (
                            <SelectItem key={num} value={num.toString()}>{num}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="notes">Notes (Optional)</Label>
                    <Textarea
                      id="notes"
                      placeholder="Any additional thoughts or observations..."
                      value={moodForm.notes}
                      onChange={(e) => setMoodForm({...moodForm, notes: e.target.value})}
                      rows={3}
                    />
                  </div>

                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? 'Saving...' : 'Log Mood Entry'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Analytics */}
          <TabsContent value="analytics">
            <div className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Weekly Mood & Energy</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <LineChart data={weeklyData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="day" />
                        <YAxis domain={[0, 10]} />
                        <Tooltip />
                        <Line type="monotone" dataKey="mood" stroke="#8884d8" strokeWidth={2} name="Mood" />
                        <Line type="monotone" dataKey="energy" stroke="#82ca9d" strokeWidth={2} name="Energy" />
                      </LineChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Monthly Overview</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart data={monthlyData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="week" />
                        <YAxis domain={[0, 10]} />
                        <Tooltip />
                        <Bar dataKey="mood" fill="#8884d8" name="Mood" />
                        <Bar dataKey="energy" fill="#82ca9d" name="Energy" />
                      </BarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Activity Breakdown</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {['Work', 'Exercise', 'Social', 'Rest'].map(activity => {
                      const count = moods.filter(m => m.activity === activity).length
                      return (
                        <div key={activity} className="text-center p-4 bg-gray-50 rounded-lg">
                          <div className="text-2xl font-bold text-indigo-600">{count}</div>
                          <div className="text-sm text-gray-600">{activity}</div>
                        </div>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Daily Quote */}
          <TabsContent value="quotes">
            <Card className="max-w-2xl mx-auto">
              <CardHeader className="text-center">
                <CardTitle className="flex items-center justify-center space-x-2">
                  <Quote className="w-6 h-6" />
                  <span>Daily Inspiration</span>
                </CardTitle>
                <CardDescription>Your motivational quote for today</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <blockquote className="text-lg italic text-gray-700 mb-4 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border-l-4 border-indigo-500">
                  "{dailyQuote}"
                </blockquote>
                <Button onClick={() => setDailyQuote("Success is not final, failure is not fatal: it is the courage to continue that counts. - Winston Churchill")}>
                  Get New Quote
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* AI Chat */}
          <TabsContent value="chat">
            <Card className="max-w-4xl mx-auto">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MessageCircle className="w-6 h-6" />
                  <span>AI Wellness Assistant</span>
                </CardTitle>
                <CardDescription>Chat with our AI assistant about your mental wellbeing</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="h-96 overflow-y-auto border rounded-lg p-4 bg-gray-50">
                    {chatMessages.length === 0 ? (
                      <div className="text-center text-gray-500 mt-20">
                        <MessageCircle className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                        <p>Start a conversation with your AI wellness assistant</p>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        {chatMessages.map((message, index) => (
                          <div key={index} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                            <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                              message.type === 'user' 
                                ? 'bg-indigo-600 text-white' 
                                : 'bg-white border shadow-sm'
                            }`}>
                              <p className="text-sm">{message.content}</p>
                              <p className={`text-xs mt-1 ${
                                message.type === 'user' ? 'text-indigo-200' : 'text-gray-500'
                              }`}>
                                {message.timestamp.toLocaleTimeString()}
                              </p>
                            </div>
                          </div>
                        ))}
                        {isLoading && (
                          <div className="flex justify-start">
                            <div className="bg-white border shadow-sm px-4 py-2 rounded-lg">
                              <div className="flex space-x-1">
                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                  
                  <form onSubmit={handleChatSubmit} className="flex space-x-2">
                    <Input
                      value={chatInput}
                      onChange={(e) => setChatInput(e.target.value)}
                      placeholder="Type your message..."
                      className="flex-1"
                      disabled={isLoading}
                    />
                    <Button type="submit" disabled={isLoading || !chatInput.trim()}>
                      <Send className="w-4 h-4" />
                    </Button>
                  </form>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default App

