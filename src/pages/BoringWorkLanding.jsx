import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, MessageSquare, Brain, ClipboardCheck, Settings, Rocket, Puzzle, Sparkles, PhoneCall, Workflow, Cpu, Link, BarChart3, Shield } from 'lucide-react';
import manImage from '../assets/man.png';
import busymanImage from '../assets/busyman.png';
import automationsImage from '../assets/Automations.png';
import relievedmanImage from '../assets/relievedman.png';
import boringrobotImage from '../assets/boringrobot.png';
import smilingrobot2Image from '../assets/smilingrobot2.png';
import smilingrobotImage from '../assets/smilingrobot.png';
import seriousrobotImage from '../assets/seriousrobot.png';
import gradient1Image from '../assets/gradient1.png';
import shieldIcon from '../assets/11.png';
import seamlessintegrationIcon from '../assets/12.png';
import datainsightsIcon from '../assets/13.png';
import customworkflowIcon from '../assets/14.png';
import aiintegrationIcon from '../assets/15.png';
import modiaHealthLogo from '../assets/MODIA_HEALTH_MED-03.png';
import modiaEnhanceLogo from '../assets/Untitled (70 x 70 mm).png';
import redOxLogo from '../assets/Capture.JPG';
import gearsImage from '../assets/gears.png';
import Meta from '../components/seo/Meta';
import SmsPopup from '../components/ui/SmsPopup';

// What's Possible - Professional Tabbed Interface
const WhatsPossibleCategories = () => {
  const [activeTab, setActiveTab] = useState('customer');
  const [expandedCard, setExpandedCard] = useState(null);

  const categories = [
    {
      id: 'customer',
      title: 'Customer Experience',
      description: <span>Transform <span className="text-blue-600 font-bold">customer interactions</span> with <span className="text-blue-600 font-bold">automated booking</span>, <span className="text-blue-600 font-bold">24/7 support</span>, and <span className="text-blue-600 font-bold">seamless communication</span></span>,
      automations: [
        {
          id: 'appointment-booking',
          title: 'Automated Appointment Booking',
          description: 'Voice & text booking via WhatsApp/SMS with instant calendar sync',
          timeSaved: '5+ hours/week',
          integrations: ['WhatsApp Business', 'Google Calendar', 'Twilio'],
          example: 'Customer texts "Book haircut Tuesday 2pm" → Auto-confirms & adds to calendar'
        },
        {
          id: 'support-bot',
          title: '24/7 Support Automation',
          description: 'AI-powered customer service that handles inquiries after hours',
          timeSaved: '6+ hours/week',
          integrations: ['ChatGPT', 'WhatsApp', 'Knowledge Base'],
          example: 'Customer asks about hours at 11pm → Bot responds instantly with accurate info'
        },
        {
          id: 'review-collection',
          title: 'Review Collection System',
          description: 'Automatically request and track customer reviews across platforms',
          timeSaved: '4+ hours/week',
          integrations: ['Google Business', 'Facebook', 'Email'],
          example: 'After service completion → Auto-send personalized review requests'
        },
        {
          id: 'message-hub',
          title: 'Unified Message Hub',
          description: 'All customer messages in one place - SMS, email, Facebook, WhatsApp',
          timeSaved: '5+ hours/week',
          integrations: ['Multi-channel Inbox'],
          example: 'Customer messages from any platform appear in one unified dashboard'
        },
        {
          id: 'complaint-resolution',
          title: 'AI Complaint Resolution',
          description: 'Automatically resolve common customer complaints with AI analysis',
          timeSaved: '6+ hours/week',
          integrations: ['AI Analysis', 'CRM Integration'],
          example: 'Customer complaint → AI analyzes issue and provides resolution steps'
        },
        {
          id: 'voice-booking',
          title: 'Voice-Based Booking',
          description: 'Customers can book appointments using voice commands',
          timeSaved: '4+ hours/week',
          integrations: ['Voice AI', 'Calendar Systems'],
          example: 'Customer calls and says "Book me for tomorrow at 3pm" → Auto-confirmed'
        }
      ]
    },
    {
      id: 'financial',
      title: 'Financial Operations',
      description: <span>Eliminate <span className="text-blue-600 font-bold">accounting headaches</span> with <span className="text-blue-600 font-bold">smart invoicing</span>, <span className="text-blue-600 font-bold">expense tracking</span>, and <span className="text-blue-600 font-bold">automated reminders</span></span>,
      automations: [
        {
          id: 'smart-invoicing',
          title: 'Smart Invoice Generation',
          description: 'Auto-create and send invoices from completed jobs',
          timeSaved: '6+ hours/week',
          integrations: ['QuickBooks', 'Xero', 'PDF Generator'],
          example: 'Job marked complete → Invoice auto-generated, sent, and logged'
        },
        {
          id: 'receipt-processing',
          title: 'Receipt Processing',
          description: 'Scan receipts, categorize expenses, update books automatically',
          timeSaved: '4+ hours/week',
          integrations: ['OCR', 'Accounting Software'],
          example: 'Photo of receipt → Data extracted and categorized automatically'
        },
        {
          id: 'payment-reminders',
          title: 'Payment Reminders',
          description: 'Track overdue invoices and send gentle reminders',
          timeSaved: '4+ hours/week',
          integrations: ['Email', 'SMS', 'Payment Tracking'],
          example: 'Invoice 7 days overdue → Auto-send friendly payment reminder'
        },
        {
          id: 'quote-automation',
          title: 'Quote Automation',
          description: 'Generate professional quotes in minutes, not hours',
          timeSaved: '5+ hours/week',
          integrations: ['Templates', 'PDF Generation'],
          example: 'Customer inquiry → Branded quote created in under 2 minutes'
        },
        {
          id: 'payroll-processing',
          title: 'Automated Payroll',
          description: 'Calculate wages, taxes, and generate payslips automatically',
          timeSaved: '8+ hours/week',
          integrations: ['Time Tracking', 'Tax Calculation', 'Banking'],
          example: 'End of month → Auto-calculate payroll and generate payslips'
        },
        {
          id: 'expense-reimbursement',
          title: 'Expense Reimbursement',
          description: 'Auto-approve and reimburse employee expenses',
          timeSaved: '4+ hours/week',
          integrations: ['Receipt Scanning', 'Approval Workflows'],
          example: 'Employee submits receipt → Auto-approved and reimbursed'
        },
        {
          id: 'tax-preparation',
          title: 'Tax Preparation Assistant',
          description: 'Automated tax calculation and filing preparation',
          timeSaved: '2.5+ hours/week',
          integrations: ['Tax Software', 'Financial Records'],
          example: 'Quarter end → Auto-calculate taxes and prepare filing documents'
        }
      ]
    },
    {
      id: 'team',
      title: 'Team Management',
      description: <span>Supercharge <span className="text-blue-600 font-bold">team productivity</span> with <span className="text-blue-600 font-bold">automated scheduling</span>, <span className="text-blue-600 font-bold">timesheet tracking</span>, and <span className="text-blue-600 font-bold">onboarding workflows</span></span>,
      automations: [
        {
          id: 'timesheet-automation',
          title: 'Timesheet Automation',
          description: 'Track hours, breaks, and overtime without manual entry',
          timeSaved: '4+ hours/week',
          integrations: ['Time Tracking', 'Payroll Sync'],
          example: 'Staff clock in/out via phone → Hours auto-calculated & logged'
        },
        {
          id: 'staff-scheduling',
          title: 'Staff Scheduling',
          description: 'Auto-schedule shifts based on availability and demand',
          timeSaved: '4+ hours/week',
          integrations: ['Scheduling Software', 'Calendar'],
          example: 'Set rules → System creates optimal schedule automatically'
        },
        {
          id: 'onboarding-workflow',
          title: 'Onboarding Workflow',
          description: 'New hire paperwork, training checklists, document collection',
          timeSaved: '1+ hours/week',
          integrations: ['Document Management', 'Task Tracking'],
          example: 'New hire starts → Auto-send forms and track completion'
        },
        {
          id: 'performance-tracking',
          title: 'Performance Tracking',
          description: 'Monitor employee goals, feedback, and performance metrics',
          timeSaved: '4+ hours/week',
          integrations: ['Performance Software', 'Goal Tracking'],
          example: 'Monthly reviews → Auto-collect feedback and generate reports'
        },
        {
          id: 'absence-management',
          title: 'Leave & Absence Management',
          description: 'Track PTO, sick days, and manage leave requests automatically',
          timeSaved: '2+ hours/week',
          integrations: ['Calendar Systems', 'HR Software'],
          example: 'Employee requests leave → Auto-approved and calendar updated'
        },
        {
          id: 'training-scheduling',
          title: 'Training & Development',
          description: 'Schedule training sessions and track employee development',
          timeSaved: '4+ hours/week',
          integrations: ['Learning Management', 'Calendar Systems'],
          example: 'New certification needed → Auto-schedule training and track progress'
        }
      ]
    },
    {
      id: 'operations',
      title: 'Daily Operations',
      description: <span>Streamline <span className="text-blue-600 font-bold">daily operations</span> with <span className="text-blue-600 font-bold">inventory management</span>, <span className="text-blue-600 font-bold">document organization</span>, and <span className="text-blue-600 font-bold">supplier automation</span></span>,
      automations: [
        {
          id: 'inventory-tracking',
          title: 'Inventory Tracking',
          description: 'Know when stock is low, auto-order from suppliers',
          timeSaved: '5+ hours/week',
          integrations: ['Inventory Management', 'Supplier Integration'],
          example: 'Stock hits threshold → Auto-create purchase order & notify supplier'
        },
        {
          id: 'document-organization',
          title: 'Document Organization',
          description: 'Find any contract, permit, or document instantly with AI search',
          timeSaved: '4+ hours/week',
          integrations: ['Cloud Storage', 'AI Search'],
          example: 'Ask "Where\'s the lease agreement?" → System finds it instantly'
        },
        {
          id: 'supplier-management',
          title: 'Supplier Management',
          description: 'Automated POs, delivery tracking, and invoice matching',
          timeSaved: '4+ hours/week',
          integrations: ['Email', 'Order Management'],
          example: 'Create order → Auto-send to supplier and track delivery'
        },
        {
          id: 'customer-followups',
          title: 'Customer Follow-ups',
          description: 'Auto-send thank you messages, review requests, re-booking reminders',
          timeSaved: '4+ hours/week',
          integrations: ['Email', 'SMS Automation'],
          example: 'Service complete → Thank you message and review request sent automatically'
        },
        {
          id: 'quality-control',
          title: 'Quality Control System',
          description: 'Automated checklists and quality assurance for service delivery',
          timeSaved: '4+ hours/week',
          integrations: ['Quality Management', 'Task Tracking'],
          example: 'Service checklist → Auto-verify completion and flag issues'
        },
        {
          id: 'compliance-monitoring',
          title: 'Compliance Monitoring',
          description: 'Track regulatory compliance and generate audit reports',
          timeSaved: '5+ hours/week',
          integrations: ['Compliance Software', 'Document Management'],
          example: 'Monthly audit → Auto-generate compliance reports and alerts'
        },
        {
          id: 'facility-management',
          title: 'Facility Management',
          description: 'Schedule maintenance, track assets, and manage facility requests',
          timeSaved: '4+ hours/week',
          integrations: ['Maintenance Software', 'Asset Tracking'],
          example: 'Equipment due for service → Auto-create work order and notify technician'
        }
      ]
    },
    {
      id: 'marketing',
      title: 'Marketing & Content',
      description: <span>Scale <span className="text-blue-600 font-bold">marketing efforts</span> with <span className="text-blue-600 font-bold">social automation</span>, <span className="text-blue-600 font-bold">AI content creation</span>, and <span className="text-blue-600 font-bold">email campaigns</span></span>,
      automations: [
        {
          id: 'social-automation',
          title: 'Social Media Automation',
          description: 'Schedule posts, auto-respond to comments, track engagement',
          timeSaved: '6+ hours/week',
          integrations: ['Facebook', 'Instagram', 'Google Business'],
          example: 'Create content once → Auto-post to all platforms at optimal times'
        },
        {
          id: 'content-creation',
          title: 'Content Creation',
          description: 'AI-generated posts, images, and promotional materials',
          timeSaved: '5+ hours/week',
          integrations: ['AI Content Tools', 'Image Generation'],
          example: 'Describe promotion → System creates post, image, and hashtags'
        },
        {
          id: 'email-campaigns',
          title: 'Email Campaigns',
          description: 'Automated newsletters, promotions, and customer updates',
          timeSaved: '4+ hours/week',
          integrations: ['Email Marketing Platforms'],
          example: 'Monthly specials → Auto-create & send to customer segments'
        },
        {
          id: 'content-repurposing',
          title: 'Content Repurposing',
          description: 'Transform blog posts into social media, videos, and infographics',
          timeSaved: '6+ hours/week',
          integrations: ['Content Management', 'Social Platforms'],
          example: 'Write blog post → Auto-create social snippets, images, and schedule posts'
        },
        {
          id: 'seo-optimization',
          title: 'SEO Optimization',
          description: 'Monitor rankings, suggest improvements, and track competitors',
          timeSaved: '5+ hours/week',
          integrations: ['SEO Tools', 'Analytics'],
          example: 'Weekly report → Keyword rankings, competitor analysis, and recommendations'
        },
        {
          id: 'video-generation',
          title: 'AI Video Creation',
          description: 'Generate short-form videos for social media from text descriptions',
          timeSaved: '5+ hours/week',
          integrations: ['AI Video Tools', 'Social Platforms'],
          example: 'Describe product → Auto-create 15-second video and post to TikTok'
        }
      ]
    },
    {
      id: 'insights',
      title: 'Data & Insights',
      description: <span>Unlock <span className="text-blue-600 font-bold">business intelligence</span> with <span className="text-blue-600 font-bold">automated reports</span>, <span className="text-blue-600 font-bold">feedback analysis</span>, and <span className="text-blue-600 font-bold">trend tracking</span></span>,
      automations: [
        {
          id: 'automated-reports',
          title: 'Automated Reports',
          description: 'Daily/weekly business performance reports in your inbox',
          timeSaved: '4+ hours/week',
          integrations: ['Business Analytics', 'Report Generation'],
          example: 'Every Monday 8am → Get comprehensive performance report automatically'
        },
        {
          id: 'feedback-analysis',
          title: 'Customer Feedback Analysis',
          description: 'Collect, analyze, and act on customer feedback automatically',
          timeSaved: '2+ hours/week',
          integrations: ['Survey Tools', 'Sentiment Analysis'],
          example: 'Reviews/surveys → AI analyzes sentiment and highlights issues'
        },
        {
          id: 'trend-tracking',
          title: 'Trend Tracking',
          description: 'Monitor business trends, competitor pricing, market changes',
          timeSaved: '2+ hours/week',
          integrations: ['Web Monitoring', 'Analytics'],
          example: 'Track competitor prices → Get alerts when rates change'
        },
        {
          id: 'predictive-analytics',
          title: 'Predictive Analytics',
          description: 'Forecast demand, predict customer churn, and optimize pricing',
          timeSaved: '6+ hours/week',
          integrations: ['Machine Learning', 'Data Analysis'],
          example: 'Historical data → Predict next month\'s demand and optimal pricing'
        },
        {
          id: 'competitor-intelligence',
          title: 'Competitor Intelligence',
          description: 'Monitor competitor activities, pricing, and market positioning',
          timeSaved: '4+ hours/week',
          integrations: ['Web Scraping', 'Social Monitoring'],
          example: 'Daily scan → Reports on competitor promotions and market changes'
        },
        {
          id: 'customer-segmentation',
          title: 'Customer Segmentation',
          description: 'Automatically categorize customers and personalize communications',
          timeSaved: '4+ hours/week',
          integrations: ['CRM', 'Analytics'],
          example: 'Customer data → Auto-segment into groups and suggest personalized offers'
        }
      ]
    },
    {
      id: 'inventory',
      title: 'Inventory & Supply Chain',
      description: <span>Optimize <span className="text-blue-600 font-bold">inventory management</span> with <span className="text-blue-600 font-bold">automated tracking</span>, <span className="text-blue-600 font-bold">demand forecasting</span>, and <span className="text-blue-600 font-bold">supplier automation</span></span>,
      automations: [
        {
          id: 'stock-monitoring',
          title: 'Smart Stock Monitoring',
          description: 'Real-time inventory tracking with automatic reorder alerts',
          timeSaved: '5+ hours/week',
          integrations: ['Inventory Systems', 'Supplier APIs'],
          example: 'Stock hits minimum → Auto-generate purchase order and notify supplier'
        },
        {
          id: 'demand-forecasting',
          title: 'Demand Forecasting',
          description: 'AI-powered predictions for inventory planning and procurement',
          timeSaved: '4+ hours/week',
          integrations: ['Analytics', 'Machine Learning'],
          example: 'Historical sales → Predict next month\'s inventory needs accurately'
        },
        {
          id: 'supplier-management',
          title: 'Supplier Performance Tracking',
          description: 'Monitor supplier reliability, quality, and delivery times',
          timeSaved: '4+ hours/week',
          integrations: ['Supplier Portals', 'Performance Tracking'],
          example: 'Supplier delivers late → Auto-update performance score and alerts'
        },
        {
          id: 'warehouse-optimization',
          title: 'Warehouse Optimization',
          description: 'Optimize storage layout and picking routes automatically',
          timeSaved: '6+ hours/week',
          integrations: ['Warehouse Management', 'Route Optimization'],
          example: 'New inventory → Auto-suggest optimal storage locations'
        }
      ]
    },
    {
      id: 'it-infrastructure',
      title: 'IT & Infrastructure',
      description: <span>Maintain <span className="text-blue-600 font-bold">reliable IT systems</span> with <span className="text-blue-600 font-bold">automated monitoring</span>, <span className="text-blue-600 font-bold">backup systems</span>, and <span className="text-blue-600 font-bold">security management</span></span>,
      automations: [
        {
          id: 'system-monitoring',
          title: 'System Health Monitoring',
          description: '24/7 monitoring of servers, networks, and applications',
          timeSaved: '8+ hours/week',
          integrations: ['Monitoring Tools', 'Alert Systems'],
          example: 'Server down → Auto-alert IT team and attempt auto-recovery'
        },
        {
          id: 'automated-backups',
          title: 'Automated Backup Systems',
          description: 'Scheduled backups with verification and disaster recovery',
          timeSaved: '4+ hours/week',
          integrations: ['Backup Software', 'Cloud Storage'],
          example: 'Daily at 2am → Backup all systems and verify integrity'
        },
        {
          id: 'security-management',
          title: 'Security Threat Detection',
          description: 'Monitor for security threats and automate response actions',
          timeSaved: '6+ hours/week',
          integrations: ['Security Tools', 'SIEM Systems'],
          example: 'Suspicious activity → Auto-block IP and alert security team'
        },
        {
          id: 'user-access-control',
          title: 'User Access Management',
          description: 'Automate user onboarding, access rights, and offboarding',
          timeSaved: '4+ hours/week',
          integrations: ['Identity Management', 'HR Systems'],
          example: 'New employee → Auto-create accounts and assign appropriate access'
        }
      ]
    },
    {
      id: 'project-management',
      title: 'Project Management',
      description: <span>Streamline <span className="text-blue-600 font-bold">project delivery</span> with <span className="text-blue-600 font-bold">automated tracking</span>, <span className="text-blue-600 font-bold">resource allocation</span>, and <span className="text-blue-600 font-bold">progress reporting</span></span>,
      automations: [
        {
          id: 'project-status-updates',
          title: 'Automated Status Reports',
          description: 'Generate daily/weekly project status updates automatically',
          timeSaved: '4+ hours/week',
          integrations: ['Project Management Tools', 'Reporting Systems'],
          example: 'Every Monday → Auto-generate project status report for all stakeholders'
        },
        {
          id: 'deadline-tracking',
          title: 'Deadline & Milestone Tracking',
          description: 'Monitor project deadlines and send automated reminders',
          timeSaved: '2+ hours/week',
          integrations: ['Calendar Systems', 'Notification Tools'],
          example: 'Task due tomorrow → Auto-remind team member and escalate if needed'
        },
        {
          id: 'resource-allocation',
          title: 'Resource Allocation',
          description: 'Automatically assign tasks based on availability and skills',
          timeSaved: '4+ hours/week',
          integrations: ['Resource Management', 'Scheduling Tools'],
          example: 'New task → Auto-assign to best available team member'
        },
        {
          id: 'budget-tracking',
          title: 'Project Budget Monitoring',
          description: 'Track project expenses and alert when budget thresholds are reached',
          timeSaved: '2+ hours/week',
          integrations: ['Financial Systems', 'Project Tools'],
          example: 'Budget 80% used → Auto-alert project manager and suggest adjustments'
        }
      ]
    }
  ];

  const getAutomationBenefit = (automationId) => {
    const benefits = {
      // Customer Experience
      'appointment-booking': "Never miss a booking opportunity! This smart system captures leads 24/7 and instantly syncs with your calendar, turning 'maybe later' into confirmed appointments.",
      'support-bot': "Your customers get instant answers while you sleep. This AI assistant handles routine inquiries, freeing your team for complex customer relationships.",
      'review-collection': "Turn satisfied customers into vocal advocates! Automated review requests capture feedback at the perfect moment when satisfaction is highest.",
      'message-hub': "End the chaos of scattered messages! Every customer interaction flows into one unified dashboard, giving you complete visibility and control.",
      'complaint-resolution': "Transform customer complaints into opportunities! AI analyzes issues instantly and suggests resolutions, turning frustrated customers into loyal fans.",
      'voice-booking': "Talk is cheap—unless it books appointments! Voice commands make booking effortless, capturing more business from mobile customers on the go.",

      // Financial Operations
      'smart-invoicing': "Invoices that send themselves? This automation eliminates the tedious paperwork, ensuring you get paid faster and more reliably.",
      'receipt-processing': "Tired of deciphering crumpled receipts? AI instantly extracts data, categorizes expenses, and updates your books with perfect accuracy.",
      'payment-reminders': "Stop losing money to forgetful clients! Gentle, automated reminders maintain relationships while ensuring your cash flow stays healthy.",
      'quote-automation': "Quotes in minutes, not hours! Professional proposals are generated instantly, helping you win more business with lightning-fast responses.",
      'payroll-processing': "Payroll perfection without the headache! Automated calculations, tax compliance, and direct deposits mean happy employees and zero errors.",
      'expense-reimbursement': "Expense reports that approve themselves! Smart rules instantly process legitimate claims, getting money back to employees faster.",
      'tax-preparation': "Tax season without the stress! Automated calculations and organized documentation make compliance effortless and accurate.",

      // Team Management
      'timesheet-automation': "Timesheets that track themselves! Employees simply clock in/out, while the system calculates wages, breaks, and overtime automatically.",
      'staff-scheduling': "Scheduling that solves itself! AI considers availability, skills, and demand to create optimal schedules that keep everyone happy.",
      'onboarding-workflow': "New hires onboard themselves! Digital paperwork, training assignments, and progress tracking happen automatically from day one.",
      'performance-tracking': "Performance insights that arrive automatically! Regular feedback collection and analysis help your team continuously improve.",
      'absence-management': "Leave requests that manage themselves! Automated approval workflows and calendar updates keep operations running smoothly.",
      'training-scheduling': "Training that finds the right people! Skill gaps are identified automatically, and personalized training programs are scheduled instantly.",

      // Daily Operations
      'inventory-tracking': "Stock levels that watch themselves! Never run out of popular items again with smart reordering that keeps your shelves full.",
      'document-organization': "Find any document in seconds! AI-powered search means contracts, permits, and records are always at your fingertips.",
      'supplier-management': "Suppliers that perform perfectly! Automated tracking ensures reliability, quality, and on-time delivery from your vendor network.",
      'customer-followups': "Customer relationships that nurture themselves! Automated thank-yous, reviews, and rebooking reminders keep clients coming back.",
      'quality-control': "Quality that polices itself! Automated checklists and verification ensure every service meets your high standards.",
      'compliance-monitoring': "Compliance that happens automatically! Regular audits and reports keep you audit-ready without manual effort.",
      'facility-management': "Buildings that maintain themselves! Automated scheduling ensures equipment is serviced and facilities run smoothly.",

      // Marketing & Content
      'social-automation': "Social media that posts itself! Content is scheduled for optimal times across all platforms, growing your audience while you focus on business.",
      'content-creation': "Content that creates itself! AI generates posts, images, and captions that match your brand voice and engage your audience.",
      'email-campaigns': "Email marketing that converts! Automated newsletters and promotions are sent at perfect times with personalized content for each segment.",
      'content-repurposing': "One piece of content becomes many! Blogs automatically transform into social posts, videos, and graphics, maximizing your content ROI.",
      'seo-optimization': "SEO that optimizes itself! Rankings are monitored, competitors analyzed, and actionable recommendations delivered weekly.",
      'video-generation': "Videos that produce themselves! Turn text descriptions into engaging short-form videos that capture attention and drive engagement.",

      // Data & Insights
      'automated-reports': "Business intelligence that arrives daily! Comprehensive reports land in your inbox every morning, giving you data-driven insights instantly.",
      'feedback-analysis': "Customer sentiment that reveals itself! AI analyzes reviews and surveys, highlighting issues and opportunities in real-time.",
      'trend-tracking': "Market changes that alert you instantly! Stay ahead of competitors with automated monitoring of pricing and industry trends.",
      'predictive-analytics': "The future that predicts itself! AI forecasts demand, churn risk, and optimal pricing to help you make smarter business decisions.",
      'competitor-intelligence': "Competitor secrets revealed automatically! Daily reports on promotions, pricing, and strategies keep you one step ahead.",
      'customer-segmentation': "Customers that organize themselves! AI automatically groups customers and suggests personalized marketing strategies for each segment.",

      // Inventory & Supply Chain
      'stock-monitoring': "Inventory that manages itself! Smart alerts prevent stockouts while automated reordering keeps your supply chain flowing smoothly.",
      'demand-forecasting': "Sales predictions that predict themselves! AI analyzes patterns to forecast demand accurately, preventing over/under stocking.",
      'supplier-management': "Supplier performance that tracks itself! Automated monitoring ensures quality, reliability, and optimal vendor relationships.",
      'warehouse-optimization': "Warehouse efficiency that maximizes itself! Smart layout suggestions and picking routes reduce time and increase productivity.",

      // IT & Infrastructure
      'system-monitoring': "IT systems that watch themselves! 24/7 monitoring catches issues before they become problems, keeping your business running smoothly.",
      'automated-backups': "Data protection that happens automatically! Scheduled backups with verification ensure your critical data is always safe and recoverable.",
      'security-management': "Cyber threats that stop themselves! Automated detection and response keeps your business secure without constant monitoring.",
      'user-access-control': "User permissions that manage themselves! Automated onboarding and offboarding ensures security without administrative burden.",

      // Project Management
      'project-status-updates': "Project progress that reports itself! Stakeholders get automatic updates, keeping everyone aligned and informed.",
      'deadline-tracking': "Deadlines that remind themselves! Automated notifications and escalations ensure projects stay on track and on time.",
      'resource-allocation': "Team assignments that optimize themselves! AI matches tasks to the best available people, maximizing productivity and satisfaction.",
      'budget-tracking': "Project spending that monitors itself! Automatic alerts prevent budget overruns and keep projects financially on track."
    };
    return benefits[automationId] || "This automation delivers significant time savings and operational efficiency.";
  };

  const activeCategory = categories.find(cat => cat.id === activeTab);

  return (
    <div className="space-y-12">
      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-3 md:gap-6">
        {categories.map((category, index) => {
          const isActive = activeTab === category.id;

          return (
            <motion.button
              key={category.id}
              onClick={() => {
                setActiveTab(category.id);
                setExpandedCard(null);
              }}
              className={`px-6 py-3 rounded-xl text-xs font-semibold transition-all duration-300 border-2 shadow-sm hover:shadow-md backdrop-blur-sm ${
                isActive
                  ? 'bg-blue-600 border-blue-600 text-white'
                  : 'bg-blue-50 border-blue-200 text-blue-700 hover:bg-blue-100'
              }`}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
                      {category.title}
              <span className={`ml-2 text-xs font-bold ${isActive ? 'opacity-90' : 'opacity-75'}`}>
                ({category.automations.length})
              </span>
            </motion.button>
          );
        })}
                  </div>

      {/* Category Description */}
      <AnimatePresence mode="wait">
                    <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="text-center max-w-2xl mx-auto"
                    >
          <p className="text-base text-gray-600 leading-relaxed">
            {activeCategory.description}
          </p>
                    </motion.div>
      </AnimatePresence>

      {/* Automation Cards Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative"
          layout
        >
        {activeCategory.automations.map((automation, index) => {
                      return (
                        <motion.div
              key={automation.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`group bg-white/95 backdrop-blur-sm rounded-xl border-2 border-blue-200 hover:border-blue-400 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-visible cursor-pointer ${
                expandedCard === automation.id ? 'ring-2 ring-blue-500 shadow-xl z-20 rounded-b-none border-b-0' : ''
              }`}
              onClick={() => setExpandedCard(expandedCard === automation.id ? null : automation.id)}
              whileHover={{ y: -4, scale: 1.01 }}
              layout
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-blue-100/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative z-10 p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-bold text-gray-900 leading-tight">
                    {automation.title}
                  </h3>
                  <svg
                    className={`w-4 h-4 text-gray-400 transform transition-transform ${expandedCard === automation.id ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                              </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {automation.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="font-semibold text-sm px-3 py-1 rounded-full bg-blue-100 text-blue-700">
                    {automation.timeSaved}
                  </span>
                            </div>

                            {/* Expanded Details - Card Expansion Effect */}
                            <div className="relative">
                              <AnimatePresence>
                                {expandedCard === automation.id && (
                                  <motion.div
                                    initial={{ opacity: 0, y: -20, scaleY: 0 }}
                                    animate={{ opacity: 1, y: 0, scaleY: 1 }}
                                    exit={{ opacity: 0, y: -20, scaleY: 0 }}
                                    transition={{
                                      duration: 0.3,
                                      ease: "easeOut",
                                      scaleY: { duration: 0.2 }
                                    }}
                                    className="absolute top-full left-0 right-0 z-30 -mt-px"
                                    style={{ transformOrigin: 'top center' }}
                                  >
                                    <div className="bg-white/95 backdrop-blur-sm rounded-b-xl border-2 border-t-0 border-blue-200 shadow-2xl p-4">
                                      <div className="bg-blue-50 rounded-lg p-4">
                                        <h4 className="text-sm font-semibold text-gray-900 mb-2">How it works:</h4>
                                        <p className="text-sm text-gray-700 leading-relaxed">
                                          {automation.example}
                                        </p>
                                        <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                                          {getAutomationBenefit(automation.id)}
                                        </p>
                                      </div>
                                    </div>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
        </motion.div>
      </AnimatePresence>

      {/* Bottom CTA */}
      <motion.div
        className="text-center max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p className="text-lg text-gray-700 mb-8">
          Don't see what you need? We build custom automation solutions for your unique business requirements.
        </p>
        <button 
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          LET'S DISCUSS YOUR NEEDS
        </button>
      </motion.div>
    </div>
  );
};

const BoringWorkLanding = () => {
  const testimonials = [
    {
      id: 1,
      logo: modiaHealthLogo,
      company: "Modia Health",
      type: "Mobile Radiology Services",
      quote: "BoringWork has literally freed up 80% of our day. The amount of admin required to run a mobile radiology business is staggering and the fact that they automated almost all of it is really quite an achievement. Couldn't be happier and now I can focus on my next big move.",
      color: "from-lime-400 to-lime-600"
    },
    {
      id: 2,
      logo: modiaEnhanceLogo,
      company: "Modia Enhance",
      type: "Business Enhancement Services",
      quote: "BoringWork automated our booking flows, CRM management, emailing and postings to social media. They've made it very easy to focus on bringing in clients rather than managing the admin.",
      color: "from-yellow-400 to-yellow-600"
    },
    {
      id: 3,
      logo: redOxLogo,
      company: "Red Ox Media",
      type: "Creative Marketing Agency",
      quote: "These guys really think outside the box. There isn't much they can't do and they work fast.",
      color: "from-orange-400 to-orange-600"
    }
  ];


  // Scroll animation states
  const [dailyGrindSectionExpanded, setDailyGrindSectionExpanded] = useState(false);
  const [weveBeenThereSectionExpanded, setWeveBeenThereSectionExpanded] = useState(false);
  const [heresWhatChangesSectionExpanded, setHeresWhatChangesSectionExpanded] = useState(false);
  const [perfectDaySectionExpanded, setPerfectDaySectionExpanded] = useState(false);
  const [enterBoringWorkExpanded, setEnterBoringWorkExpanded] = useState(false);
  const [lifeAfterBoringWorkExpanded, setLifeAfterBoringWorkExpanded] = useState(false);

  // Refs for the main sections
  const dailyGrindRef = useRef(null);
  const weveBeenThereRef = useRef(null);
  const heresWhatChangesRef = useRef(null);
  const perfectDayRef = useRef(null);
  const enterBoringWorkRef = useRef(null);
  const lifeAfterBoringWorkRef = useRef(null);


  // Scroll animation based on viewport middle trigger
  useEffect(() => {
    const handleScroll = () => {
      const viewportHeight = window.innerHeight;
      const viewportMiddle = viewportHeight / 2;
      const scrollTop = window.pageYOffset;

      // Check Daily Grind section
      if (dailyGrindRef.current) {
        const element = dailyGrindRef.current;
        const rect = element.getBoundingClientRect();

        // Trigger expansion when section top reaches 60% of viewport height (early trigger)
        const triggerPoint = scrollTop + (viewportHeight * 0.6);
        const shouldExpand = (scrollTop + rect.top) <= triggerPoint;

        // Once expanded, keep it expanded (don't hide when scrolling past)
        if (shouldExpand) {
          setDailyGrindSectionExpanded(true);
        }
      }

      // Check We've Been There section (later trigger - 75%)
      if (weveBeenThereRef.current) {
        const element = weveBeenThereRef.current;
        const rect = element.getBoundingClientRect();
        const elementBottom = scrollTop + rect.bottom;

        // Trigger expansion when section center reaches viewport middle (late trigger)
        const elementCenter = scrollTop + rect.top + (rect.height / 2);
        const shouldExpand = elementCenter <= (scrollTop + viewportMiddle) && elementBottom >= (scrollTop + viewportMiddle);

        setWeveBeenThereSectionExpanded(shouldExpand);
      }

      // Check Here's What Changes section
      if (heresWhatChangesRef.current) {
        const element = heresWhatChangesRef.current;
        const rect = element.getBoundingClientRect();
        const elementBottom = scrollTop + rect.bottom;
        const elementBottomQuarter = elementBottom - (rect.height / 4);

        // Trigger expansion when section top reaches 60% of viewport height (early trigger)
        const triggerPoint = scrollTop + (viewportHeight * 0.6);
        const shouldExpand = (scrollTop + rect.top) <= triggerPoint && elementBottom >= (scrollTop + viewportMiddle);

        setHeresWhatChangesSectionExpanded(shouldExpand);
      }

      // Check Perfect Day section (later trigger - 75%)
      if (perfectDayRef.current) {
        const element = perfectDayRef.current;
        const rect = element.getBoundingClientRect();
        const elementBottom = scrollTop + rect.bottom;

        // Trigger expansion when section center reaches viewport middle (late trigger)
        const elementCenter = scrollTop + rect.top + (rect.height / 2);
        const shouldExpand = elementCenter <= (scrollTop + viewportMiddle) && elementBottom >= (scrollTop + viewportMiddle);

        setPerfectDaySectionExpanded(shouldExpand);
      }

      // Check Enter BoringWork section - expand when scrolled to
      if (enterBoringWorkRef.current) {
        const element = enterBoringWorkRef.current;
        const rect = element.getBoundingClientRect();

        // Trigger expansion when section enters viewport
        const viewportHeight = window.innerHeight;
        const triggerPoint = scrollTop + (viewportHeight * 0.7); // Trigger when 70% down viewport

        const shouldExpand = (scrollTop + rect.top) <= triggerPoint;

        // Once expanded, keep it expanded (don't contract when scrolling past)
        if (shouldExpand && !enterBoringWorkExpanded) {
          setEnterBoringWorkExpanded(true);
        }
      }

      // Check Life After BoringWork section - expand when scrolled to
      if (lifeAfterBoringWorkRef.current) {
        const element = lifeAfterBoringWorkRef.current;
        const rect = element.getBoundingClientRect();

        // Trigger expansion when section enters viewport
        const viewportHeight = window.innerHeight;
        const triggerPoint = scrollTop + (viewportHeight * 0.7); // Trigger when 70% down viewport

        const shouldExpand = (scrollTop + rect.top) <= triggerPoint;

        // Once expanded, keep it expanded (don't contract when scrolling past)
        if (shouldExpand && !lifeAfterBoringWorkExpanded) {
          setLifeAfterBoringWorkExpanded(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div className="min-h-screen">
      <Meta
        title="BoringWork - AI & Automation Solutions for Small Business"
        description="Say goodbye to busywork with tailored AI & automation solutions. Free up 90% of your time from manual tasks and focus on growing your business."
        keywords="business automation, AI solutions, small business, productivity, workflow automation, business efficiency"
      />
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 flex items-center justify-center">
                <img 
                  src={boringrobotImage} 
                  alt="BoringWork Robot Logo" 
                  className="w-12 h-12 object-contain"
                />
              </div>
              <span className="text-xl font-bold">
                <span className="text-gray-900">Boring</span>
                <span className="text-blue-500">Work</span>
              </span>
            </div>

            {/* Navigation */}
            <nav className="flex items-center space-x-8">
              <a href="#contact" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">Contact Us</a>
            </nav>
          </div>
        </div>
      </header>
      {/* Hero Section */}
      <section 
        className="relative py-20 lg:py-32 overflow-hidden"
        style={{
          background: `
            linear-gradient(135deg, transparent 0px, transparent 9px, rgba(156, 163, 175, 0) 9px, rgba(156, 163, 175, 0) 10px, transparent 10px, transparent 19px, rgba(156, 163, 175, 0) 19px, rgba(156, 163, 175, 0) 20px),
            linear-gradient(to bottom, 
              rgba(240, 253, 244, 0.1) 0%, 
              rgba(254, 243, 199, 0.1) 30%, 
              rgba(255, 237, 213, 0.1) 60%,
              rgba(255, 237, 213, 0.3) 100%
            ),
            linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)),
            url(${gradient1Image})
          `,
          backgroundSize: '20px 20px, 100% 100%, 100% 100%, cover',
          backgroundPosition: '0 0, 0 0, 0 0, center'
        }}
      >
        {/* Diagonal Lines Fade-in Overlay */}
        <div 
          className="absolute inset-0 w-full h-full z-0"
          style={{
            background: `repeating-linear-gradient(135deg, transparent, transparent 9px, rgba(156, 163, 175, 0.04) 9px, rgba(156, 163, 175, 0.04) 10px)`,
            mask: `linear-gradient(to bottom, transparent 0%, transparent 66.67%, black 100%)`,
            WebkitMask: `linear-gradient(to bottom, transparent 0%, transparent 20.67%, black 100%)`
          }}
        />
        {/* Current Background with 90% transparency */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="relative z-30 space-y-8">
              <div className="space-y-6">
                {/* Eyebrow Section */}
                <div className="flex items-center text-sm font-semibold text-gray-500 uppercase tracking-wide">
                  <span>Small to Medium Business Owners</span>
                  <div className="ml-4 h-px bg-gray-500 w-16"></div>
                </div>
                
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-gray-900">
                  Say Goodbye to
                  <br />
                  <span className="text-orange-500">Busywork</span>.
                  <br />
                </h1>

                <p className="text-lg lg:text-2xl text-gray-800 max-w-lg">
                  Tailored AI & Automation Solutions for Your Business
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  className="text-white font-bold text-sm uppercase tracking-wide px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  style={{
                    backgroundColor: '#1a6388',
                    boxShadow: '0 4px 14px 0 rgba(26, 99, 136, 0.39)'
                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#145066'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = '#1a6388'}
                >
                  BOOK A FREE AUDIT
                </button>
                <button 
                  className="text-white font-bold text-sm uppercase tracking-wide px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                  style={{
                    backgroundColor: '#ea7a2c'
                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#d16a1f'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = '#ea7a2c'}
                >
                  <div className="flex items-center justify-center gap-2">
                    SEE WHAT'S POSSIBLE
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </button>
              </div>
            </div>
            {/* Right Column - Hero Image */}
            <div className="relative z-30">
              <img
                src={manImage}
                alt="Professional man using tablet in modern kitchen workspace"
                className="relative z-40 w-full h-auto object-contain"
                style={{ left: '-24px' }}
              />
              {/* Overlapping Smiling Robot Image */}
              <img
                src={smilingrobot2Image}
                alt="Smiling robot mascot"
                className="absolute -bottom-10 z-50 h-[280px] w-auto object-contain"
                style={{ right: '-124px' }}
              />
            </div>
          </div>
          <div className="flex items-mid justify-center mt-20 mb-10 text-lg font-semibold text-gray-500 tracking-wide">
          <p className="text-2xl lg:text-4xl font-bold text-gray-900">
                  Boring<span className="text-blue-500">Work</span> helps you get your life back.
                </p>
                </div>
          {/* Core Services Cards */}
          <div className="mt-20 relative z-30">
            {/* Section Header */}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {/* Card 1: Data Privacy & Security */}
              <motion.div 
                className="group bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/20 hover:border-blue-300/60 relative overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-blue-100/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10 flex flex-col items-center text-center space-y-6">
                  <div className="w-24 h-24 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <img src={shieldIcon} alt="Data Privacy & Security" className="w-full h-full object-contain" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
                      Custom Workflow Automations
                    </h3>
                  </div>
                </div>
              </motion.div>

              {/* Card 2: Seamless System Integration */}
              <motion.div 
                className="group bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/20 hover:border-orange-300/60 relative overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-orange-100/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10 flex flex-col items-center text-center space-y-6">
                  <div className="w-24 h-24 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <img src={seamlessintegrationIcon} alt="Seamless System Integration" className="w-full h-full object-contain" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-700 transition-colors duration-300">
                      Smart AI Integrations
                    </h3>
                  </div>
                </div>
              </motion.div>

              {/* Card 3: Data Transformation & Insights */}
              <motion.div 
                className="group bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/20 hover:border-emerald-300/60 relative overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-emerald-100/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10 flex flex-col items-center text-center space-y-6">
                  <div className="w-24 h-24 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <img src={datainsightsIcon} alt="Data Transformation & Insights" className="w-full h-full object-contain" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-emerald-700 transition-colors duration-300">
                      Seamless System Integrations
                    </h3>
                  </div>
                </div>
              </motion.div>

              {/* Card 4: Custom Workflow Automations */}
              <motion.div
                className="group bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/20 hover:border-lime-300/60 relative overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-lime-50/50 to-lime-100/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10 flex flex-col items-center text-center space-y-6">
                  <div className="w-24 h-24 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <img src={customworkflowIcon} alt="Custom Workflow Automations" className="w-full h-full object-contain" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-lime-700 transition-colors duration-300">
                      Data Transformation & Insights
                    </h3>
                  </div>
                </div>
              </motion.div>

              {/* Card 5: Smart AI Integrations */}
              <motion.div
                className="group bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/20 hover:border-yellow-300/60 relative overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-50/50 to-yellow-100/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10 flex flex-col items-center text-center space-y-6">
                  <div className="w-24 h-24 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <img src={aiintegrationIcon} alt="Smart AI Integrations" className="w-full h-full object-contain" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-yellow-700 transition-colors duration-300">
                      Preserving Data Privacy & Security
                    </h3>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* PAS Section - High Converting Flow */}
      <section 
        className="relative py-14 lg:py-20 overflow-hidden"
        style={{
          background: `
            repeating-linear-gradient(135deg, transparent, transparent 9px, rgba(156, 163, 175, 0.04) 9px, rgba(156, 163, 175, 0.04) 10px),
            linear-gradient(to bottom, #fafafa 0%,rgb(251, 250, 249) 30%,rgb(254, 228, 199) 70%, #fed7aa 100%)
          `,
          backgroundSize: '100% 100%'
        }}
      >
        {/* Creative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-green-500/10 to-lime-200/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Hero Introduction - Problem Setup */}
          <div className="text-center mb-10">
              <h2 className="text-xl lg:text-2xl font-bold text-gray-900">
              Let's be honest. <br /> <br />  <br /><span className="text-3xl lg:text-3xl">Success brings  <span className="text-orange-600">more admin</span> than you ever asked for.</span>
              </h2>

           
          </div>

          {/* Combined Problem & Understanding - Redesigned Layout */}
          <div ref={dailyGrindRef} className="relative mb-10">
            {/* Top Section - Image Left, List Right */}
            <div className="flex flex-col lg:flex-row items-start gap-12 mb-16">
              {/* Image - Flush Left */}
              <motion.div
                className="flex-shrink-0"
                initial={{ opacity: 0, x: -50 }}
                animate={dailyGrindSectionExpanded ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <div className="w-full max-w-md relative">
                  {/* Subtle light orange blurred background */}
                  <div
                    className="absolute inset-0 rounded-r-lg opacity-20"
                    style={{
                      background: 'radial-gradient(circle, rgba(255, 193, 7, 0.15) 0%, rgba(255, 152, 0, 0.08) 40%, transparent 70%)',
                      filter: 'blur(40px)',
                      transform: 'scale(1.1)',
                      zIndex: 0
                    }}
                  />
                  <img
                    src={busymanImage}
                    alt="Stressed business owner overwhelmed with paperwork and tasks"
                    className="relative z-10 w-full h-auto object-cover rounded-r-lg"
                  />
                </div>
              </motion.div>

              {/* List - Right Side */}
              <motion.div
                className="flex-1 space-y-8 mt-20"
                initial={{ opacity: 0, x: 50 }}
                animate={dailyGrindSectionExpanded ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <motion.div
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={dailyGrindSectionExpanded ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  </div>
                  <p className="text-xl text-gray-700 leading-relaxed">
                    <span className="text-gray-700">To-do lists that just get bigger and bigger</span>.
                  </p>
                </motion.div>

                <motion.div
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={dailyGrindSectionExpanded ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  </div>
                  <p className="text-xl text-gray-700 leading-relaxed">
                    Not delegating things for a fear it won't be done right.
                  </p>
                </motion.div>


                <motion.div
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={dailyGrindSectionExpanded ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 1.0, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  </div>
                  <p className="text-xl text-gray-700 leading-relaxed">
                    Your "CRM" is a messy Excel file you're too scared to open.
                  </p>
                </motion.div>

                <motion.div
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={dailyGrindSectionExpanded ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 1.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  </div>
                  <p className="text-xl text-gray-700 leading-relaxed">
                    You're the CEO, but also the receptionist, bookkeeper, admin assistant.
                  </p>
                </motion.div>

                <motion.div
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={dailyGrindSectionExpanded ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  </div>
                  <p className="text-xl text-gray-700 leading-relaxed">
                    Wondering if this is really what being your own boss looks like.
                  </p>
                </motion.div>

                <motion.div
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={dailyGrindSectionExpanded ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 1.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  </div>
                  <p className="text-2xl text-gray-700 leading-relaxed font-bold">
                    You want more leads, but you're <span className="underline">stuck in the weeds</span>.
                  </p>
                </motion.div>
              </motion.div>
            </div>

            {/* Bottom Section - Centered Text */}
            <motion.div
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 50 }}
              animate={dailyGrindSectionExpanded ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <motion.h3
                className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={dailyGrindSectionExpanded ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 1.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                We understand the <span className="text-orange-600">pain.</span> <br /> <br /> 
              </motion.h3>

              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, y: 30 }}
                animate={dailyGrindSectionExpanded ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 1.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
             

                <p className="text-lg text-gray-600 leading-relaxed">
                  We know the struggle because we've lived it too, <strong>and built solutions that <span className="text-orange-600 underline font-semibold">crush it</span></strong>.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    
      {/* What We Do - Solutions Section */}
      <section 
        className="relative py-24 lg:py-20 overflow-hidden"
        style={{
          background: `
            repeating-linear-gradient(135deg, transparent, transparent 9px, rgba(156, 163, 175, 0.04) 9px, rgba(156, 163, 175, 0.04) 10px),
            linear-gradient(to bottom, #fed7aa 0%, #fef3c7 30%, #f0fdf4 70%, #dcfce7 100%)
          `,
          backgroundSize: '100% 100%'
        }}
      >
        {/* Creative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-lime-200/20 to-yellow-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-tl from-yellow-200/15 to-green-500/15 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-green-500/10 to-lime-200/10 rounded-full blur-3xl"></div>
        </div>
        <div ref={enterBoringWorkRef} className="text-center mb-40 mt-10">
            <div className="flex items-center justify-center gap-20">
              <motion.img
                src={seriousrobotImage}
                alt="Serious robot mascot with cape and wrench"
                className="w-32 h-20 lg:w-40 lg:h-40 object-contain"
                initial={{ opacity: 0, x: -50 }}
                animate={enterBoringWorkExpanded ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              />
              <motion.h2
                className="text-2xl lg:text-6xl font-bold text-gray-900"
                initial={{ opacity: 0, scale: 0.8, y: -50 }}
                animate={enterBoringWorkExpanded ? { opacity: 1, scale: 1.2, y: 0 } : { opacity: 0, scale: 0.8, y: -50 }}
                transition={{ duration: 1, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                style={{
                  transformOrigin: 'center'
                }}
              >
                Enter Boring<span className="text-blue-500">Work</span>.
              </motion.h2>
            </div>
          </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            
            <motion.p 
              className="text-xl lg:text-3xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-bold"
              initial={{ opacity: 0, y: 30 }}
              animate={enterBoringWorkExpanded ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              We <span className="text-yellow-00 font-bold">untangle the mess</span> and <span className="text-blue-500 font-bold">automate </span>the boring stuff.
            </motion.p>
          </div>

          {/* Main Content - Image Left, Content Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Left Column - Content */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true }}
            >
              <motion.div
                className="text-center lg:text-left mb-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                viewport={{ once: true }}
              >
                
              </motion.div>

              <motion.h3
                className="text-2xl lg:text-3xl font-bold text-gray-900 text-center lg:text-left"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                viewport={{ once: true }}
              >
                
              </motion.h3>

              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                viewport={{ once: true }}
              >
                 <div className="flex items-start space-x-4">
                   <div className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                     <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                   </div>
                   <div>
                     <h4 className="text-2xl font-bold text-gray-900 mb-2">
                       Repetitive Tasks → Automated
                     </h4>
                     <p className="text-gray-700 leading-relaxed">
                       Invoices, emails, calendar bookings? Gone from your to-do list.
                     </p>
                   </div>
                 </div>

                 <div className="flex items-start space-x-4">
                 <div className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                 <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                   </div>
                   <div>
                     <h4 className="text-2xl font-bold text-gray-900 mb-2">
                       Smart AI → Where It Actually Helps
                     </h4>
                     <p className="text-gray-700 leading-relaxed">
                       We don't just throw AI at your business. We integrate it where it saves time and skip it where it complicates things.
                     </p>
                   </div>
                 </div>

                 <div className="flex items-start space-x-4">
                 <div className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                 <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                   </div>
                   <div>
                     <h4 className="text-2xl font-bold text-gray-900 mb-2">
                       Disconnected Tools → Unified System
                     </h4>
                     <p className="text-gray-700 leading-relaxed">
                       Your apps and platforms finally work together. No more double-handling.
                     </p>
                   </div>
                 </div>

                 <div className="flex items-start space-x-4">
                 <div className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                     <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                   </div>
                   <div>
                     <h4 className="text-2xl font-bold text-gray-900 mb-2">
                       Messy Data → Instant Insights
                     </h4>
                     <p className="text-gray-700 leading-relaxed">
                       We turn raw info into clear dashboards, summaries, and daily reports.
                     </p>
                   </div>
                 </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Image */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true }}
            >
               <div className="relative">
                 <div className="absolute -top-4 -left-4 w-72 h-72 bg-gradient-to-br from-lime-200/30 to-yellow-200/30 rounded-full blur-3xl"></div>
                 <img
                   src={automationsImage}
                   alt="3D illustration of automated business processes and integrations"
                   className="relative z-10 w-full h-auto object-contain"
                 />
               </div>
            </motion.div>
          </div>
        </div>
      </section>
   
      {/* Life After BoringWork Section */}
      <section 
        className="relative py-24 lg:py-10 overflow-hidden"
        style={{
          background: `
            repeating-linear-gradient(135deg, transparent, transparent 9px, rgba(156, 163, 175, 0.04) 9px, rgba(156, 163, 175, 0.04) 10px),
             linear-gradient(to bottom, #dcfce7 0%, #f0fdf4 30%, #fef3c7 70%, #fed7aa 100%)
          `,
          backgroundSize: '100% 100%'
        }}
      >
        {/* Creative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-tl from-emerald-200/15 to-green-200/15 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-green-200/10 to-emerald-200/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Hero Introduction */}
          <div ref={lifeAfterBoringWorkRef} className="text-center mb-20">
            <div className="flex items-center justify-center gap-20">
              <motion.img
                src={smilingrobotImage}
                alt="Smiling robot mascot"
                className="w-32 h-32 lg:w-40 lg:h-40 object-contain"
                initial={{ opacity: 0, x: -50 }}
                animate={lifeAfterBoringWorkExpanded ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              />
              <motion.h2
                className="text-2xl lg:text-6xl font-bold text-gray-900"
                initial={{ opacity: 0, scale: 0.8, y: -50 }}
                animate={lifeAfterBoringWorkExpanded ? { opacity: 1, scale: 1.2, y: 0 } : { opacity: 0, scale: 0.8, y: -50 }}
                transition={{ duration: 1, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                style={{
                  transformOrigin: 'center'
                }}
              >
                Life after Boring<span className="text-blue-500">Work</span>.
              </motion.h2>
            </div>
          </div>

          {/* Main Content Grid - Image and Text */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Image */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true }}
            >
              <div className="relative -mt-40">
                <img
                  src={relievedmanImage}
                  alt="Relieved business owner enjoying free time"
                  className="relative z-10 w-full h-auto object-contain"
                />
              </div>
            </motion.div>

            {/* Right Column - Content */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true }}
            >
              <motion.h3
                className="text-3xl lg:text-4xl font-bold text-gray-900"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                viewport={{ once: true }}
              >
                Suddenly you have free time.
              </motion.h3>

              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.0, ease: [0.25, 0.46, 0.45, 0.94] }}
                  viewport={{ once: true }}
                >
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <p className="text-xl text-gray-700 leading-relaxed">
                    <strong>Comprehensive status reports</strong> magically appear in your inbox overnight.
                  </p>
                </motion.div>

                <motion.div
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                  viewport={{ once: true }}
                >
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <p className="text-xl text-gray-700 leading-relaxed">
                    Those documents <strong>somehow sorted themselves</strong>.
                  </p>
                </motion.div>

                <motion.div
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                  viewport={{ once: true }}
                >
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <p className="text-xl text-gray-700 leading-relaxed">
                    The invoices have been <strong>pre-filled</strong> and are <strong>awaiting your approval</strong>.
                  </p>
                </motion.div>

                <motion.div
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                  viewport={{ once: true }}
                >
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <p className="text-2xl text-gray-700 leading-relaxed">
                    <strong>Hours of boring work</strong> - done before you even opened up your laptop.
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

          {/* Centered Problem Section - Outside Container */}
          <div className="text-center max-w-4xl mx-auto mt-20 px-4 sm:px-6 lg:px-8">
            <motion.div
              className="pt-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true }}
            >
              <p className="text-2xl font-bold text-gray-900 mb-4">
                The only problem?
              </p>

              <motion.h3
                className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                viewport={{ once: true }}
              >
                Spending your free time wisely.
              </motion.h3>

              <motion.p
                className="text-xl text-gray-700 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                viewport={{ once: true }}
              >
                This isn't someday. It's the reality of every business owner that chooses to automate.
              </motion.p>
            </motion.div>
          </div>

          <div className="text-center mt-20">
            <h4 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8">
              Ready to win back your time?
            </h4>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="text-white font-bold text-sm uppercase tracking-wide px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                style={{
                  backgroundColor: '#1a6388',
                  boxShadow: '0 4px 14px 0 rgba(26, 99, 136, 0.39)'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#145066'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#1a6388'}
              >
                BOOK A FREE AUDIT
              </button>
             
            </div>
            <br /><br /><br /><br />
          </div>
        </div>
      </section>

      {/* Testimonials Section - Modern Grid Layout */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-blue-100/30 to-purple-100/30 rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 left-10 w-40 h-40 bg-gradient-to-tr from-orange-100/20 to-pink-100/20 rounded-full blur-2xl"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                What They're Saying
              </h2>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Real businesses. Real results. Real freedom from busywork.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 lg:p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100/50 hover:border-gray-200/70 relative overflow-hidden"
              >
                {/* Subtle gradient accent */}
                <div className={`absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r ${testimonial.color}`}></div>

                {/* Quote mark icon */}
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                  <svg className="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M10 8v8l-6-6V6h6zM22 8v8l-6-6V6h6z"/>
                  </svg>
                </div>

                <div className="relative z-10">
                  {/* Company Logo */}
                  <div className="flex items-center justify-center mb-6">
                    <div className="w-16 h-16 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center p-3 group-hover:shadow-md transition-shadow duration-300">
                      <img
                        src={testimonial.logo}
                        alt={`${testimonial.company} Logo`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>

                  {/* Quote Text */}
                  <blockquote className="text-gray-700 leading-relaxed text-sm lg:text-base mb-6 font-medium">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Author Info */}
                  <div className="pt-4 border-t border-gray-100">
                    <div className="text-center">
                      <p className="text-sm font-semibold text-gray-900 mb-1">{testimonial.company}</p>
                      <p className="text-xs text-gray-500">{testimonial.type}</p>
                    </div>
                  </div>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-gray-50/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* How It Works Section - Horizontal 1x4 Grid */}
      <section id="how-it-works" className="relative bg-gray-50 py-24 lg:py-32 overflow-hidden">
        {/* Creative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-tl from-purple-200/15 to-emerald-200/15 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-emerald-200/10 to-blue-200/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Hero Introduction */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From first call to full automation in 4 simple steps
            </p>
          </div>

          {/* Process Steps - 1x4 Horizontal Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {/* Step 1: Consultation - Blue */}
            <motion.div 
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-blue-500 relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              {/* Background accent */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="flex flex-col items-center text-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center shadow-lg mb-4">
                    <span className="text-3xl">📞</span>
                  </div>
                  <span className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-2">Step 1</span>
                  <h3 className="text-xl font-bold text-gray-900">Free Consultation</h3>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Quick 15-minute call to understand your challenges. No pressure, just clarity.
                </p>

                <div className="space-y-2">
                  <div className="flex items-center text-xs text-gray-600">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                    <span>No sales pitch</span>
                  </div>
                  <div className="flex items-center text-xs text-gray-600">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                    <span>Honest assessment</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Step 2: Audit - Orange */}
            <motion.div 
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-orange-500 relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              {/* Background accent */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="flex flex-col items-center text-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl flex items-center justify-center shadow-lg mb-4">
                    <span className="text-3xl">🔍</span>
                  </div>
                  <span className="text-sm font-bold text-orange-600 uppercase tracking-wider mb-2">Step 2</span>
                  <h3 className="text-xl font-bold text-gray-900">Systems Audit</h3>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Deep dive into your workflow to identify bottlenecks and opportunities.
                </p>

                <div className="space-y-2">
                  <div className="flex items-center text-xs text-gray-600">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></div>
                    <span>Current tools analysis</span>
                  </div>
                  <div className="flex items-center text-xs text-gray-600">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></div>
                    <span>Automation opportunities</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Step 3: Plan - Lime Green */}
            <motion.div 
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-lime-500 relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              {/* Background accent */}
              <div className="absolute inset-0 bg-gradient-to-br from-lime-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="flex flex-col items-center text-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-lime-400 to-lime-600 rounded-xl flex items-center justify-center shadow-lg mb-4">
                    <span className="text-3xl">📋</span>
                  </div>
                  <span className="text-sm font-bold text-lime-600 uppercase tracking-wider mb-2">Step 3</span>
                  <h3 className="text-xl font-bold text-gray-900">Custom Blueprint</h3>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Tailored plan showing what we'll build and exactly how it helps you.
                </p>

                <div className="space-y-2">
                  <div className="flex items-center text-xs text-gray-600">
                    <div className="w-1.5 h-1.5 bg-lime-500 rounded-full mr-2"></div>
                    <span>Clear scope & timeline</span>
                  </div>
                  <div className="flex items-center text-xs text-gray-600">
                    <div className="w-1.5 h-1.5 bg-lime-500 rounded-full mr-2"></div>
                    <span>Transparent pricing</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Step 4: Build & Results - Yellow */}
            <motion.div 
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-yellow-500 relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              {/* Background accent */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="flex flex-col items-center text-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center shadow-lg mb-4">
                    <span className="text-3xl">⚙️</span>
                  </div>
                  <span className="text-sm font-bold text-yellow-600 uppercase tracking-wider mb-2">Step 4</span>
                  <h3 className="text-xl font-bold text-gray-900">Build & Launch</h3>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  We build fast and secure. You start saving time immediately.
                </p>

                <div className="space-y-2">
                  <div className="flex items-center text-xs text-gray-600">
                    <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-2"></div>
                    <span>Seamless integrations</span>
                  </div>
                  <div className="flex items-center text-xs text-gray-600">
                    <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-2"></div>
                    <span>1 year free support</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>


          {/* CTA Section */}
          <div className="text-center">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
                Don't know where to begin?
              </h3>
            <p className="text-xl text-gray-700 mb-12 max-w-2xl mx-auto leading-relaxed">
              That's exactly where most of our clients start. Book a free audit and let's figure it out together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="text-white font-bold text-sm uppercase tracking-wide px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2"
                style={{
                  backgroundColor: '#1a6388',
                  boxShadow: '0 4px 14px 0 rgba(26, 99, 136, 0.39)'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#145066'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#1a6388'}
              >
                <PhoneCall className="w-4 h-4" />
                Book Your Free Audit
              </a>
              <a
                href="#testimonials"
                className="text-white font-bold text-sm uppercase tracking-wide px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg inline-flex items-center justify-center gap-2"
                style={{
                  backgroundColor: '#ea7a2c'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#d16a1f'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#ea7a2c'}
              >
                See What's Possible
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What's Possible Section - Professional Automation Showcase */}
      <section
        className="relative py-20 lg:py-32 overflow-hidden"
        style={{
          background: `
            linear-gradient(135deg, transparent 0px, transparent 9px, rgba(156, 163, 175, 0) 9px, rgba(156, 163, 175, 0) 10px, transparent 10px, transparent 19px, rgba(156, 163, 175, 0) 19px, rgba(156, 163, 175, 0) 20px),
            linear-gradient(to bottom,
              rgba(240, 253, 244, 0.1) 0%,
              rgba(254, 243, 199, 0.1) 30%,
              rgba(255, 237, 213, 0.1) 60%,
              rgba(255, 237, 213, 0.3) 100%
            ),
            linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)),
            url(${gradient1Image})
          `,
          backgroundSize: '20px 20px, 100% 100%, 100% 100%, cover',
          backgroundPosition: '0 0, 0 0, 0 0, center'
        }}
      >
        {/* Diagonal Lines Fade-in Overlay */}
        <div
          className="absolute inset-0 w-full h-full z-0"
          style={{
            background: `repeating-linear-gradient(135deg, transparent, transparent 9px, rgba(156, 163, 175, 0.04) 9px, rgba(156, 163, 175, 0.04) 10px)`,
            mask: `linear-gradient(to bottom, transparent 0%, transparent 66.67%, black 100%)`,
            WebkitMask: `linear-gradient(to bottom, transparent 0%, transparent 20.67%, black 100%)`
          }}
        />

        {/* Creative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-tl from-orange-200/20 to-yellow-200/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-emerald-200/10 to-lime-200/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              What's Possible
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore automation categories and discover how we transform local businesses. Click tabs to browse, expand cards for details.
            </p>
          </div>

          {/* Interactive Category Cards */}
          <WhatsPossibleCategories />
        </div>

        {/* Decorative Gears Background - Bottom */}
        <div 
          className="absolute bottom-0 left-0 right-0 w-full h-[600px] pointer-events-none z-10"
          style={{
            backgroundImage: `url(${gearsImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center bottom',
            backgroundRepeat: 'no-repeat',
            opacity: 0.2,
            maskImage: 'linear-gradient(to bottom, transparent 0%, black 50%, black 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 50%, black 100%)'
          }}
        />
      </section>

      {/* SMS Popup */}
      <SmsPopup />
    </div>
  );
};

export default BoringWorkLanding;

