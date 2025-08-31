import React from 'react'
import { motion } from 'framer-motion'
import { 
  Mail, 
  Phone, 
  Shield, 
  Code, 
  Cloud, 
  Lock, 
  Zap, 
  Award, 
  Briefcase, 
  GraduationCap,
  Star,
  ChevronRight,
  Globe,
  Database,
  Terminal,
  Cpu,
  Network,
  Eye,
  Target,
  Layers
} from 'lucide-react'
import ParticleBackground from './components/ParticleBackground'
import './App.css'

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

const skillVariants = {
  initial: { scale: 0, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  transition: { duration: 0.5 }
}

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto p-8">
        {/* Header Section */}
        <motion.header 
          className="text-center mb-16"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative">
            <motion.div 
              className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 p-1 floating-animation glow-effect"
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                <Shield className="w-16 h-16 text-cyan-400" />
              </div>
            </motion.div>
            
            <motion.h1 
              className="text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-4"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Frantz Banks III
            </motion.h1>
            
            <motion.p 
              className="text-2xl text-slate-300 mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              M.S. in Cybersecurity & Information Assurance
            </motion.p>
            
            <motion.div 
              className="flex justify-center items-center space-x-8 text-slate-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <div className="flex items-center space-x-2 hover:text-cyan-400 transition-colors">
                <Phone className="w-5 h-5" />
                <span>(904) 699-0693</span>
              </div>
              <div className="flex items-center space-x-2 hover:text-cyan-400 transition-colors">
                <Mail className="w-5 h-5" />
                <span>frantzbanksiii@gmail.com</span>
              </div>
            </motion.div>
            
            <motion.div 
              className="mt-4 inline-flex items-center space-x-2 bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-2 rounded-full text-sm font-semibold"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              <Lock className="w-4 h-4" />
              <span>Top-Secret/SCI Clearance (Active)</span>
            </motion.div>
          </div>
        </motion.header>

        {/* Professional Summary */}
        <motion.section 
          className="mb-16"
          {...fadeInUp}
          transition={{ delay: 1.1 }}
        >
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-lg rounded-3xl p-8 border border-slate-600/30">
            <h2 className="text-3xl font-bold text-cyan-400 mb-6 flex items-center">
              <Target className="w-8 h-8 mr-3" />
              Elite Security Engineer & Blockchain Specialist
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed">
              Versatile <span className="text-cyan-400 font-semibold">Application Security Engineer</span> and 
              <span className="text-purple-400 font-semibold"> Blockchain Security Specialist</span> with 
              <span className="text-yellow-400 font-bold"> 11+ years</span> of experience in cybersecurity, 
              infrastructure hardening, and secure application development. Proven expertise in DevSecOps, 
              smart contract auditing, cloud security architecture, and compliance frameworks. Demonstrated 
              success in implementing zero-trust security models, conducting vulnerability assessments, and 
              leading security engineering initiatives across federal and enterprise environments.
            </p>
          </div>
        </motion.section>

        {/* Skills Grid */}
        <motion.section 
          className="mb-16"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.h2 
            className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent"
            variants={fadeInUp}
          >
            Technical Arsenal
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Application Security */}
            <motion.div 
              className="bg-gradient-to-br from-blue-900/40 to-cyan-900/40 backdrop-blur-lg rounded-2xl p-6 border border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-300 hover:scale-105"
              variants={skillVariants}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center mb-4">
                <Shield className="w-8 h-8 text-cyan-400 mr-3" />
                <h3 className="text-xl font-bold text-cyan-400">Application Security</h3>
              </div>
              <div className="space-y-2">
                {['SAST/DAST/IAST', 'CodeQL', 'SonarQube', 'Veracode', 'OWASP Top 10'].map((skill, index) => (
                  <motion.div 
                    key={skill}
                    className="flex items-center text-slate-300"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <ChevronRight className="w-4 h-4 text-cyan-400 mr-2" />
                    <span>{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Blockchain Security */}
            <motion.div 
              className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/30 hover:border-purple-400/60 transition-all duration-300 hover:scale-105"
              variants={skillVariants}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center mb-4">
                <Layers className="w-8 h-8 text-purple-400 mr-3" />
                <h3 className="text-xl font-bold text-purple-400">Blockchain Security</h3>
              </div>
              <div className="space-y-2">
                {['Smart Contract Auditing', 'Solidity', 'Rust (Anchor)', 'Web3.js', 'Slither/MythX'].map((skill, index) => (
                  <motion.div 
                    key={skill}
                    className="flex items-center text-slate-300"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <ChevronRight className="w-4 h-4 text-purple-400 mr-2" />
                    <span>{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Cloud Security */}
            <motion.div 
              className="bg-gradient-to-br from-green-900/40 to-emerald-900/40 backdrop-blur-lg rounded-2xl p-6 border border-green-500/30 hover:border-green-400/60 transition-all duration-300 hover:scale-105"
              variants={skillVariants}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center mb-4">
                <Cloud className="w-8 h-8 text-green-400 mr-3" />
                <h3 className="text-xl font-bold text-green-400">Cloud Security</h3>
              </div>
              <div className="space-y-2">
                {['AWS Security Services', 'Azure Security Center', 'GCP Security', 'IAM/KMS', 'Terraform'].map((skill, index) => (
                  <motion.div 
                    key={skill}
                    className="flex items-center text-slate-300"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <ChevronRight className="w-4 h-4 text-green-400 mr-2" />
                    <span>{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* DevSecOps */}
            <motion.div 
              className="bg-gradient-to-br from-orange-900/40 to-red-900/40 backdrop-blur-lg rounded-2xl p-6 border border-orange-500/30 hover:border-orange-400/60 transition-all duration-300 hover:scale-105"
              variants={skillVariants}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center mb-4">
                <Zap className="w-8 h-8 text-orange-400 mr-3" />
                <h3 className="text-xl font-bold text-orange-400">DevSecOps</h3>
              </div>
              <div className="space-y-2">
                {['CI/CD Security', 'Jenkins', 'GitHub Actions', 'Docker Security', 'Infrastructure as Code'].map((skill, index) => (
                  <motion.div 
                    key={skill}
                    className="flex items-center text-slate-300"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <ChevronRight className="w-4 h-4 text-orange-400 mr-2" />
                    <span>{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Programming */}
            <motion.div 
              className="bg-gradient-to-br from-indigo-900/40 to-blue-900/40 backdrop-blur-lg rounded-2xl p-6 border border-indigo-500/30 hover:border-indigo-400/60 transition-all duration-300 hover:scale-105"
              variants={skillVariants}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center mb-4">
                <Code className="w-8 h-8 text-indigo-400 mr-3" />
                <h3 className="text-xl font-bold text-indigo-400">Programming</h3>
              </div>
              <div className="space-y-2">
                {['Python', 'Java/Spring Boot', 'JavaScript', 'Solidity', 'PowerShell'].map((skill, index) => (
                  <motion.div 
                    key={skill}
                    className="flex items-center text-slate-300"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <ChevronRight className="w-4 h-4 text-indigo-400 mr-2" />
                    <span>{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Security Tools */}
            <motion.div 
              className="bg-gradient-to-br from-yellow-900/40 to-amber-900/40 backdrop-blur-lg rounded-2xl p-6 border border-yellow-500/30 hover:border-yellow-400/60 transition-all duration-300 hover:scale-105"
              variants={skillVariants}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center mb-4">
                <Terminal className="w-8 h-8 text-yellow-400 mr-3" />
                <h3 className="text-xl font-bold text-yellow-400">Security Tools</h3>
              </div>
              <div className="space-y-2">
                {['Nessus', 'Splunk', 'Burp Suite', 'Metasploit', 'Wireshark'].map((skill, index) => (
                  <motion.div 
                    key={skill}
                    className="flex items-center text-slate-300"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <ChevronRight className="w-4 h-4 text-yellow-400 mr-2" />
                    <span>{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Experience Timeline */}
        <motion.section 
          className="mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
            Professional Journey
          </h2>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-500"></div>
            
            {/* Experience Items */}
            <div className="space-y-12">
              {/* Current Role */}
              <motion.div 
                className="relative pl-20"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.7 }}
              >
                <div className="absolute left-6 w-5 h-5 bg-cyan-400 rounded-full border-4 border-slate-900 shadow-lg shadow-cyan-400/50"></div>
                <div className="bg-gradient-to-r from-slate-800/60 to-slate-700/60 backdrop-blur-lg rounded-2xl p-8 border border-slate-600/30 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-cyan-400">Application Security Engineer</h3>
                    <span className="text-sm text-slate-400 bg-slate-700/50 px-3 py-1 rounded-full">May 2023 – Present</span>
                  </div>
                  <p className="text-lg text-purple-400 mb-4 font-semibold">Cadmus (USDA Contract)</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-300">
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 mr-2" />
                        <span>Lead security for 50,000+ user systems</span>
                      </div>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 mr-2" />
                        <span>200+ vulnerabilities identified & remediated</span>
                      </div>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 mr-2" />
                        <span>60% reduction in production vulnerabilities</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 mr-2" />
                        <span>95% vulnerability remediation rate</span>
                      </div>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 mr-2" />
                        <span>40% reduction in false positives</span>
                      </div>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 mr-2" />
                        <span>$2M+ in contract renewals supported</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* IBM Role */}
              <motion.div 
                className="relative pl-20"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.9 }}
              >
                <div className="absolute left-6 w-5 h-5 bg-purple-500 rounded-full border-4 border-slate-900 shadow-lg shadow-purple-500/50"></div>
                <div className="bg-gradient-to-r from-slate-800/60 to-slate-700/60 backdrop-blur-lg rounded-2xl p-8 border border-slate-600/30 hover:border-purple-400/50 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-purple-400">Windows & SQL Server SME</h3>
                    <span className="text-sm text-slate-400 bg-slate-700/50 px-3 py-1 rounded-full">Jun 2021 – May 2023</span>
                  </div>
                  <p className="text-lg text-blue-400 mb-4 font-semibold">IBM (Navy ERP Program)</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-300">
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 mr-2" />
                        <span>100,000+ personnel infrastructure support</span>
                      </div>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 mr-2" />
                        <span>Zero data loss AWS GovCloud migration</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 mr-2" />
                        <span>100% DoD compliance achievement</span>
                      </div>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 mr-2" />
                        <span>80% reduction in unauthorized access</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Army Role */}
              <motion.div 
                className="relative pl-20"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 2.1 }}
              >
                <div className="absolute left-6 w-5 h-5 bg-green-500 rounded-full border-4 border-slate-900 shadow-lg shadow-green-500/50"></div>
                <div className="bg-gradient-to-r from-slate-800/60 to-slate-700/60 backdrop-blur-lg rounded-2xl p-8 border border-slate-600/30 hover:border-green-400/50 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-green-400">Cyber Infrastructure Lead</h3>
                    <span className="text-sm text-slate-400 bg-slate-700/50 px-3 py-1 rounded-full">Feb 2014 – Jun 2021</span>
                  </div>
                  <p className="text-lg text-emerald-400 mb-4 font-semibold">US Army Regional Cyber Center</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-300">
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 mr-2" />
                        <span>98% patch compliance across 5,000+ endpoints</span>
                      </div>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 mr-2" />
                        <span>500+ security incidents resolved</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 mr-2" />
                        <span>Sub-2 hour average response time</span>
                      </div>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 mr-2" />
                        <span>15+ Army installations adoption</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Blockchain Projects Showcase */}
        <motion.section 
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.3 }}
        >
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Blockchain Security Projects
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* SolFund Project */}
            <motion.div 
              className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 backdrop-blur-lg rounded-3xl p-8 border border-purple-500/30 hover:border-purple-400/60 transition-all duration-300 hover:scale-105"
              whileHover={{ y: -10 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-4">
                  <Layers className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-purple-400">SolFund</h3>
                  <p className="text-slate-400">Solana Decentralized Crowdfunding Platform</p>
                </div>
              </div>
              <div className="space-y-3 text-slate-300">
                <div className="flex items-center">
                  <ChevronRight className="w-4 h-4 text-purple-400 mr-2" />
                  <span>Rust smart contracts with Anchor framework</span>
                </div>
                <div className="flex items-center">
                  <ChevronRight className="w-4 h-4 text-purple-400 mr-2" />
                  <span>React Native frontend with Solana Wallet Adapter</span>
                </div>
                <div className="flex items-center">
                  <ChevronRight className="w-4 h-4 text-purple-400 mr-2" />
                  <span>Automated security checks with Slither</span>
                </div>
                <div className="flex items-center">
                  <ChevronRight className="w-4 h-4 text-purple-400 mr-2" />
                  <span>Comprehensive threat modeling & PDA security</span>
                </div>
              </div>
            </motion.div>

            {/* ERC-20 Oracle Project */}
            <motion.div 
              className="bg-gradient-to-br from-blue-900/40 to-cyan-900/40 backdrop-blur-lg rounded-3xl p-8 border border-blue-500/30 hover:border-blue-400/60 transition-all duration-300 hover:scale-105"
              whileHover={{ y: -10 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-blue-400">Secure ERC-20 Oracle</h3>
                  <p className="text-slate-400">Ethereum DApp with Chainlink Integration</p>
                </div>
              </div>
              <div className="space-y-3 text-slate-300">
                <div className="flex items-center">
                  <ChevronRight className="w-4 h-4 text-blue-400 mr-2" />
                  <span>Role-based access control implementation</span>
                </div>
                <div className="flex items-center">
                  <ChevronRight className="w-4 h-4 text-blue-400 mr-2" />
                  <span>Chainlink price feed integration</span>
                </div>
                <div className="flex items-center">
                  <ChevronRight className="w-4 h-4 text-blue-400 mr-2" />
                  <span>Professional-grade security audits</span>
                </div>
                <div className="flex items-center">
                  <ChevronRight className="w-4 h-4 text-blue-400 mr-2" />
                  <span>30% gas optimization achieved</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Education & Certifications */}
        <motion.section 
          className="mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Education */}
            <div className="bg-gradient-to-br from-emerald-900/40 to-green-900/40 backdrop-blur-lg rounded-3xl p-8 border border-emerald-500/30">
              <div className="flex items-center mb-6">
                <GraduationCap className="w-8 h-8 text-emerald-400 mr-3" />
                <h3 className="text-3xl font-bold text-emerald-400">Education</h3>
              </div>
              <div className="space-y-4">
                <div className="border-l-4 border-emerald-400 pl-4">
                  <h4 className="text-lg font-semibold text-white">Master of Science</h4>
                  <p className="text-emerald-300">Cybersecurity & Information Assurance</p>
                  <p className="text-slate-400">Western Governors University</p>
                </div>
                <div className="border-l-4 border-emerald-400 pl-4">
                  <h4 className="text-lg font-semibold text-white">Master of Science</h4>
                  <p className="text-emerald-300">Software Engineering (In Progress)</p>
                  <p className="text-slate-400">Western Governors University</p>
                </div>
                <div className="border-l-4 border-emerald-400 pl-4">
                  <h4 className="text-lg font-semibold text-white">Bachelor of Science</h4>
                  <p className="text-emerald-300">Cybersecurity & Information Assurance</p>
                  <p className="text-slate-400">Western Governors University</p>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-gradient-to-br from-amber-900/40 to-orange-900/40 backdrop-blur-lg rounded-3xl p-8 border border-amber-500/30">
              <div className="flex items-center mb-6">
                <Award className="w-8 h-8 text-amber-400 mr-3" />
                <h3 className="text-3xl font-bold text-amber-400">Certifications</h3>
              </div>
              <div className="grid grid-cols-1 gap-3">
                {[
                  'CompTIA Security+',
                  'CompTIA CySA+',
                  'EC-Council CEH',
                  'EC-Council CHFI',
                  'SSCP',
                  'ITIL v3',
                  'MCSA',
                  'CISSP (In Progress)'
                ].map((cert, index) => (
                  <motion.div 
                    key={cert}
                    className="flex items-center bg-amber-900/20 rounded-lg p-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 2.7 + index * 0.1 }}
                  >
                    <Award className="w-4 h-4 text-amber-400 mr-3" />
                    <span className="text-slate-300">{cert}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Footer */}
        <motion.footer 
          className="text-center py-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
        >
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-lg rounded-2xl p-6 border border-slate-600/30">
            <p className="text-slate-400 mb-2">
              Ready to secure your digital future with cutting-edge cybersecurity and blockchain expertise
            </p>
            <div className="flex justify-center space-x-4 text-sm">
              <span className="text-cyan-400">Application Security</span>
              <span className="text-slate-500">•</span>
              <span className="text-purple-400">Blockchain Security</span>
              <span className="text-slate-500">•</span>
              <span className="text-green-400">Cloud Security</span>
              <span className="text-slate-500">•</span>
              <span className="text-orange-400">DevSecOps</span>
            </div>
          </div>
        </motion.footer>
      </div>
    </div>
  )
}

export default App

